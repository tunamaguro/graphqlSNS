import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CommentCreateNestedManyWithoutPostInput } from '../comment/comment-create-nested-many-without-post.input';

@InputType()
export class PostCreateWithoutUserInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => CommentCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutPostInput;
}
