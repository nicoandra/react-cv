require('dotenv').config(); // Only in DEV
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['http://localhost:3000'] });
  app.useGlobalPipes(new ValidationPipe({}));
  app.setGlobalPrefix('api');
  await app.listen(7071);
}
bootstrap();
