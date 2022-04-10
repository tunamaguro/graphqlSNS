import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyUserInput } from './comment-create-many-user.input';

@InputType()
export class CommentCreateManyUserInputEnvelope {

    @Field(() => [CommentCreateManyUserInput], {nullable:false})
    data!: Array<CommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
