import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';

@InputType()
export class PostCreateOrConnectWithoutCommentsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutCommentsInput, {nullable:false})
    create!: PostCreateWithoutCommentsInput;
}
