import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UserUpdateOneWithoutPostsInput } from '../user/user-update-one-without-posts.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUpdateManyWithoutPostInput } from '../comment/comment-update-many-without-post.input';

@InputType()
export class PostUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutPostsInput, {nullable:true})
    user?: UserUpdateOneWithoutPostsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutPostInput, {nullable:true})
    comments?: CommentUpdateManyWithoutPostInput;
}
