import { Controller, Post, Logger, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import Result from '@/common/result/Result';
import { getFilePath, uploadFileConfig } from '@/admin/common/upload/config/uploadConfig';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { uploadMultiple, uploadSingle } from './vo/upload';
import { UploadFileDto, UploadFilesDto } from '@/admin/common/upload/dto/upload.dto';
import * as url from 'url';
import * as qiniu from 'qiniu';
import { randomUUID } from 'crypto';
import * as path from 'path';
import { randomString } from '@/common/utils';
import { Config } from '@/config';

@ApiBearerAuth()
@ApiTags('文件上传模块')
@Controller()
export class UploadController {
  private readonly logger = new Logger(UploadController.name);

  @Post('/common/upload')
  @ApiOperation({
    summary: '上传单个文件',
    description: '上传单个文件',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadFileDto,
  })
  @ApiOkResponse({
    schema: {
      example: uploadSingle,
    },
  })
  @UseInterceptors(FileInterceptor('file', uploadFileConfig))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return Result.BadRequest('请选择要上传的文件！');
    }
    const data = {
      fileName: file.filename,
      newFileName: file.filename,
      originalFilename: file.originalname,
      url: getFilePath(file),
      size: file.size,
    };
    return { ...Result.ok(), ...data };
  }

  @Post('/common/uploads')
  @ApiOperation({
    summary: '上传多文件',
    description: '上传多文件',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadFilesDto,
  })
  @ApiOkResponse({
    schema: {
      example: uploadMultiple,
    },
  })
  @UseInterceptors(FilesInterceptor('files', 10, uploadFileConfig))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    if (!files?.length) {
      return Result.BadRequest('请选择要上传的文件！');
    }
    const data = [];
    files.forEach((file) => {
      data.push({
        fileName: file.filename,
        newFileName: file.filename,
        originalFilename: file.originalname,
        url: getFilePath(file),
        size: file.size,
      });
    });
    return Result.ok(data);
  }

  @Post('/common/upload_qiniu')
  @UseInterceptors(FileInterceptor('file'))
  async uploadIcon(@UploadedFile() file: Express.Multer.File) {
    const accessKey = Config.qiniu.accessKey;
    const secretKey = Config.qiniu.secretKey;
    const bucket = Config.qiniu.bucket;
    const domain = Config.qiniu.domain;
    // const accessKey = 'oTzKv609ytvA-h9A4eyDx-n9ygb_UvtUFPhgm6ok';
    // const secretKey = 'xge3PKlU00jzoABohV5994UeAWX6ZAixcE9UwL6l';
    // const bucket = 'dasset';
    // const domain = 'https://daop-img.stars-mine.com/';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: bucket,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    // uoload
    const formUploader = new qiniu.form_up.FormUploader(
      new qiniu.conf.Config({
        zone: qiniu.zone.Zone_z2,
      }),
    );
    let pathMiddle = 'other';
    // 根据扩展名调整 URL path
    let fileExt = path.extname(file.originalname).replace(/./i, '');
    if (['jpg', 'png', 'jpeg', 'gif'].includes(fileExt)) pathMiddle = 'img';
    if (['mp4'].includes(fileExt)) pathMiddle = 'video';
    if (['mp3'].includes(fileExt)) pathMiddle = 'audio';
    // 上传图片到七牛
    const uploadResult = await formUploader.put(
      uploadToken,
      `dstamp/${pathMiddle}/${randomString(2)}/${randomString(2)}/${Date.now()}-${randomString(8)}` + (path.extname(file.originalname) || '.jpg'),
      file.buffer,
      new qiniu.form_up.PutExtra(),
    );
    const uploadResultResp = uploadResult.resp;
    if (uploadResultResp['status'] == 200) {
      const data = {
        fileName: file.filename,
        newFileName: file.filename,
        originalFilename: file.originalname,
        // url: domain + `${Date.now()}-${file.originalname}.` + (path.extname(file.originalname) || '.jpg'),
        url: domain + uploadResult.data['key'],
        size: file.size,
      };
      return { ...Result.ok(), ...data };
    } else {
      const errMsg = 'qiniu status:' + uploadResultResp['status'] + ' ,qiniu statusmessage:' + uploadResultResp['statusMessage'];
      this.logger.error(errMsg);
      return Result.Error(errMsg);
    }

    this.logger.log(uploadResult);

    // return new Promise((_res, _rej) => {
    //   formUploader.put(uploadToken, `${Date.now()}-${file.originalname}`, file.buffer, new qiniu.form_up.PutExtra(), function (respErr, respBody, respInfo) {
    //     if (respErr) {
    //       console.error(respErr);
    //       // throw new InternalServerErrorException(respErr.message);
    //     }

    //     if (respInfo.statusCode == 200) {
    //       _res({
    //         url: new url.URL(respBody.key, process.env.qn_host).href,
    //       });
    //     } else {
    //       console.error(respInfo.statusCode, respBody);
    //       // throw new InternalServerErrorException(respInfo);
    //     }
    //   });
    // });
  }
}
