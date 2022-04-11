import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutCommentsInput } from './post-create-without-comments.input';
import { PostCreateOrConnectWithoutCommentsInput } from './post-create-or-connect-without-comments.input';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutCommentsInput {

    @Field(() => PostCreateWithoutCommentsInput, {nullable:true})
    create?: PostCreateWithoutCommentsInput;

    @Field(() => PostCreateOrConnectWithoutCommentsInput, {nullable:true})
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    connect?: PostWhereUniqueInput;
}
