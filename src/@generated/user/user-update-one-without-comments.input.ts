import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserUpsertWithoutCommentsInput } from './user-upsert-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';

@InputType()
export class UserUpdateOneWithoutCommentsInput {

    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    create?: UserCreateWithoutCommentsInput;

    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    @Field(() => UserUpsertWithoutCommentsInput, {nullable:true})
    upsert?: UserUpsertWithoutCommentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCommentsInput, {nullable:true})
    update?: UserUpdateWithoutCommentsInput;
}
