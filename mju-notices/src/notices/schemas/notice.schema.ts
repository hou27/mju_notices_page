import {
  Field,
  InputType,
  ObjectType,
} from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString, Length } from 'class-validator';
import { Document } from 'mongoose';

@ObjectType()
export class Data {
  @Field((type) => String)
  @Prop()
  @IsString()
  title: string;

  @Field((type) => String)
  @Prop()
  @IsString()
  link: string;
}

@Schema()
@ObjectType()
export class Notice extends Document {
    @Field((type) => String)
    @Prop()
    search_value: string;
    
    @Field((type) => Date)
    @Prop()
    createdAt: Date;
    
    @Field((type) => [Data])
    @Prop([Data])
    data: Data[];
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);