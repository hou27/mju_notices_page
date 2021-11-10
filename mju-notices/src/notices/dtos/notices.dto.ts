import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from './output.dto';
import { Notice } from '../schemas/notice.schema';

@ObjectType()
export class NoticesOutput extends CoreOutput {
  @Field((type) => [Notice], { nullable: true })
  notices?: Notice[];
}