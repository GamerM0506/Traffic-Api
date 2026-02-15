import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type QuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$QuestionPayload>;
export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
};
export type QuestionAvgAggregateOutputType = {
    id: number | null;
    trafficSignId: number | null;
};
export type QuestionSumAggregateOutputType = {
    id: number | null;
    trafficSignId: number | null;
};
export type QuestionMinAggregateOutputType = {
    id: number | null;
    content: string | null;
    mediaUrl: string | null;
    mediaType: $Enums.MediaType | null;
    questionType: $Enums.QuestionType | null;
    group: $Enums.QuestionGroup | null;
    isParalysis: boolean | null;
    explanation: string | null;
    tip: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    trafficSignId: number | null;
};
export type QuestionMaxAggregateOutputType = {
    id: number | null;
    content: string | null;
    mediaUrl: string | null;
    mediaType: $Enums.MediaType | null;
    questionType: $Enums.QuestionType | null;
    group: $Enums.QuestionGroup | null;
    isParalysis: boolean | null;
    explanation: string | null;
    tip: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    trafficSignId: number | null;
};
export type QuestionCountAggregateOutputType = {
    id: number;
    content: number;
    mediaUrl: number;
    mediaType: number;
    questionType: number;
    group: number;
    isParalysis: number;
    explanation: number;
    tip: number;
    createdAt: number;
    updatedAt: number;
    trafficSignId: number;
    _all: number;
};
export type QuestionAvgAggregateInputType = {
    id?: true;
    trafficSignId?: true;
};
export type QuestionSumAggregateInputType = {
    id?: true;
    trafficSignId?: true;
};
export type QuestionMinAggregateInputType = {
    id?: true;
    content?: true;
    mediaUrl?: true;
    mediaType?: true;
    questionType?: true;
    group?: true;
    isParalysis?: true;
    explanation?: true;
    tip?: true;
    createdAt?: true;
    updatedAt?: true;
    trafficSignId?: true;
};
export type QuestionMaxAggregateInputType = {
    id?: true;
    content?: true;
    mediaUrl?: true;
    mediaType?: true;
    questionType?: true;
    group?: true;
    isParalysis?: true;
    explanation?: true;
    tip?: true;
    createdAt?: true;
    updatedAt?: true;
    trafficSignId?: true;
};
export type QuestionCountAggregateInputType = {
    id?: true;
    content?: true;
    mediaUrl?: true;
    mediaType?: true;
    questionType?: true;
    group?: true;
    isParalysis?: true;
    explanation?: true;
    tip?: true;
    createdAt?: true;
    updatedAt?: true;
    trafficSignId?: true;
    _all?: true;
};
export type QuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuestionCountAggregateInputType;
    _avg?: QuestionAvgAggregateInputType;
    _sum?: QuestionSumAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
};
export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuestion[P]> : Prisma.GetScalarType<T[P], AggregateQuestion[P]>;
};
export type QuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithAggregationInput | Prisma.QuestionOrderByWithAggregationInput[];
    by: Prisma.QuestionScalarFieldEnum[] | Prisma.QuestionScalarFieldEnum;
    having?: Prisma.QuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCountAggregateInputType | true;
    _avg?: QuestionAvgAggregateInputType;
    _sum?: QuestionSumAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
};
export type QuestionGroupByOutputType = {
    id: number;
    content: string;
    mediaUrl: string | null;
    mediaType: $Enums.MediaType;
    questionType: $Enums.QuestionType;
    group: $Enums.QuestionGroup;
    isParalysis: boolean;
    explanation: string | null;
    tip: string | null;
    createdAt: Date;
    updatedAt: Date;
    trafficSignId: number | null;
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
};
type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuestionGroupByOutputType[P]>;
}>>;
export type QuestionWhereInput = {
    AND?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    OR?: Prisma.QuestionWhereInput[];
    NOT?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    id?: Prisma.IntFilter<"Question"> | number;
    content?: Prisma.StringFilter<"Question"> | string;
    mediaUrl?: Prisma.StringNullableFilter<"Question"> | string | null;
    mediaType?: Prisma.EnumMediaTypeFilter<"Question"> | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFilter<"Question"> | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFilter<"Question"> | boolean;
    explanation?: Prisma.StringNullableFilter<"Question"> | string | null;
    tip?: Prisma.StringNullableFilter<"Question"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    trafficSignId?: Prisma.IntNullableFilter<"Question"> | number | null;
    answers?: Prisma.AnswerListRelationFilter;
    examSetQuestions?: Prisma.ExamSetQuestionListRelationFilter;
    testDetails?: Prisma.TestDetailListRelationFilter;
    bookmarks?: Prisma.UserBookmarkListRelationFilter;
    trafficSign?: Prisma.XOR<Prisma.TrafficSignNullableScalarRelationFilter, Prisma.TrafficSignWhereInput> | null;
};
export type QuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    questionType?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    isParalysis?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    tip?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.AnswerOrderByRelationAggregateInput;
    examSetQuestions?: Prisma.ExamSetQuestionOrderByRelationAggregateInput;
    testDetails?: Prisma.TestDetailOrderByRelationAggregateInput;
    bookmarks?: Prisma.UserBookmarkOrderByRelationAggregateInput;
    trafficSign?: Prisma.TrafficSignOrderByWithRelationInput;
};
export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    OR?: Prisma.QuestionWhereInput[];
    NOT?: Prisma.QuestionWhereInput | Prisma.QuestionWhereInput[];
    content?: Prisma.StringFilter<"Question"> | string;
    mediaUrl?: Prisma.StringNullableFilter<"Question"> | string | null;
    mediaType?: Prisma.EnumMediaTypeFilter<"Question"> | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFilter<"Question"> | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFilter<"Question"> | boolean;
    explanation?: Prisma.StringNullableFilter<"Question"> | string | null;
    tip?: Prisma.StringNullableFilter<"Question"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    trafficSignId?: Prisma.IntNullableFilter<"Question"> | number | null;
    answers?: Prisma.AnswerListRelationFilter;
    examSetQuestions?: Prisma.ExamSetQuestionListRelationFilter;
    testDetails?: Prisma.TestDetailListRelationFilter;
    bookmarks?: Prisma.UserBookmarkListRelationFilter;
    trafficSign?: Prisma.XOR<Prisma.TrafficSignNullableScalarRelationFilter, Prisma.TrafficSignWhereInput> | null;
}, "id">;
export type QuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    questionType?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    isParalysis?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    tip?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.QuestionCountOrderByAggregateInput;
    _avg?: Prisma.QuestionAvgOrderByAggregateInput;
    _max?: Prisma.QuestionMaxOrderByAggregateInput;
    _min?: Prisma.QuestionMinOrderByAggregateInput;
    _sum?: Prisma.QuestionSumOrderByAggregateInput;
};
export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.QuestionScalarWhereWithAggregatesInput | Prisma.QuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.QuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.QuestionScalarWhereWithAggregatesInput | Prisma.QuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Question"> | number;
    content?: Prisma.StringWithAggregatesFilter<"Question"> | string;
    mediaUrl?: Prisma.StringNullableWithAggregatesFilter<"Question"> | string | null;
    mediaType?: Prisma.EnumMediaTypeWithAggregatesFilter<"Question"> | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupWithAggregatesFilter<"Question"> | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolWithAggregatesFilter<"Question"> | boolean;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"Question"> | string | null;
    tip?: Prisma.StringNullableWithAggregatesFilter<"Question"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Question"> | Date | string;
    trafficSignId?: Prisma.IntNullableWithAggregatesFilter<"Question"> | number | null;
};
export type QuestionCreateInput = {
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkCreateNestedManyWithoutQuestionInput;
    trafficSign?: Prisma.TrafficSignCreateNestedOneWithoutQuestionsInput;
};
export type QuestionUncheckedCreateInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trafficSignId?: number | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUpdateManyWithoutQuestionNestedInput;
    trafficSign?: Prisma.TrafficSignUpdateOneWithoutQuestionsNestedInput;
};
export type QuestionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trafficSignId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateManyInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trafficSignId?: number | null;
};
export type QuestionUpdateManyMutationInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trafficSignId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type QuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    questionType?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    isParalysis?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    tip?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrder;
};
export type QuestionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrder;
};
export type QuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    questionType?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    isParalysis?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    tip?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrder;
};
export type QuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    mediaType?: Prisma.SortOrder;
    questionType?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    isParalysis?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    tip?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrder;
};
export type QuestionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trafficSignId?: Prisma.SortOrder;
};
export type QuestionScalarRelationFilter = {
    is?: Prisma.QuestionWhereInput;
    isNot?: Prisma.QuestionWhereInput;
};
export type QuestionListRelationFilter = {
    every?: Prisma.QuestionWhereInput;
    some?: Prisma.QuestionWhereInput;
    none?: Prisma.QuestionWhereInput;
};
export type QuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType;
};
export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType;
};
export type EnumQuestionGroupFieldUpdateOperationsInput = {
    set?: $Enums.QuestionGroup;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.QuestionUpsertWithoutAnswersInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutAnswersInput, Prisma.QuestionUpdateWithoutAnswersInput>, Prisma.QuestionUncheckedUpdateWithoutAnswersInput>;
};
export type QuestionCreateNestedManyWithoutTrafficSignInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutTrafficSignInput, Prisma.QuestionUncheckedCreateWithoutTrafficSignInput> | Prisma.QuestionCreateWithoutTrafficSignInput[] | Prisma.QuestionUncheckedCreateWithoutTrafficSignInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutTrafficSignInput | Prisma.QuestionCreateOrConnectWithoutTrafficSignInput[];
    createMany?: Prisma.QuestionCreateManyTrafficSignInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUncheckedCreateNestedManyWithoutTrafficSignInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutTrafficSignInput, Prisma.QuestionUncheckedCreateWithoutTrafficSignInput> | Prisma.QuestionCreateWithoutTrafficSignInput[] | Prisma.QuestionUncheckedCreateWithoutTrafficSignInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutTrafficSignInput | Prisma.QuestionCreateOrConnectWithoutTrafficSignInput[];
    createMany?: Prisma.QuestionCreateManyTrafficSignInputEnvelope;
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
};
export type QuestionUpdateManyWithoutTrafficSignNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutTrafficSignInput, Prisma.QuestionUncheckedCreateWithoutTrafficSignInput> | Prisma.QuestionCreateWithoutTrafficSignInput[] | Prisma.QuestionUncheckedCreateWithoutTrafficSignInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutTrafficSignInput | Prisma.QuestionCreateOrConnectWithoutTrafficSignInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutTrafficSignInput | Prisma.QuestionUpsertWithWhereUniqueWithoutTrafficSignInput[];
    createMany?: Prisma.QuestionCreateManyTrafficSignInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutTrafficSignInput | Prisma.QuestionUpdateWithWhereUniqueWithoutTrafficSignInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutTrafficSignInput | Prisma.QuestionUpdateManyWithWhereWithoutTrafficSignInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionUncheckedUpdateManyWithoutTrafficSignNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutTrafficSignInput, Prisma.QuestionUncheckedCreateWithoutTrafficSignInput> | Prisma.QuestionCreateWithoutTrafficSignInput[] | Prisma.QuestionUncheckedCreateWithoutTrafficSignInput[];
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutTrafficSignInput | Prisma.QuestionCreateOrConnectWithoutTrafficSignInput[];
    upsert?: Prisma.QuestionUpsertWithWhereUniqueWithoutTrafficSignInput | Prisma.QuestionUpsertWithWhereUniqueWithoutTrafficSignInput[];
    createMany?: Prisma.QuestionCreateManyTrafficSignInputEnvelope;
    set?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    disconnect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    delete?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    connect?: Prisma.QuestionWhereUniqueInput | Prisma.QuestionWhereUniqueInput[];
    update?: Prisma.QuestionUpdateWithWhereUniqueWithoutTrafficSignInput | Prisma.QuestionUpdateWithWhereUniqueWithoutTrafficSignInput[];
    updateMany?: Prisma.QuestionUpdateManyWithWhereWithoutTrafficSignInput | Prisma.QuestionUpdateManyWithWhereWithoutTrafficSignInput[];
    deleteMany?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
};
export type QuestionCreateNestedOneWithoutExamSetQuestionsInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutExamSetQuestionsInput, Prisma.QuestionUncheckedCreateWithoutExamSetQuestionsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutExamSetQuestionsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutExamSetQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutExamSetQuestionsInput, Prisma.QuestionUncheckedCreateWithoutExamSetQuestionsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutExamSetQuestionsInput;
    upsert?: Prisma.QuestionUpsertWithoutExamSetQuestionsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutExamSetQuestionsInput, Prisma.QuestionUpdateWithoutExamSetQuestionsInput>, Prisma.QuestionUncheckedUpdateWithoutExamSetQuestionsInput>;
};
export type QuestionCreateNestedOneWithoutTestDetailsInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutTestDetailsInput, Prisma.QuestionUncheckedCreateWithoutTestDetailsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutTestDetailsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutTestDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutTestDetailsInput, Prisma.QuestionUncheckedCreateWithoutTestDetailsInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutTestDetailsInput;
    upsert?: Prisma.QuestionUpsertWithoutTestDetailsInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutTestDetailsInput, Prisma.QuestionUpdateWithoutTestDetailsInput>, Prisma.QuestionUncheckedUpdateWithoutTestDetailsInput>;
};
export type QuestionCreateNestedOneWithoutBookmarksInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutBookmarksInput, Prisma.QuestionUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutBookmarksInput;
    connect?: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: Prisma.XOR<Prisma.QuestionCreateWithoutBookmarksInput, Prisma.QuestionUncheckedCreateWithoutBookmarksInput>;
    connectOrCreate?: Prisma.QuestionCreateOrConnectWithoutBookmarksInput;
    upsert?: Prisma.QuestionUpsertWithoutBookmarksInput;
    connect?: Prisma.QuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.QuestionUpdateToOneWithWhereWithoutBookmarksInput, Prisma.QuestionUpdateWithoutBookmarksInput>, Prisma.QuestionUncheckedUpdateWithoutBookmarksInput>;
};
export type QuestionCreateWithoutAnswersInput = {
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    examSetQuestions?: Prisma.ExamSetQuestionCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkCreateNestedManyWithoutQuestionInput;
    trafficSign?: Prisma.TrafficSignCreateNestedOneWithoutQuestionsInput;
};
export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trafficSignId?: number | null;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
};
export type QuestionUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutAnswersInput, Prisma.QuestionUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutAnswersInput, Prisma.QuestionUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutAnswersInput, Prisma.QuestionUncheckedUpdateWithoutAnswersInput>;
};
export type QuestionUpdateWithoutAnswersInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSetQuestions?: Prisma.ExamSetQuestionUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUpdateManyWithoutQuestionNestedInput;
    trafficSign?: Prisma.TrafficSignUpdateOneWithoutQuestionsNestedInput;
};
export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trafficSignId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutTrafficSignInput = {
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkCreateNestedManyWithoutQuestionInput;
};
export type QuestionUncheckedCreateWithoutTrafficSignInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutTrafficSignInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutTrafficSignInput, Prisma.QuestionUncheckedCreateWithoutTrafficSignInput>;
};
export type QuestionCreateManyTrafficSignInputEnvelope = {
    data: Prisma.QuestionCreateManyTrafficSignInput | Prisma.QuestionCreateManyTrafficSignInput[];
    skipDuplicates?: boolean;
};
export type QuestionUpsertWithWhereUniqueWithoutTrafficSignInput = {
    where: Prisma.QuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutTrafficSignInput, Prisma.QuestionUncheckedUpdateWithoutTrafficSignInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutTrafficSignInput, Prisma.QuestionUncheckedCreateWithoutTrafficSignInput>;
};
export type QuestionUpdateWithWhereUniqueWithoutTrafficSignInput = {
    where: Prisma.QuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutTrafficSignInput, Prisma.QuestionUncheckedUpdateWithoutTrafficSignInput>;
};
export type QuestionUpdateManyWithWhereWithoutTrafficSignInput = {
    where: Prisma.QuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyWithoutTrafficSignInput>;
};
export type QuestionScalarWhereInput = {
    AND?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
    OR?: Prisma.QuestionScalarWhereInput[];
    NOT?: Prisma.QuestionScalarWhereInput | Prisma.QuestionScalarWhereInput[];
    id?: Prisma.IntFilter<"Question"> | number;
    content?: Prisma.StringFilter<"Question"> | string;
    mediaUrl?: Prisma.StringNullableFilter<"Question"> | string | null;
    mediaType?: Prisma.EnumMediaTypeFilter<"Question"> | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFilter<"Question"> | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFilter<"Question"> | boolean;
    explanation?: Prisma.StringNullableFilter<"Question"> | string | null;
    tip?: Prisma.StringNullableFilter<"Question"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Question"> | Date | string;
    trafficSignId?: Prisma.IntNullableFilter<"Question"> | number | null;
};
export type QuestionCreateWithoutExamSetQuestionsInput = {
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkCreateNestedManyWithoutQuestionInput;
    trafficSign?: Prisma.TrafficSignCreateNestedOneWithoutQuestionsInput;
};
export type QuestionUncheckedCreateWithoutExamSetQuestionsInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trafficSignId?: number | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutExamSetQuestionsInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutExamSetQuestionsInput, Prisma.QuestionUncheckedCreateWithoutExamSetQuestionsInput>;
};
export type QuestionUpsertWithoutExamSetQuestionsInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutExamSetQuestionsInput, Prisma.QuestionUncheckedUpdateWithoutExamSetQuestionsInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutExamSetQuestionsInput, Prisma.QuestionUncheckedCreateWithoutExamSetQuestionsInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutExamSetQuestionsInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutExamSetQuestionsInput, Prisma.QuestionUncheckedUpdateWithoutExamSetQuestionsInput>;
};
export type QuestionUpdateWithoutExamSetQuestionsInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUpdateManyWithoutQuestionNestedInput;
    trafficSign?: Prisma.TrafficSignUpdateOneWithoutQuestionsNestedInput;
};
export type QuestionUncheckedUpdateWithoutExamSetQuestionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trafficSignId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutTestDetailsInput = {
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkCreateNestedManyWithoutQuestionInput;
    trafficSign?: Prisma.TrafficSignCreateNestedOneWithoutQuestionsInput;
};
export type QuestionUncheckedCreateWithoutTestDetailsInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trafficSignId?: number | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutQuestionInput;
    bookmarks?: Prisma.UserBookmarkUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutTestDetailsInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutTestDetailsInput, Prisma.QuestionUncheckedCreateWithoutTestDetailsInput>;
};
export type QuestionUpsertWithoutTestDetailsInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutTestDetailsInput, Prisma.QuestionUncheckedUpdateWithoutTestDetailsInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutTestDetailsInput, Prisma.QuestionUncheckedCreateWithoutTestDetailsInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutTestDetailsInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutTestDetailsInput, Prisma.QuestionUncheckedUpdateWithoutTestDetailsInput>;
};
export type QuestionUpdateWithoutTestDetailsInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUpdateManyWithoutQuestionNestedInput;
    trafficSign?: Prisma.TrafficSignUpdateOneWithoutQuestionsNestedInput;
};
export type QuestionUncheckedUpdateWithoutTestDetailsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trafficSignId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateWithoutBookmarksInput = {
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.AnswerCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutQuestionInput;
    trafficSign?: Prisma.TrafficSignCreateNestedOneWithoutQuestionsInput;
};
export type QuestionUncheckedCreateWithoutBookmarksInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trafficSignId?: number | null;
    answers?: Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutQuestionInput;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutQuestionInput;
};
export type QuestionCreateOrConnectWithoutBookmarksInput = {
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutBookmarksInput, Prisma.QuestionUncheckedCreateWithoutBookmarksInput>;
};
export type QuestionUpsertWithoutBookmarksInput = {
    update: Prisma.XOR<Prisma.QuestionUpdateWithoutBookmarksInput, Prisma.QuestionUncheckedUpdateWithoutBookmarksInput>;
    create: Prisma.XOR<Prisma.QuestionCreateWithoutBookmarksInput, Prisma.QuestionUncheckedCreateWithoutBookmarksInput>;
    where?: Prisma.QuestionWhereInput;
};
export type QuestionUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: Prisma.QuestionWhereInput;
    data: Prisma.XOR<Prisma.QuestionUpdateWithoutBookmarksInput, Prisma.QuestionUncheckedUpdateWithoutBookmarksInput>;
};
export type QuestionUpdateWithoutBookmarksInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUpdateManyWithoutQuestionNestedInput;
    trafficSign?: Prisma.TrafficSignUpdateOneWithoutQuestionsNestedInput;
};
export type QuestionUncheckedUpdateWithoutBookmarksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trafficSignId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionCreateManyTrafficSignInput = {
    id?: number;
    content: string;
    mediaUrl?: string | null;
    mediaType?: $Enums.MediaType;
    questionType?: $Enums.QuestionType;
    group?: $Enums.QuestionGroup;
    isParalysis?: boolean;
    explanation?: string | null;
    tip?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type QuestionUpdateWithoutTrafficSignInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.AnswerUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateWithoutTrafficSignInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput;
    examSetQuestions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutQuestionNestedInput;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    bookmarks?: Prisma.UserBookmarkUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type QuestionUncheckedUpdateManyWithoutTrafficSignInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    mediaUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mediaType?: Prisma.EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType;
    questionType?: Prisma.EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType;
    group?: Prisma.EnumQuestionGroupFieldUpdateOperationsInput | $Enums.QuestionGroup;
    isParalysis?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type QuestionCountOutputType = {
    answers: number;
    examSetQuestions: number;
    testDetails: number;
    bookmarks: number;
};
export type QuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs;
    examSetQuestions?: boolean | QuestionCountOutputTypeCountExamSetQuestionsArgs;
    testDetails?: boolean | QuestionCountOutputTypeCountTestDetailsArgs;
    bookmarks?: boolean | QuestionCountOutputTypeCountBookmarksArgs;
};
export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionCountOutputTypeSelect<ExtArgs> | null;
};
export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
};
export type QuestionCountOutputTypeCountExamSetQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetQuestionWhereInput;
};
export type QuestionCountOutputTypeCountTestDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestDetailWhereInput;
};
export type QuestionCountOutputTypeCountBookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookmarkWhereInput;
};
export type QuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    mediaUrl?: boolean;
    mediaType?: boolean;
    questionType?: boolean;
    group?: boolean;
    isParalysis?: boolean;
    explanation?: boolean;
    tip?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trafficSignId?: boolean;
    answers?: boolean | Prisma.Question$answersArgs<ExtArgs>;
    examSetQuestions?: boolean | Prisma.Question$examSetQuestionsArgs<ExtArgs>;
    testDetails?: boolean | Prisma.Question$testDetailsArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.Question$bookmarksArgs<ExtArgs>;
    trafficSign?: boolean | Prisma.Question$trafficSignArgs<ExtArgs>;
    _count?: boolean | Prisma.QuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    mediaUrl?: boolean;
    mediaType?: boolean;
    questionType?: boolean;
    group?: boolean;
    isParalysis?: boolean;
    explanation?: boolean;
    tip?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trafficSignId?: boolean;
    trafficSign?: boolean | Prisma.Question$trafficSignArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    content?: boolean;
    mediaUrl?: boolean;
    mediaType?: boolean;
    questionType?: boolean;
    group?: boolean;
    isParalysis?: boolean;
    explanation?: boolean;
    tip?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trafficSignId?: boolean;
    trafficSign?: boolean | Prisma.Question$trafficSignArgs<ExtArgs>;
}, ExtArgs["result"]["question"]>;
export type QuestionSelectScalar = {
    id?: boolean;
    content?: boolean;
    mediaUrl?: boolean;
    mediaType?: boolean;
    questionType?: boolean;
    group?: boolean;
    isParalysis?: boolean;
    explanation?: boolean;
    tip?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trafficSignId?: boolean;
};
export type QuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "content" | "mediaUrl" | "mediaType" | "questionType" | "group" | "isParalysis" | "explanation" | "tip" | "createdAt" | "updatedAt" | "trafficSignId", ExtArgs["result"]["question"]>;
export type QuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | Prisma.Question$answersArgs<ExtArgs>;
    examSetQuestions?: boolean | Prisma.Question$examSetQuestionsArgs<ExtArgs>;
    testDetails?: boolean | Prisma.Question$testDetailsArgs<ExtArgs>;
    bookmarks?: boolean | Prisma.Question$bookmarksArgs<ExtArgs>;
    trafficSign?: boolean | Prisma.Question$trafficSignArgs<ExtArgs>;
    _count?: boolean | Prisma.QuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type QuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trafficSign?: boolean | Prisma.Question$trafficSignArgs<ExtArgs>;
};
export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trafficSign?: boolean | Prisma.Question$trafficSignArgs<ExtArgs>;
};
export type $QuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Question";
    objects: {
        answers: Prisma.$AnswerPayload<ExtArgs>[];
        examSetQuestions: Prisma.$ExamSetQuestionPayload<ExtArgs>[];
        testDetails: Prisma.$TestDetailPayload<ExtArgs>[];
        bookmarks: Prisma.$UserBookmarkPayload<ExtArgs>[];
        trafficSign: Prisma.$TrafficSignPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        content: string;
        mediaUrl: string | null;
        mediaType: $Enums.MediaType;
        questionType: $Enums.QuestionType;
        group: $Enums.QuestionGroup;
        isParalysis: boolean;
        explanation: string | null;
        tip: string | null;
        createdAt: Date;
        updatedAt: Date;
        trafficSignId: number | null;
    }, ExtArgs["result"]["question"]>;
    composites: {};
};
export type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$QuestionPayload, S>;
export type QuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuestionCountAggregateInputType | true;
};
export interface QuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Question'];
        meta: {
            name: 'Question';
        };
    };
    findUnique<T extends QuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends QuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends QuestionFindManyArgs>(args?: Prisma.SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends QuestionCreateArgs>(args: Prisma.SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends QuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends QuestionDeleteArgs>(args: Prisma.SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends QuestionUpdateArgs>(args: Prisma.SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends QuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends QuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends QuestionUpsertArgs>(args: Prisma.SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends QuestionCountArgs>(args?: Prisma.Subset<T, QuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuestionCountAggregateOutputType> : number>;
    aggregate<T extends QuestionAggregateArgs>(args: Prisma.Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>;
    groupBy<T extends QuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: QuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: QuestionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: QuestionFieldRefs;
}
export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    answers<T extends Prisma.Question$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    examSetQuestions<T extends Prisma.Question$examSetQuestionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$examSetQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testDetails<T extends Prisma.Question$testDetailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$testDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookmarks<T extends Prisma.Question$bookmarksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    trafficSign<T extends Prisma.Question$trafficSignArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Question$trafficSignArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface QuestionFieldRefs {
    readonly id: Prisma.FieldRef<"Question", 'Int'>;
    readonly content: Prisma.FieldRef<"Question", 'String'>;
    readonly mediaUrl: Prisma.FieldRef<"Question", 'String'>;
    readonly mediaType: Prisma.FieldRef<"Question", 'MediaType'>;
    readonly questionType: Prisma.FieldRef<"Question", 'QuestionType'>;
    readonly group: Prisma.FieldRef<"Question", 'QuestionGroup'>;
    readonly isParalysis: Prisma.FieldRef<"Question", 'Boolean'>;
    readonly explanation: Prisma.FieldRef<"Question", 'String'>;
    readonly tip: Prisma.FieldRef<"Question", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Question", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Question", 'DateTime'>;
    readonly trafficSignId: Prisma.FieldRef<"Question", 'Int'>;
}
export type QuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
export type QuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
export type QuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where?: Prisma.QuestionWhereInput;
    orderBy?: Prisma.QuestionOrderByWithRelationInput | Prisma.QuestionOrderByWithRelationInput[];
    cursor?: Prisma.QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuestionScalarFieldEnum | Prisma.QuestionScalarFieldEnum[];
};
export type QuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionCreateInput, Prisma.QuestionUncheckedCreateInput>;
};
export type QuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.QuestionCreateManyInput | Prisma.QuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type QuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    data: Prisma.QuestionCreateManyInput | Prisma.QuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.QuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type QuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionUpdateInput, Prisma.QuestionUncheckedUpdateInput>;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuestionWhereInput;
    limit?: number;
};
export type QuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.QuestionUpdateManyMutationInput, Prisma.QuestionUncheckedUpdateManyInput>;
    where?: Prisma.QuestionWhereInput;
    limit?: number;
    include?: Prisma.QuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type QuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.QuestionCreateInput, Prisma.QuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.QuestionUpdateInput, Prisma.QuestionUncheckedUpdateInput>;
};
export type QuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
    where: Prisma.QuestionWhereUniqueInput;
};
export type QuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
    limit?: number;
};
export type Question$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput | Prisma.AnswerOrderByWithRelationInput[];
    cursor?: Prisma.AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnswerScalarFieldEnum | Prisma.AnswerScalarFieldEnum[];
};
export type Question$examSetQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    where?: Prisma.ExamSetQuestionWhereInput;
    orderBy?: Prisma.ExamSetQuestionOrderByWithRelationInput | Prisma.ExamSetQuestionOrderByWithRelationInput[];
    cursor?: Prisma.ExamSetQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamSetQuestionScalarFieldEnum | Prisma.ExamSetQuestionScalarFieldEnum[];
};
export type Question$testDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    where?: Prisma.TestDetailWhereInput;
    orderBy?: Prisma.TestDetailOrderByWithRelationInput | Prisma.TestDetailOrderByWithRelationInput[];
    cursor?: Prisma.TestDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestDetailScalarFieldEnum | Prisma.TestDetailScalarFieldEnum[];
};
export type Question$bookmarksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    where?: Prisma.UserBookmarkWhereInput;
    orderBy?: Prisma.UserBookmarkOrderByWithRelationInput | Prisma.UserBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.UserBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserBookmarkScalarFieldEnum | Prisma.UserBookmarkScalarFieldEnum[];
};
export type Question$trafficSignArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where?: Prisma.TrafficSignWhereInput;
};
export type QuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuestionSelect<ExtArgs> | null;
    omit?: Prisma.QuestionOmit<ExtArgs> | null;
    include?: Prisma.QuestionInclude<ExtArgs> | null;
};
export {};
