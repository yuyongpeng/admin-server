import * as dotenv from 'dotenv';
import { join } from 'path';
import { config } from './common/types/config';
import { Constants } from './common/constant/Constants';

let envFile = '.env';

switch (process.env.NODE_ENV) {
  case 'production':
    envFile = '.env.production';
    break;
  case 'test':
    envFile = '.env.test';
    break;
}
console.log('envFile === ' + envFile);
let envFilePath = join(__dirname, envFile);
console.log('envFilePath === ' + envFilePath);
dotenv.config({ path: envFilePath });
export const Config: config = {
  //服务器的HTTP端口，默认为3000
  port: Number(process.env.port),
  //# 应用的访问路径前缀
  contextPath: '/v1',
  swagger: {
    //是否启用swagger
    enable: true,
    //接口文档路径
    prefix: '/api',
  },
  captcha: {
    //验证码类型 math或text
    mode: 'math',
    //验证码过期时间
    expiresIn: 60 * 2,
  },
  //接口限流 1分钟内同一个接口允许6000次请求
  rateLimit: {
    //数据存储在redis or memory
    storage: 'redis',
    ttl: 1 * 60 * 1000,
    limit: 6000,
  },
  crypto: {
    //密码加密秘钥
    psdSecret: process.env.psdSecret || 'carole123456',
  },
  token: {
    // token加密秘钥
    secret: process.env.tokenSecret || 'carole123456',
    //过期时间秒
    expiresIn: 60 * 60 * 24,
  },
  prisma: {
    //是否显示执行的sql指令
    logEnable: true,
    //显示那些日志
    log: ['query', 'info', 'warn', 'error'],
  },
  //redis连接配置
  redis: {
    //主机地址
    host: process.env.redisHost,
    // host: '127.0.0.1',
    //端口
    port: Number(process.env.redisPort),
    // port: 6379,
    //数据库
    db: Number(process.env.redisDb),
    // db: 3,
    //密码
    password: process.env.redisPassword,
    // password: 'BZPwrKLOI*&^%q&^gts^dn@D',
  },
  upload: {
    //上传文件存储基目录 请设置一个绝对路径
    path: process.env.uploadPath ?? 'C:\\Users\\yuyongpeng\\Documents\\',
    // path: 'd:/uploads',
    config: {
      img: {
        fileSize: 2 * 1024 * 1024,
        files: 1,
        fieldSize: 0.5 * 1024 * 1024,
        fields: 100,
        fieldNameSize: 100,
        parts: 100,
        headerPairs: 100,
      },
      file: {
        fileSize: 100 * 1024 * 1024,
        files: 10,
        fieldSize: 0.5 * 1024 * 1024,
        fields: 100,
        fieldNameSize: 100,
        parts: 100,
        headerPairs: 100,
      },
    },
  },
  //生成配置
  gen: {
    //作者
    author: 'carole',
    //默认生成模块
    packageName: 'admin',
    //子模块目录
    moduleName: 'system',
    //是否去除表前缀，默认是false
    autoRemovePre: false,
    //表前缀（生成类名不会包含表前缀，多个用逗号分隔）
    tablePrefix: ['sys_'],
  },
  //邮件发送配置
  mail: {
    //是否启用邮箱
    enable: false,
    //超时设置， 30秒未发送邮件，则返回失败
    timeout: 30 * 1000,
    config: {
      //邮箱服务器 qq：smtp.qq.com 网易： smtp.163.com
      host: process.env.mailHost,
      //端口
      port: 465,
      auth: {
        //用户名
        user: process.env.mailUser,
        //密码
        pass: process.env.mailPass,
      },
      // 端口465设置true, 其他false
      secure: true,
      tls: {
        //建立 TLS 连接时是否应该拒绝未经授权的服务器证书
        rejectUnauthorized: false,
      },
    },
  },
  qiniu: {
    accessKey: process.env.qiniuAccessKey,
    secretKey: process.env.qiniuSecretKey,
    bucket: process.env.qiniuBucket,
    domain: process.env.qiniuDomain,
  },
  dstamp: {
    baseUrl: process.env.dstampBaseUrl,
  },
  makerip: {
    baseUrl: process.env.makeripBaseUrl,
    clientId: process.env.makeripClientId,
    clientSecret: process.env.makeripClientSecret,
    appName: process.env.makeripAppName,
    redirectURI: process.env.makeripRedirectURI,
    systemCode: process.env.makeripSystemCode,
    systemKey: process.env.makeripSytemKey,
  },
  aes: {
    key: process.env.aesKey,
    iv: process.env.aesIv,
  },
  qrcode: {
    urlPrefix: process.env.qrcodeUrlPrefix,
  },
};
import { redisUtils } from './common/utils/redisUtils';
import { env } from 'process';

//获取系统参数配置
export async function getSysConfig(key: string): Promise<string | null> {
  return redisUtils.get(Constants.SYS_CONFIG_KEY + key);
}
