import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutPostInput } from '../comment/comment-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostUncheckedCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => CommentUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
}
