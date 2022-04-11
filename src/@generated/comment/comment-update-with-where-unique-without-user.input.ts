import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutUserInput } from './comment-update-without-user.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    data!: CommentUpdateWithoutUserInput;
}
