import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PostScalarWhereInput {

    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
