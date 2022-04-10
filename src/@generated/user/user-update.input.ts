import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { PostUpdateManyWithoutUserInput } from '../post/post-update-many-without-user.input';
import { CommentUpdateManyWithoutUserInput } from '../comment/comment-update-many-without-user.input';

@InputType()
export class UserUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutUserInput, {nullable:true})
    posts?: PostUpdateManyWithoutUserInput;

    @Field(() => CommentUpdateManyWithoutUserInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserInput;
}
