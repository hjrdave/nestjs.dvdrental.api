import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import { resolve } from 'path';
import { AppModule } from './app.module';

declare const module: any;


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: false,
  };
  app.getHttpAdapter().getInstance().set('json spaces', 2);
  app.enableCors(options);
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(resolve('./src/views/partials'));

  await app.listen(8000);

}
bootstrap();
