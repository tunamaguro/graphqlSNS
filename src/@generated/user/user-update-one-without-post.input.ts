import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPostInput } from './user-create-without-post.input';
import { UserCreateOrConnectWithoutPostInput } from './user-create-or-connect-without-post.input';
import { UserUpsertWithoutPostInput } from './user-upsert-without-post.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPostInput } from './user-update-without-post.input';

@InputType()
export class UserUpdateOneWithoutPostInput {

    @Field(() => UserCreateWithoutPostInput, {nullable:true})
    create?: UserCreateWithoutPostInput;

    @Field(() => UserCreateOrConnectWithoutPostInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;

    @Field(() => UserUpsertWithoutPostInput, {nullable:true})
    upsert?: UserUpsertWithoutPostInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPostInput, {nullable:true})
    update?: UserUpdateWithoutPostInput;
}
