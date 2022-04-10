import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { CommentUncheckedUpdateManyWithoutUserInput } from '../comment/comment-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutPostsInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserInput;
}
