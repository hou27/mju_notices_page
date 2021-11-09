import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notice, NoticeDocument } from './schemas/notice.schema';

@Injectable()
export class NoticeService {
    constructor(@InjectModel('Notice') private readonly NoticeModel: Model<NoticeDocument>) {}
}