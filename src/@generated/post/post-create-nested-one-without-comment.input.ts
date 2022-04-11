import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCommentInput } from './post-create-without-comment.input';
import { PostCreateOrConnectWithoutCommentInput } from './post-create-or-connect-without-comment.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutCommentInput {

    @Field(() => PostCreateWithoutCommentInput, {nullable:true})
    create?: PostCreateWithoutCommentInput;

    @Field(() => PostCreateOrConnectWithoutCommentInput, {nullable:true})
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    connect?: PostWhereUniqueInput;
}
