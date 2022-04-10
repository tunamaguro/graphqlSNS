import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutCommentInput } from './post-update-without-comment.input';
import { PostCreateWithoutCommentInput } from './post-create-without-comment.input';

@InputType()
export class PostUpsertWithoutCommentInput {

    @Field(() => PostUpdateWithoutCommentInput, {nullable:false})
    update!: PostUpdateWithoutCommentInput;

    @Field(() => PostCreateWithoutCommentInput, {nullable:false})
    create!: PostCreateWithoutCommentInput;
}
