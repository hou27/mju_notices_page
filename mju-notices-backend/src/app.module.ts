import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { NoticesModule } from './notices/notices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://jalapeno:${encodeURIComponent(
        process.env.DB_PW,
      )}@cluster211105.liaeo.mongodb.net/mju_notice?retryWrites=true&w=majority`,
    ),
    GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
    NoticesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
