import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { CommentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    create?: Array<CommentCreateWithoutUserInput>;

    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;

    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CommentCreateManyUserInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    connect?: Array<CommentWhereUniqueInput>;
}
