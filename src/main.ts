import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('HEADER AUTHORIZATION:', req.headers.authorization);
    next();
  });

  const config = new DocumentBuilder()
    .setTitle('Bakend swagger empacotador')
    .setDescription('Esta é a API utilizando o swagger')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Digite o token JWT',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
