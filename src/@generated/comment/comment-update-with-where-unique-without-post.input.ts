import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutPostInput } from './comment-update-without-post.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutPostInput, {nullable:false})
    data!: CommentUpdateWithoutPostInput;
}
