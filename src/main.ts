import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { initializeApp, applicationDefault } from 'firebase-admin/app';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeApp({
    credential: applicationDefault(),
    projectId: 'eps-api',
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap(); 
