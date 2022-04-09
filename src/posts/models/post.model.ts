import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  id: string;
  @Field()
  content: string;
  @Field()
  createdAt: Date;
}
