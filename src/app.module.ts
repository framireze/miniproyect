import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    V1Module
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
