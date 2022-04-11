import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyPostInput } from './comment-create-many-post.input';

@InputType()
export class CommentCreateManyPostInputEnvelope {

    @Field(() => [CommentCreateManyPostInput], {nullable:false})
    data!: Array<CommentCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
