import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { Notice } from './schemas/notice.schema';
import { NoticeService } from './notices.service';

@Resolver((of) => Notice)
export class NoticeResolver {
	constructor(private readonly noticesService: NoticeService) {}

	@Query((returns) => Boolean)
	rootQuery() {
		return true;
	}
}