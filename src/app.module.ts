import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumController } from './sum/sum.controller';
import { SumModule } from './sum/sum.module';
import { SumService } from './sum/sum.service';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from './notes/notes.module';
/**

This is the AppModule class which is the root module of the application.
It is decorated with the @Module() decorator which provides metadata that Nest uses to organize the application structure.
It imports several modules including the SumModule, ConfigModule, TypeOrmModule and NotesModule.
It also declares several controllers including the AppController and SumController.
It provides several providers including the AppService and SumService.
*/
@Module({
  imports: [
    SumModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      database: process.env.MYSQL_DATABASE,
      username: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // turn to false during production stage (TBA: Migrations)
    }),
    NotesModule,
  ],
  controllers: [AppController, SumController],
  providers: [AppService, SumService],
})
export class AppModule {}
