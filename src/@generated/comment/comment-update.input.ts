import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { PostUpdateOneRequiredWithoutCommentsInput } from '../post/post-update-one-required-without-comments.input';
import { UserUpdateOneWithoutCommentsInput } from '../user/user-update-one-without-comments.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CommentUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutCommentsInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutCommentsInput;

    @Field(() => UserUpdateOneWithoutCommentsInput, {nullable:true})
    user?: UserUpdateOneWithoutCommentsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
