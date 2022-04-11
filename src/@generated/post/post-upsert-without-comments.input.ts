import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutCommentsInput } from './post-update-without-comments.input';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';

@InputType()
export class PostUpsertWithoutCommentsInput {

    @Field(() => PostUpdateWithoutCommentsInput, {nullable:false})
    update!: PostUpdateWithoutCommentsInput;

    @Field(() => PostCreateWithoutCommentsInput, {nullable:false})
    create!: PostCreateWithoutCommentsInput;
}
