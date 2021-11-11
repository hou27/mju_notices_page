import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notice } from './schemas/notice.schema';
import { NoticesOutput } from './dtos/notices.dto';

@Injectable()
export class NoticeService {
    constructor(
        @InjectModel('Notice')
        private readonly NoticeModel: Model<Notice>
    ) {}
    
    async loadNotices(): Promise<NoticesOutput> {
		try {
			const notices = await this.NoticeModel.find();
			if (!notices) {
				return { ok: false, error: 'There is no data' };
			}
			return { ok: true, notices };
		} catch (e) {
			return { ok: false, error: "Couldn't load notices" };
		}
	}
}