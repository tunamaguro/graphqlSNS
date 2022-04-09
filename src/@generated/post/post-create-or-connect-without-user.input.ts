import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';

@InputType()
export class PostCreateOrConnectWithoutUserInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutUserInput, {nullable:false})
    create!: PostCreateWithoutUserInput;
}
