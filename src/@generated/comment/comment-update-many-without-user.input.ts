import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { CommentUpsertWithWhereUniqueWithoutUserInput } from './comment-upsert-with-where-unique-without-user.input';
import { CommentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutUserInput } from './comment-update-with-where-unique-without-user.input';
import { CommentUpdateManyWithWhereWithoutUserInput } from './comment-update-many-with-where-without-user.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutUserInput {

    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    create?: Array<CommentCreateWithoutUserInput>;

    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyUserInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}
