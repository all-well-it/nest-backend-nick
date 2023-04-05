import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumController } from './sum/sum.controller';
import { SumModule } from './sum/sum.module';
import { SumService } from './sum/sum.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SumModule, ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@localhost:27018/`)],
  controllers: [AppController, SumController],
  providers: [AppService, SumService],
})
export class AppModule {}
