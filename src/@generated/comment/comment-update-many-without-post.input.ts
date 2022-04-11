import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
import { CommentCreateOrConnectWithoutPostInput } from './comment-create-or-connect-without-post.input';
import { CommentUpsertWithWhereUniqueWithoutPostInput } from './comment-upsert-with-where-unique-without-post.input';
import { CommentCreateManyPostInputEnvelope } from './comment-create-many-post-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutPostInput } from './comment-update-with-where-unique-without-post.input';
import { CommentUpdateManyWithWhereWithoutPostInput } from './comment-update-many-with-where-without-post.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutPostInput {

    @Field(() => [CommentCreateWithoutPostInput], {nullable:true})
    create?: Array<CommentCreateWithoutPostInput>;

    @Field(() => [CommentCreateOrConnectWithoutPostInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPostInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => CommentCreateManyPostInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyPostInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    update?: Array<CommentUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutPostInput], {nullable:true})
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    deleteMany?: Array<CommentScalarWhereInput>;
}
