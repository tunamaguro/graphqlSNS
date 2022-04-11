import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';
import { CommentCreateOrConnectWithoutPostInput } from './comment-create-or-connect-without-post.input';
import { CommentCreateManyPostInputEnvelope } from './comment-create-many-post-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutPostInput {

    @Field(() => [CommentCreateWithoutPostInput], {nullable:true})
    create?: Array<CommentCreateWithoutPostInput>;

    @Field(() => [CommentCreateOrConnectWithoutPostInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPostInput>;

    @Field(() => CommentCreateManyPostInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyPostInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}
