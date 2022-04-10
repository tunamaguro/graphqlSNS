import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';

@InputType()
export class CommentCreateOrConnectWithoutUserInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutUserInput, {nullable:false})
    create!: CommentCreateWithoutUserInput;
}
