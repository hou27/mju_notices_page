import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeResolver } from './notices.resolver';
import { NoticeService } from './notices.service';
import { Notice, NoticeSchema } from './schemas/notice.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Notice.name, schema: NoticeSchema }])],
    providers: [NoticeResolver, NoticeService],
	exports: [],
})
export class NoticesModule {}