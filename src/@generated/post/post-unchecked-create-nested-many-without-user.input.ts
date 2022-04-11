import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';
import { PostCreateOrConnectWithoutUserInput } from './post-create-or-connect-without-user.input';
import { PostCreateManyUserInputEnvelope } from './post-create-many-user-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PostCreateWithoutUserInput], {nullable:true})
    create?: Array<PostCreateWithoutUserInput>;

    @Field(() => [PostCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutUserInput>;

    @Field(() => PostCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PostCreateManyUserInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;
}
