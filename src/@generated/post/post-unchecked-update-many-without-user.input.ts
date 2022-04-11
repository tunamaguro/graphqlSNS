import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';
import { PostCreateOrConnectWithoutUserInput } from './post-create-or-connect-without-user.input';
import { PostUpsertWithWhereUniqueWithoutUserInput } from './post-upsert-with-where-unique-without-user.input';
import { PostCreateManyUserInputEnvelope } from './post-create-many-user-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutUserInput } from './post-update-with-where-unique-without-user.input';
import { PostUpdateManyWithWhereWithoutUserInput } from './post-update-many-with-where-without-user.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUncheckedUpdateManyWithoutUserInput {

    @Field(() => [PostCreateWithoutUserInput], {nullable:true})
    create?: Array<PostCreateWithoutUserInput>;

    @Field(() => [PostCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PostCreateOrConnectWithoutUserInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<PostUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PostCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PostCreateManyUserInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    set?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    disconnect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    delete?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    connect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<PostUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<PostUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    deleteMany?: Array<PostScalarWhereInput>;
}
