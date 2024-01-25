import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.ENDPOINT_BASE);
  await app.listen(+process.env.PORT);
  console.log(`The server is now running on port ${process.env.PORT}`);
}
bootstrap();
