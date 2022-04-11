import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutCommentInput } from './post-create-without-comment.input';

@InputType()
export class PostCreateOrConnectWithoutCommentInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutCommentInput, {nullable:false})
    create!: PostCreateWithoutCommentInput;
}
