import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { PostUncheckedUpdateManyWithoutUserInput } from '../post/post-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUncheckedUpdateManyWithoutUserInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutUserInput;
}
