import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Config } from '@/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { lightBlue } from 'kolorist';
import { Constants } from './common/constant/Constants';
import { ConsoleLogger } from '@nestjs/common';
import { RequestInterceptor } from './common/interceptors/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', true);
  app.disable('x-powered-by');
  app.setGlobalPrefix(Config.contextPath || '/');
  app.enableCors();
  app.useStaticAssets(Config.upload.path, {
    prefix: Config.contextPath.replace(/\/$/, '') + '/file',
    maxAge: 86400000 * 365,
  });
  app.useStaticAssets(Config.upload.path, {
    prefix: Config.contextPath.replace(/\/$/, '') + Constants.FILE_PREFIX,
    maxAge: 86400000 * 365,
  });
  if (Config.swagger.enable) {
    const options = new DocumentBuilder().setTitle('方寸记忆 - 后台管理系统接口文档').setDescription('方寸记忆 - 后台管理系统接口文档').setVersion('1.0').addBearerAuth().addTag('NestJS').build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(Config.contextPath.replace(/\/$/, '') + Config.swagger.prefix, app, document);
  }
  app.useGlobalInterceptors(new RequestInterceptor());
  await app.listen(Config.port);
  console.log(lightBlue(`server is running to http://localhost:${Config.port}`));
}
bootstrap();
