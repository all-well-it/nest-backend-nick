import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumController } from './sum/sum.controller';
import { SumModule } from './sum/sum.module';
import { SumService } from './sum/sum.service';

@Module({
  imports: [SumModule],
  controllers: [AppController, SumController],
  providers: [AppService, SumService],
})
export class AppModule {}
