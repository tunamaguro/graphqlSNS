import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
