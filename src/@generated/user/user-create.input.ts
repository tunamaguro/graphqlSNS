import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutUserInput } from '../post/post-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;
}
