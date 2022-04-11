import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { PostCreateOrConnectWithoutCommentsInput } from './post-create-or-connect-without-comments.input';
import { PostUpsertWithoutCommentsInput } from './post-upsert-without-comments.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutCommentsInput } from './post-update-without-comments.input';

@InputType()
export class PostUpdateOneRequiredWithoutCommentsInput {

    @Field(() => PostCreateWithoutCommentsInput, {nullable:true})
    create?: PostCreateWithoutCommentsInput;

    @Field(() => PostCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;

    @Field(() => PostUpsertWithoutCommentsInput, {nullable:true})
    upsert?: PostUpsertWithoutCommentsInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    connect?: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCommentsInput, {nullable:true})
    update?: PostUpdateWithoutCommentsInput;
}
