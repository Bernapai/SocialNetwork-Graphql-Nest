import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Aplica throttling a TODAS las rutas
  const throttlerGuard = app.get(ThrottlerGuard);
  app.useGlobalGuards(throttlerGuard);

  //Pipes for Dtos Configuration
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // elimina propiedades no definidas en los DTOs
      forbidNonWhitelisted: true, // lanza error si mandan propiedades extra
      transform: true,            // transforma payloads a clases DTO automáticamente
    }),
  );

  const port = configService.get<number>('PORT') ?? 3000;
  await app.listen(port);
}
bootstrap();
