import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticesModule } from './notices/notices.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://jalapeno: ${process.env.DB_PW}@cluster211105.liaeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`), NoticesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}