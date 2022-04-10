import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutUserInput } from './comment-update-without-user.input';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    update!: CommentUpdateWithoutUserInput;

    @Field(() => CommentCreateWithoutUserInput, {nullable:false})
    create!: CommentCreateWithoutUserInput;
}
