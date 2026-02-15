import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type TestDetailModel = runtime.Types.Result.DefaultSelection<Prisma.$TestDetailPayload>;
export type AggregateTestDetail = {
    _count: TestDetailCountAggregateOutputType | null;
    _avg: TestDetailAvgAggregateOutputType | null;
    _sum: TestDetailSumAggregateOutputType | null;
    _min: TestDetailMinAggregateOutputType | null;
    _max: TestDetailMaxAggregateOutputType | null;
};
export type TestDetailAvgAggregateOutputType = {
    id: number | null;
    testHistoryId: number | null;
    questionId: number | null;
    selectedAnswerId: number | null;
};
export type TestDetailSumAggregateOutputType = {
    id: number | null;
    testHistoryId: number | null;
    questionId: number | null;
    selectedAnswerId: number | null;
};
export type TestDetailMinAggregateOutputType = {
    id: number | null;
    testHistoryId: number | null;
    questionId: number | null;
    selectedAnswerId: number | null;
    isCorrect: boolean | null;
};
export type TestDetailMaxAggregateOutputType = {
    id: number | null;
    testHistoryId: number | null;
    questionId: number | null;
    selectedAnswerId: number | null;
    isCorrect: boolean | null;
};
export type TestDetailCountAggregateOutputType = {
    id: number;
    testHistoryId: number;
    questionId: number;
    selectedAnswerId: number;
    isCorrect: number;
    _all: number;
};
export type TestDetailAvgAggregateInputType = {
    id?: true;
    testHistoryId?: true;
    questionId?: true;
    selectedAnswerId?: true;
};
export type TestDetailSumAggregateInputType = {
    id?: true;
    testHistoryId?: true;
    questionId?: true;
    selectedAnswerId?: true;
};
export type TestDetailMinAggregateInputType = {
    id?: true;
    testHistoryId?: true;
    questionId?: true;
    selectedAnswerId?: true;
    isCorrect?: true;
};
export type TestDetailMaxAggregateInputType = {
    id?: true;
    testHistoryId?: true;
    questionId?: true;
    selectedAnswerId?: true;
    isCorrect?: true;
};
export type TestDetailCountAggregateInputType = {
    id?: true;
    testHistoryId?: true;
    questionId?: true;
    selectedAnswerId?: true;
    isCorrect?: true;
    _all?: true;
};
export type TestDetailAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestDetailWhereInput;
    orderBy?: Prisma.TestDetailOrderByWithRelationInput | Prisma.TestDetailOrderByWithRelationInput[];
    cursor?: Prisma.TestDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestDetailCountAggregateInputType;
    _avg?: TestDetailAvgAggregateInputType;
    _sum?: TestDetailSumAggregateInputType;
    _min?: TestDetailMinAggregateInputType;
    _max?: TestDetailMaxAggregateInputType;
};
export type GetTestDetailAggregateType<T extends TestDetailAggregateArgs> = {
    [P in keyof T & keyof AggregateTestDetail]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestDetail[P]> : Prisma.GetScalarType<T[P], AggregateTestDetail[P]>;
};
export type TestDetailGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestDetailWhereInput;
    orderBy?: Prisma.TestDetailOrderByWithAggregationInput | Prisma.TestDetailOrderByWithAggregationInput[];
    by: Prisma.TestDetailScalarFieldEnum[] | Prisma.TestDetailScalarFieldEnum;
    having?: Prisma.TestDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestDetailCountAggregateInputType | true;
    _avg?: TestDetailAvgAggregateInputType;
    _sum?: TestDetailSumAggregateInputType;
    _min?: TestDetailMinAggregateInputType;
    _max?: TestDetailMaxAggregateInputType;
};
export type TestDetailGroupByOutputType = {
    id: number;
    testHistoryId: number;
    questionId: number;
    selectedAnswerId: number | null;
    isCorrect: boolean;
    _count: TestDetailCountAggregateOutputType | null;
    _avg: TestDetailAvgAggregateOutputType | null;
    _sum: TestDetailSumAggregateOutputType | null;
    _min: TestDetailMinAggregateOutputType | null;
    _max: TestDetailMaxAggregateOutputType | null;
};
type GetTestDetailGroupByPayload<T extends TestDetailGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestDetailGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestDetailGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestDetailGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestDetailGroupByOutputType[P]>;
}>>;
export type TestDetailWhereInput = {
    AND?: Prisma.TestDetailWhereInput | Prisma.TestDetailWhereInput[];
    OR?: Prisma.TestDetailWhereInput[];
    NOT?: Prisma.TestDetailWhereInput | Prisma.TestDetailWhereInput[];
    id?: Prisma.IntFilter<"TestDetail"> | number;
    testHistoryId?: Prisma.IntFilter<"TestDetail"> | number;
    questionId?: Prisma.IntFilter<"TestDetail"> | number;
    selectedAnswerId?: Prisma.IntNullableFilter<"TestDetail"> | number | null;
    isCorrect?: Prisma.BoolFilter<"TestDetail"> | boolean;
    history?: Prisma.XOR<Prisma.TestHistoryScalarRelationFilter, Prisma.TestHistoryWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    selectedAnswer?: Prisma.XOR<Prisma.AnswerNullableScalarRelationFilter, Prisma.AnswerWhereInput> | null;
};
export type TestDetailOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    history?: Prisma.TestHistoryOrderByWithRelationInput;
    question?: Prisma.QuestionOrderByWithRelationInput;
    selectedAnswer?: Prisma.AnswerOrderByWithRelationInput;
};
export type TestDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TestDetailWhereInput | Prisma.TestDetailWhereInput[];
    OR?: Prisma.TestDetailWhereInput[];
    NOT?: Prisma.TestDetailWhereInput | Prisma.TestDetailWhereInput[];
    testHistoryId?: Prisma.IntFilter<"TestDetail"> | number;
    questionId?: Prisma.IntFilter<"TestDetail"> | number;
    selectedAnswerId?: Prisma.IntNullableFilter<"TestDetail"> | number | null;
    isCorrect?: Prisma.BoolFilter<"TestDetail"> | boolean;
    history?: Prisma.XOR<Prisma.TestHistoryScalarRelationFilter, Prisma.TestHistoryWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    selectedAnswer?: Prisma.XOR<Prisma.AnswerNullableScalarRelationFilter, Prisma.AnswerWhereInput> | null;
}, "id">;
export type TestDetailOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    _count?: Prisma.TestDetailCountOrderByAggregateInput;
    _avg?: Prisma.TestDetailAvgOrderByAggregateInput;
    _max?: Prisma.TestDetailMaxOrderByAggregateInput;
    _min?: Prisma.TestDetailMinOrderByAggregateInput;
    _sum?: Prisma.TestDetailSumOrderByAggregateInput;
};
export type TestDetailScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestDetailScalarWhereWithAggregatesInput | Prisma.TestDetailScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestDetailScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestDetailScalarWhereWithAggregatesInput | Prisma.TestDetailScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TestDetail"> | number;
    testHistoryId?: Prisma.IntWithAggregatesFilter<"TestDetail"> | number;
    questionId?: Prisma.IntWithAggregatesFilter<"TestDetail"> | number;
    selectedAnswerId?: Prisma.IntNullableWithAggregatesFilter<"TestDetail"> | number | null;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"TestDetail"> | boolean;
};
export type TestDetailCreateInput = {
    isCorrect: boolean;
    history: Prisma.TestHistoryCreateNestedOneWithoutDetailsInput;
    question: Prisma.QuestionCreateNestedOneWithoutTestDetailsInput;
    selectedAnswer?: Prisma.AnswerCreateNestedOneWithoutTestDetailsInput;
};
export type TestDetailUncheckedCreateInput = {
    id?: number;
    testHistoryId: number;
    questionId: number;
    selectedAnswerId?: number | null;
    isCorrect: boolean;
};
export type TestDetailUpdateInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    history?: Prisma.TestHistoryUpdateOneRequiredWithoutDetailsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutTestDetailsNestedInput;
    selectedAnswer?: Prisma.AnswerUpdateOneWithoutTestDetailsNestedInput;
};
export type TestDetailUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testHistoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedAnswerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailCreateManyInput = {
    id?: number;
    testHistoryId: number;
    questionId: number;
    selectedAnswerId?: number | null;
    isCorrect: boolean;
};
export type TestDetailUpdateManyMutationInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testHistoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedAnswerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailListRelationFilter = {
    every?: Prisma.TestDetailWhereInput;
    some?: Prisma.TestDetailWhereInput;
    none?: Prisma.TestDetailWhereInput;
};
export type TestDetailOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TestDetailCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type TestDetailAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrder;
};
export type TestDetailMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type TestDetailMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type TestDetailSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    testHistoryId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    selectedAnswerId?: Prisma.SortOrder;
};
export type TestDetailCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutQuestionInput, Prisma.TestDetailUncheckedCreateWithoutQuestionInput> | Prisma.TestDetailCreateWithoutQuestionInput[] | Prisma.TestDetailUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutQuestionInput | Prisma.TestDetailCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.TestDetailCreateManyQuestionInputEnvelope;
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
};
export type TestDetailUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutQuestionInput, Prisma.TestDetailUncheckedCreateWithoutQuestionInput> | Prisma.TestDetailCreateWithoutQuestionInput[] | Prisma.TestDetailUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutQuestionInput | Prisma.TestDetailCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.TestDetailCreateManyQuestionInputEnvelope;
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
};
export type TestDetailUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutQuestionInput, Prisma.TestDetailUncheckedCreateWithoutQuestionInput> | Prisma.TestDetailCreateWithoutQuestionInput[] | Prisma.TestDetailUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutQuestionInput | Prisma.TestDetailCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.TestDetailUpsertWithWhereUniqueWithoutQuestionInput | Prisma.TestDetailUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.TestDetailCreateManyQuestionInputEnvelope;
    set?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    disconnect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    delete?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    update?: Prisma.TestDetailUpdateWithWhereUniqueWithoutQuestionInput | Prisma.TestDetailUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.TestDetailUpdateManyWithWhereWithoutQuestionInput | Prisma.TestDetailUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
};
export type TestDetailUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutQuestionInput, Prisma.TestDetailUncheckedCreateWithoutQuestionInput> | Prisma.TestDetailCreateWithoutQuestionInput[] | Prisma.TestDetailUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutQuestionInput | Prisma.TestDetailCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.TestDetailUpsertWithWhereUniqueWithoutQuestionInput | Prisma.TestDetailUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.TestDetailCreateManyQuestionInputEnvelope;
    set?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    disconnect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    delete?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    update?: Prisma.TestDetailUpdateWithWhereUniqueWithoutQuestionInput | Prisma.TestDetailUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.TestDetailUpdateManyWithWhereWithoutQuestionInput | Prisma.TestDetailUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
};
export type TestDetailCreateNestedManyWithoutSelectedAnswerInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput> | Prisma.TestDetailCreateWithoutSelectedAnswerInput[] | Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput | Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput[];
    createMany?: Prisma.TestDetailCreateManySelectedAnswerInputEnvelope;
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
};
export type TestDetailUncheckedCreateNestedManyWithoutSelectedAnswerInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput> | Prisma.TestDetailCreateWithoutSelectedAnswerInput[] | Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput | Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput[];
    createMany?: Prisma.TestDetailCreateManySelectedAnswerInputEnvelope;
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
};
export type TestDetailUpdateManyWithoutSelectedAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput> | Prisma.TestDetailCreateWithoutSelectedAnswerInput[] | Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput | Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput[];
    upsert?: Prisma.TestDetailUpsertWithWhereUniqueWithoutSelectedAnswerInput | Prisma.TestDetailUpsertWithWhereUniqueWithoutSelectedAnswerInput[];
    createMany?: Prisma.TestDetailCreateManySelectedAnswerInputEnvelope;
    set?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    disconnect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    delete?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    update?: Prisma.TestDetailUpdateWithWhereUniqueWithoutSelectedAnswerInput | Prisma.TestDetailUpdateWithWhereUniqueWithoutSelectedAnswerInput[];
    updateMany?: Prisma.TestDetailUpdateManyWithWhereWithoutSelectedAnswerInput | Prisma.TestDetailUpdateManyWithWhereWithoutSelectedAnswerInput[];
    deleteMany?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
};
export type TestDetailUncheckedUpdateManyWithoutSelectedAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput> | Prisma.TestDetailCreateWithoutSelectedAnswerInput[] | Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput | Prisma.TestDetailCreateOrConnectWithoutSelectedAnswerInput[];
    upsert?: Prisma.TestDetailUpsertWithWhereUniqueWithoutSelectedAnswerInput | Prisma.TestDetailUpsertWithWhereUniqueWithoutSelectedAnswerInput[];
    createMany?: Prisma.TestDetailCreateManySelectedAnswerInputEnvelope;
    set?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    disconnect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    delete?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    update?: Prisma.TestDetailUpdateWithWhereUniqueWithoutSelectedAnswerInput | Prisma.TestDetailUpdateWithWhereUniqueWithoutSelectedAnswerInput[];
    updateMany?: Prisma.TestDetailUpdateManyWithWhereWithoutSelectedAnswerInput | Prisma.TestDetailUpdateManyWithWhereWithoutSelectedAnswerInput[];
    deleteMany?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
};
export type TestDetailCreateNestedManyWithoutHistoryInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutHistoryInput, Prisma.TestDetailUncheckedCreateWithoutHistoryInput> | Prisma.TestDetailCreateWithoutHistoryInput[] | Prisma.TestDetailUncheckedCreateWithoutHistoryInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutHistoryInput | Prisma.TestDetailCreateOrConnectWithoutHistoryInput[];
    createMany?: Prisma.TestDetailCreateManyHistoryInputEnvelope;
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
};
export type TestDetailUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutHistoryInput, Prisma.TestDetailUncheckedCreateWithoutHistoryInput> | Prisma.TestDetailCreateWithoutHistoryInput[] | Prisma.TestDetailUncheckedCreateWithoutHistoryInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutHistoryInput | Prisma.TestDetailCreateOrConnectWithoutHistoryInput[];
    createMany?: Prisma.TestDetailCreateManyHistoryInputEnvelope;
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
};
export type TestDetailUpdateManyWithoutHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutHistoryInput, Prisma.TestDetailUncheckedCreateWithoutHistoryInput> | Prisma.TestDetailCreateWithoutHistoryInput[] | Prisma.TestDetailUncheckedCreateWithoutHistoryInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutHistoryInput | Prisma.TestDetailCreateOrConnectWithoutHistoryInput[];
    upsert?: Prisma.TestDetailUpsertWithWhereUniqueWithoutHistoryInput | Prisma.TestDetailUpsertWithWhereUniqueWithoutHistoryInput[];
    createMany?: Prisma.TestDetailCreateManyHistoryInputEnvelope;
    set?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    disconnect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    delete?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    update?: Prisma.TestDetailUpdateWithWhereUniqueWithoutHistoryInput | Prisma.TestDetailUpdateWithWhereUniqueWithoutHistoryInput[];
    updateMany?: Prisma.TestDetailUpdateManyWithWhereWithoutHistoryInput | Prisma.TestDetailUpdateManyWithWhereWithoutHistoryInput[];
    deleteMany?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
};
export type TestDetailUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.TestDetailCreateWithoutHistoryInput, Prisma.TestDetailUncheckedCreateWithoutHistoryInput> | Prisma.TestDetailCreateWithoutHistoryInput[] | Prisma.TestDetailUncheckedCreateWithoutHistoryInput[];
    connectOrCreate?: Prisma.TestDetailCreateOrConnectWithoutHistoryInput | Prisma.TestDetailCreateOrConnectWithoutHistoryInput[];
    upsert?: Prisma.TestDetailUpsertWithWhereUniqueWithoutHistoryInput | Prisma.TestDetailUpsertWithWhereUniqueWithoutHistoryInput[];
    createMany?: Prisma.TestDetailCreateManyHistoryInputEnvelope;
    set?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    disconnect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    delete?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    connect?: Prisma.TestDetailWhereUniqueInput | Prisma.TestDetailWhereUniqueInput[];
    update?: Prisma.TestDetailUpdateWithWhereUniqueWithoutHistoryInput | Prisma.TestDetailUpdateWithWhereUniqueWithoutHistoryInput[];
    updateMany?: Prisma.TestDetailUpdateManyWithWhereWithoutHistoryInput | Prisma.TestDetailUpdateManyWithWhereWithoutHistoryInput[];
    deleteMany?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
};
export type TestDetailCreateWithoutQuestionInput = {
    isCorrect: boolean;
    history: Prisma.TestHistoryCreateNestedOneWithoutDetailsInput;
    selectedAnswer?: Prisma.AnswerCreateNestedOneWithoutTestDetailsInput;
};
export type TestDetailUncheckedCreateWithoutQuestionInput = {
    id?: number;
    testHistoryId: number;
    selectedAnswerId?: number | null;
    isCorrect: boolean;
};
export type TestDetailCreateOrConnectWithoutQuestionInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestDetailCreateWithoutQuestionInput, Prisma.TestDetailUncheckedCreateWithoutQuestionInput>;
};
export type TestDetailCreateManyQuestionInputEnvelope = {
    data: Prisma.TestDetailCreateManyQuestionInput | Prisma.TestDetailCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type TestDetailUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestDetailUpdateWithoutQuestionInput, Prisma.TestDetailUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.TestDetailCreateWithoutQuestionInput, Prisma.TestDetailUncheckedCreateWithoutQuestionInput>;
};
export type TestDetailUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestDetailUpdateWithoutQuestionInput, Prisma.TestDetailUncheckedUpdateWithoutQuestionInput>;
};
export type TestDetailUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.TestDetailScalarWhereInput;
    data: Prisma.XOR<Prisma.TestDetailUpdateManyMutationInput, Prisma.TestDetailUncheckedUpdateManyWithoutQuestionInput>;
};
export type TestDetailScalarWhereInput = {
    AND?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
    OR?: Prisma.TestDetailScalarWhereInput[];
    NOT?: Prisma.TestDetailScalarWhereInput | Prisma.TestDetailScalarWhereInput[];
    id?: Prisma.IntFilter<"TestDetail"> | number;
    testHistoryId?: Prisma.IntFilter<"TestDetail"> | number;
    questionId?: Prisma.IntFilter<"TestDetail"> | number;
    selectedAnswerId?: Prisma.IntNullableFilter<"TestDetail"> | number | null;
    isCorrect?: Prisma.BoolFilter<"TestDetail"> | boolean;
};
export type TestDetailCreateWithoutSelectedAnswerInput = {
    isCorrect: boolean;
    history: Prisma.TestHistoryCreateNestedOneWithoutDetailsInput;
    question: Prisma.QuestionCreateNestedOneWithoutTestDetailsInput;
};
export type TestDetailUncheckedCreateWithoutSelectedAnswerInput = {
    id?: number;
    testHistoryId: number;
    questionId: number;
    isCorrect: boolean;
};
export type TestDetailCreateOrConnectWithoutSelectedAnswerInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestDetailCreateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput>;
};
export type TestDetailCreateManySelectedAnswerInputEnvelope = {
    data: Prisma.TestDetailCreateManySelectedAnswerInput | Prisma.TestDetailCreateManySelectedAnswerInput[];
    skipDuplicates?: boolean;
};
export type TestDetailUpsertWithWhereUniqueWithoutSelectedAnswerInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestDetailUpdateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedUpdateWithoutSelectedAnswerInput>;
    create: Prisma.XOR<Prisma.TestDetailCreateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedCreateWithoutSelectedAnswerInput>;
};
export type TestDetailUpdateWithWhereUniqueWithoutSelectedAnswerInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestDetailUpdateWithoutSelectedAnswerInput, Prisma.TestDetailUncheckedUpdateWithoutSelectedAnswerInput>;
};
export type TestDetailUpdateManyWithWhereWithoutSelectedAnswerInput = {
    where: Prisma.TestDetailScalarWhereInput;
    data: Prisma.XOR<Prisma.TestDetailUpdateManyMutationInput, Prisma.TestDetailUncheckedUpdateManyWithoutSelectedAnswerInput>;
};
export type TestDetailCreateWithoutHistoryInput = {
    isCorrect: boolean;
    question: Prisma.QuestionCreateNestedOneWithoutTestDetailsInput;
    selectedAnswer?: Prisma.AnswerCreateNestedOneWithoutTestDetailsInput;
};
export type TestDetailUncheckedCreateWithoutHistoryInput = {
    id?: number;
    questionId: number;
    selectedAnswerId?: number | null;
    isCorrect: boolean;
};
export type TestDetailCreateOrConnectWithoutHistoryInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestDetailCreateWithoutHistoryInput, Prisma.TestDetailUncheckedCreateWithoutHistoryInput>;
};
export type TestDetailCreateManyHistoryInputEnvelope = {
    data: Prisma.TestDetailCreateManyHistoryInput | Prisma.TestDetailCreateManyHistoryInput[];
    skipDuplicates?: boolean;
};
export type TestDetailUpsertWithWhereUniqueWithoutHistoryInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestDetailUpdateWithoutHistoryInput, Prisma.TestDetailUncheckedUpdateWithoutHistoryInput>;
    create: Prisma.XOR<Prisma.TestDetailCreateWithoutHistoryInput, Prisma.TestDetailUncheckedCreateWithoutHistoryInput>;
};
export type TestDetailUpdateWithWhereUniqueWithoutHistoryInput = {
    where: Prisma.TestDetailWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestDetailUpdateWithoutHistoryInput, Prisma.TestDetailUncheckedUpdateWithoutHistoryInput>;
};
export type TestDetailUpdateManyWithWhereWithoutHistoryInput = {
    where: Prisma.TestDetailScalarWhereInput;
    data: Prisma.XOR<Prisma.TestDetailUpdateManyMutationInput, Prisma.TestDetailUncheckedUpdateManyWithoutHistoryInput>;
};
export type TestDetailCreateManyQuestionInput = {
    id?: number;
    testHistoryId: number;
    selectedAnswerId?: number | null;
    isCorrect: boolean;
};
export type TestDetailUpdateWithoutQuestionInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    history?: Prisma.TestHistoryUpdateOneRequiredWithoutDetailsNestedInput;
    selectedAnswer?: Prisma.AnswerUpdateOneWithoutTestDetailsNestedInput;
};
export type TestDetailUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testHistoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedAnswerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testHistoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedAnswerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailCreateManySelectedAnswerInput = {
    id?: number;
    testHistoryId: number;
    questionId: number;
    isCorrect: boolean;
};
export type TestDetailUpdateWithoutSelectedAnswerInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    history?: Prisma.TestHistoryUpdateOneRequiredWithoutDetailsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutTestDetailsNestedInput;
};
export type TestDetailUncheckedUpdateWithoutSelectedAnswerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testHistoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailUncheckedUpdateManyWithoutSelectedAnswerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    testHistoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailCreateManyHistoryInput = {
    id?: number;
    questionId: number;
    selectedAnswerId?: number | null;
    isCorrect: boolean;
};
export type TestDetailUpdateWithoutHistoryInput = {
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    question?: Prisma.QuestionUpdateOneRequiredWithoutTestDetailsNestedInput;
    selectedAnswer?: Prisma.AnswerUpdateOneWithoutTestDetailsNestedInput;
};
export type TestDetailUncheckedUpdateWithoutHistoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedAnswerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailUncheckedUpdateManyWithoutHistoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    selectedAnswerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TestDetailSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    testHistoryId?: boolean;
    questionId?: boolean;
    selectedAnswerId?: boolean;
    isCorrect?: boolean;
    history?: boolean | Prisma.TestHistoryDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    selectedAnswer?: boolean | Prisma.TestDetail$selectedAnswerArgs<ExtArgs>;
}, ExtArgs["result"]["testDetail"]>;
export type TestDetailSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    testHistoryId?: boolean;
    questionId?: boolean;
    selectedAnswerId?: boolean;
    isCorrect?: boolean;
    history?: boolean | Prisma.TestHistoryDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    selectedAnswer?: boolean | Prisma.TestDetail$selectedAnswerArgs<ExtArgs>;
}, ExtArgs["result"]["testDetail"]>;
export type TestDetailSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    testHistoryId?: boolean;
    questionId?: boolean;
    selectedAnswerId?: boolean;
    isCorrect?: boolean;
    history?: boolean | Prisma.TestHistoryDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    selectedAnswer?: boolean | Prisma.TestDetail$selectedAnswerArgs<ExtArgs>;
}, ExtArgs["result"]["testDetail"]>;
export type TestDetailSelectScalar = {
    id?: boolean;
    testHistoryId?: boolean;
    questionId?: boolean;
    selectedAnswerId?: boolean;
    isCorrect?: boolean;
};
export type TestDetailOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "testHistoryId" | "questionId" | "selectedAnswerId" | "isCorrect", ExtArgs["result"]["testDetail"]>;
export type TestDetailInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    history?: boolean | Prisma.TestHistoryDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    selectedAnswer?: boolean | Prisma.TestDetail$selectedAnswerArgs<ExtArgs>;
};
export type TestDetailIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    history?: boolean | Prisma.TestHistoryDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    selectedAnswer?: boolean | Prisma.TestDetail$selectedAnswerArgs<ExtArgs>;
};
export type TestDetailIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    history?: boolean | Prisma.TestHistoryDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    selectedAnswer?: boolean | Prisma.TestDetail$selectedAnswerArgs<ExtArgs>;
};
export type $TestDetailPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TestDetail";
    objects: {
        history: Prisma.$TestHistoryPayload<ExtArgs>;
        question: Prisma.$QuestionPayload<ExtArgs>;
        selectedAnswer: Prisma.$AnswerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        testHistoryId: number;
        questionId: number;
        selectedAnswerId: number | null;
        isCorrect: boolean;
    }, ExtArgs["result"]["testDetail"]>;
    composites: {};
};
export type TestDetailGetPayload<S extends boolean | null | undefined | TestDetailDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestDetailPayload, S>;
export type TestDetailCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestDetailCountAggregateInputType | true;
};
export interface TestDetailDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TestDetail'];
        meta: {
            name: 'TestDetail';
        };
    };
    findUnique<T extends TestDetailFindUniqueArgs>(args: Prisma.SelectSubset<T, TestDetailFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestDetailFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestDetailFindFirstArgs>(args?: Prisma.SelectSubset<T, TestDetailFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestDetailFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestDetailFindManyArgs>(args?: Prisma.SelectSubset<T, TestDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestDetailCreateArgs>(args: Prisma.SelectSubset<T, TestDetailCreateArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestDetailCreateManyArgs>(args?: Prisma.SelectSubset<T, TestDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestDetailCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestDetailDeleteArgs>(args: Prisma.SelectSubset<T, TestDetailDeleteArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestDetailUpdateArgs>(args: Prisma.SelectSubset<T, TestDetailUpdateArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestDetailDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestDetailUpdateManyArgs>(args: Prisma.SelectSubset<T, TestDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestDetailUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestDetailUpsertArgs>(args: Prisma.SelectSubset<T, TestDetailUpsertArgs<ExtArgs>>): Prisma.Prisma__TestDetailClient<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestDetailCountArgs>(args?: Prisma.Subset<T, TestDetailCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestDetailCountAggregateOutputType> : number>;
    aggregate<T extends TestDetailAggregateArgs>(args: Prisma.Subset<T, TestDetailAggregateArgs>): Prisma.PrismaPromise<GetTestDetailAggregateType<T>>;
    groupBy<T extends TestDetailGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestDetailGroupByArgs['orderBy'];
    } : {
        orderBy?: TestDetailGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestDetailFieldRefs;
}
export interface Prisma__TestDetailClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    history<T extends Prisma.TestHistoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestHistoryDefaultArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    selectedAnswer<T extends Prisma.TestDetail$selectedAnswerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestDetail$selectedAnswerArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestDetailFieldRefs {
    readonly id: Prisma.FieldRef<"TestDetail", 'Int'>;
    readonly testHistoryId: Prisma.FieldRef<"TestDetail", 'Int'>;
    readonly questionId: Prisma.FieldRef<"TestDetail", 'Int'>;
    readonly selectedAnswerId: Prisma.FieldRef<"TestDetail", 'Int'>;
    readonly isCorrect: Prisma.FieldRef<"TestDetail", 'Boolean'>;
}
export type TestDetailFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    where: Prisma.TestDetailWhereUniqueInput;
};
export type TestDetailFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    where: Prisma.TestDetailWhereUniqueInput;
};
export type TestDetailFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestDetailFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestDetailFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestDetailCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestDetailCreateInput, Prisma.TestDetailUncheckedCreateInput>;
};
export type TestDetailCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestDetailCreateManyInput | Prisma.TestDetailCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestDetailCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    data: Prisma.TestDetailCreateManyInput | Prisma.TestDetailCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TestDetailIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TestDetailUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestDetailUpdateInput, Prisma.TestDetailUncheckedUpdateInput>;
    where: Prisma.TestDetailWhereUniqueInput;
};
export type TestDetailUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestDetailUpdateManyMutationInput, Prisma.TestDetailUncheckedUpdateManyInput>;
    where?: Prisma.TestDetailWhereInput;
    limit?: number;
};
export type TestDetailUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestDetailUpdateManyMutationInput, Prisma.TestDetailUncheckedUpdateManyInput>;
    where?: Prisma.TestDetailWhereInput;
    limit?: number;
    include?: Prisma.TestDetailIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TestDetailUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    where: Prisma.TestDetailWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestDetailCreateInput, Prisma.TestDetailUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestDetailUpdateInput, Prisma.TestDetailUncheckedUpdateInput>;
};
export type TestDetailDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
    where: Prisma.TestDetailWhereUniqueInput;
};
export type TestDetailDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestDetailWhereInput;
    limit?: number;
};
export type TestDetail$selectedAnswerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where?: Prisma.AnswerWhereInput;
};
export type TestDetailDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestDetailSelect<ExtArgs> | null;
    omit?: Prisma.TestDetailOmit<ExtArgs> | null;
    include?: Prisma.TestDetailInclude<ExtArgs> | null;
};
export {};
