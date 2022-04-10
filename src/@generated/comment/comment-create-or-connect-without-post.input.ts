import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateWithoutPostInput } from './comment-create-without-post.input';

@InputType()
export class CommentCreateOrConnectWithoutPostInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutPostInput, {nullable:false})
    create!: CommentCreateWithoutPostInput;
}
