import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.ENDPOINT_BASE);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions:{
        enableImplicitConversion: true
      },
      //exceptionFactory: (errors) => new BadRequestException(errors),
    })
  )
  
  await app.listen(+process.env.PORT);
  console.log(`The server is now running on port ${process.env.PORT}`);
}
bootstrap();
