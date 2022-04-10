import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateWithoutPostsInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
