import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutUserInput } from '../post/post-unchecked-create-nested-many-without-user.input';
import { CommentUncheckedCreateNestedManyWithoutUserInput } from '../comment/comment-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
}
