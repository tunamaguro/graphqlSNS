import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCommentInput } from './post-create-without-comment.input';
import { PostCreateOrConnectWithoutCommentInput } from './post-create-or-connect-without-comment.input';
import { PostUpsertWithoutCommentInput } from './post-upsert-without-comment.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutCommentInput } from './post-update-without-comment.input';

@InputType()
export class PostUpdateOneRequiredWithoutCommentInput {

    @Field(() => PostCreateWithoutCommentInput, {nullable:true})
    create?: PostCreateWithoutCommentInput;

    @Field(() => PostCreateOrConnectWithoutCommentInput, {nullable:true})
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput;

    @Field(() => PostUpsertWithoutCommentInput, {nullable:true})
    upsert?: PostUpsertWithoutCommentInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    connect?: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCommentInput, {nullable:true})
    update?: PostUpdateWithoutCommentInput;
}
