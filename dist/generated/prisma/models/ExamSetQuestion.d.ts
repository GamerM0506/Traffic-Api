import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type ExamSetQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamSetQuestionPayload>;
export type AggregateExamSetQuestion = {
    _count: ExamSetQuestionCountAggregateOutputType | null;
    _avg: ExamSetQuestionAvgAggregateOutputType | null;
    _sum: ExamSetQuestionSumAggregateOutputType | null;
    _min: ExamSetQuestionMinAggregateOutputType | null;
    _max: ExamSetQuestionMaxAggregateOutputType | null;
};
export type ExamSetQuestionAvgAggregateOutputType = {
    examSetId: number | null;
    questionId: number | null;
};
export type ExamSetQuestionSumAggregateOutputType = {
    examSetId: number | null;
    questionId: number | null;
};
export type ExamSetQuestionMinAggregateOutputType = {
    examSetId: number | null;
    questionId: number | null;
};
export type ExamSetQuestionMaxAggregateOutputType = {
    examSetId: number | null;
    questionId: number | null;
};
export type ExamSetQuestionCountAggregateOutputType = {
    examSetId: number;
    questionId: number;
    _all: number;
};
export type ExamSetQuestionAvgAggregateInputType = {
    examSetId?: true;
    questionId?: true;
};
export type ExamSetQuestionSumAggregateInputType = {
    examSetId?: true;
    questionId?: true;
};
export type ExamSetQuestionMinAggregateInputType = {
    examSetId?: true;
    questionId?: true;
};
export type ExamSetQuestionMaxAggregateInputType = {
    examSetId?: true;
    questionId?: true;
};
export type ExamSetQuestionCountAggregateInputType = {
    examSetId?: true;
    questionId?: true;
    _all?: true;
};
export type ExamSetQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetQuestionWhereInput;
    orderBy?: Prisma.ExamSetQuestionOrderByWithRelationInput | Prisma.ExamSetQuestionOrderByWithRelationInput[];
    cursor?: Prisma.ExamSetQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamSetQuestionCountAggregateInputType;
    _avg?: ExamSetQuestionAvgAggregateInputType;
    _sum?: ExamSetQuestionSumAggregateInputType;
    _min?: ExamSetQuestionMinAggregateInputType;
    _max?: ExamSetQuestionMaxAggregateInputType;
};
export type GetExamSetQuestionAggregateType<T extends ExamSetQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateExamSetQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExamSetQuestion[P]> : Prisma.GetScalarType<T[P], AggregateExamSetQuestion[P]>;
};
export type ExamSetQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetQuestionWhereInput;
    orderBy?: Prisma.ExamSetQuestionOrderByWithAggregationInput | Prisma.ExamSetQuestionOrderByWithAggregationInput[];
    by: Prisma.ExamSetQuestionScalarFieldEnum[] | Prisma.ExamSetQuestionScalarFieldEnum;
    having?: Prisma.ExamSetQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamSetQuestionCountAggregateInputType | true;
    _avg?: ExamSetQuestionAvgAggregateInputType;
    _sum?: ExamSetQuestionSumAggregateInputType;
    _min?: ExamSetQuestionMinAggregateInputType;
    _max?: ExamSetQuestionMaxAggregateInputType;
};
export type ExamSetQuestionGroupByOutputType = {
    examSetId: number;
    questionId: number;
    _count: ExamSetQuestionCountAggregateOutputType | null;
    _avg: ExamSetQuestionAvgAggregateOutputType | null;
    _sum: ExamSetQuestionSumAggregateOutputType | null;
    _min: ExamSetQuestionMinAggregateOutputType | null;
    _max: ExamSetQuestionMaxAggregateOutputType | null;
};
type GetExamSetQuestionGroupByPayload<T extends ExamSetQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamSetQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamSetQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamSetQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamSetQuestionGroupByOutputType[P]>;
}>>;
export type ExamSetQuestionWhereInput = {
    AND?: Prisma.ExamSetQuestionWhereInput | Prisma.ExamSetQuestionWhereInput[];
    OR?: Prisma.ExamSetQuestionWhereInput[];
    NOT?: Prisma.ExamSetQuestionWhereInput | Prisma.ExamSetQuestionWhereInput[];
    examSetId?: Prisma.IntFilter<"ExamSetQuestion"> | number;
    questionId?: Prisma.IntFilter<"ExamSetQuestion"> | number;
    examSet?: Prisma.XOR<Prisma.ExamSetScalarRelationFilter, Prisma.ExamSetWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
};
export type ExamSetQuestionOrderByWithRelationInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    examSet?: Prisma.ExamSetOrderByWithRelationInput;
    question?: Prisma.QuestionOrderByWithRelationInput;
};
export type ExamSetQuestionWhereUniqueInput = Prisma.AtLeast<{
    examSetId_questionId?: Prisma.ExamSetQuestionExamSetIdQuestionIdCompoundUniqueInput;
    AND?: Prisma.ExamSetQuestionWhereInput | Prisma.ExamSetQuestionWhereInput[];
    OR?: Prisma.ExamSetQuestionWhereInput[];
    NOT?: Prisma.ExamSetQuestionWhereInput | Prisma.ExamSetQuestionWhereInput[];
    examSetId?: Prisma.IntFilter<"ExamSetQuestion"> | number;
    questionId?: Prisma.IntFilter<"ExamSetQuestion"> | number;
    examSet?: Prisma.XOR<Prisma.ExamSetScalarRelationFilter, Prisma.ExamSetWhereInput>;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
}, "examSetId_questionId">;
export type ExamSetQuestionOrderByWithAggregationInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    _count?: Prisma.ExamSetQuestionCountOrderByAggregateInput;
    _avg?: Prisma.ExamSetQuestionAvgOrderByAggregateInput;
    _max?: Prisma.ExamSetQuestionMaxOrderByAggregateInput;
    _min?: Prisma.ExamSetQuestionMinOrderByAggregateInput;
    _sum?: Prisma.ExamSetQuestionSumOrderByAggregateInput;
};
export type ExamSetQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamSetQuestionScalarWhereWithAggregatesInput | Prisma.ExamSetQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamSetQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamSetQuestionScalarWhereWithAggregatesInput | Prisma.ExamSetQuestionScalarWhereWithAggregatesInput[];
    examSetId?: Prisma.IntWithAggregatesFilter<"ExamSetQuestion"> | number;
    questionId?: Prisma.IntWithAggregatesFilter<"ExamSetQuestion"> | number;
};
export type ExamSetQuestionCreateInput = {
    examSet: Prisma.ExamSetCreateNestedOneWithoutQuestionsInput;
    question: Prisma.QuestionCreateNestedOneWithoutExamSetQuestionsInput;
};
export type ExamSetQuestionUncheckedCreateInput = {
    examSetId: number;
    questionId: number;
};
export type ExamSetQuestionUpdateInput = {
    examSet?: Prisma.ExamSetUpdateOneRequiredWithoutQuestionsNestedInput;
    question?: Prisma.QuestionUpdateOneRequiredWithoutExamSetQuestionsNestedInput;
};
export type ExamSetQuestionUncheckedUpdateInput = {
    examSetId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamSetQuestionCreateManyInput = {
    examSetId: number;
    questionId: number;
};
export type ExamSetQuestionUpdateManyMutationInput = {};
export type ExamSetQuestionUncheckedUpdateManyInput = {
    examSetId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamSetQuestionListRelationFilter = {
    every?: Prisma.ExamSetQuestionWhereInput;
    some?: Prisma.ExamSetQuestionWhereInput;
    none?: Prisma.ExamSetQuestionWhereInput;
};
export type ExamSetQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExamSetQuestionExamSetIdQuestionIdCompoundUniqueInput = {
    examSetId: number;
    questionId: number;
};
export type ExamSetQuestionCountOrderByAggregateInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type ExamSetQuestionAvgOrderByAggregateInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type ExamSetQuestionMaxOrderByAggregateInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type ExamSetQuestionMinOrderByAggregateInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type ExamSetQuestionSumOrderByAggregateInput = {
    examSetId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type ExamSetQuestionCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput> | Prisma.ExamSetQuestionCreateWithoutQuestionInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput | Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyQuestionInputEnvelope;
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
};
export type ExamSetQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput> | Prisma.ExamSetQuestionCreateWithoutQuestionInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput | Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyQuestionInputEnvelope;
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
};
export type ExamSetQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput> | Prisma.ExamSetQuestionCreateWithoutQuestionInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput | Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutQuestionInput | Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyQuestionInputEnvelope;
    set?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    disconnect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    delete?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    update?: Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutQuestionInput | Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.ExamSetQuestionUpdateManyWithWhereWithoutQuestionInput | Prisma.ExamSetQuestionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.ExamSetQuestionScalarWhereInput | Prisma.ExamSetQuestionScalarWhereInput[];
};
export type ExamSetQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput> | Prisma.ExamSetQuestionCreateWithoutQuestionInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput | Prisma.ExamSetQuestionCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutQuestionInput | Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyQuestionInputEnvelope;
    set?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    disconnect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    delete?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    update?: Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutQuestionInput | Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.ExamSetQuestionUpdateManyWithWhereWithoutQuestionInput | Prisma.ExamSetQuestionUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.ExamSetQuestionScalarWhereInput | Prisma.ExamSetQuestionScalarWhereInput[];
};
export type ExamSetQuestionCreateNestedManyWithoutExamSetInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput> | Prisma.ExamSetQuestionCreateWithoutExamSetInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput | Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyExamSetInputEnvelope;
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
};
export type ExamSetQuestionUncheckedCreateNestedManyWithoutExamSetInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput> | Prisma.ExamSetQuestionCreateWithoutExamSetInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput | Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyExamSetInputEnvelope;
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
};
export type ExamSetQuestionUpdateManyWithoutExamSetNestedInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput> | Prisma.ExamSetQuestionCreateWithoutExamSetInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput | Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput[];
    upsert?: Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutExamSetInput | Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutExamSetInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyExamSetInputEnvelope;
    set?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    disconnect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    delete?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    update?: Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutExamSetInput | Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutExamSetInput[];
    updateMany?: Prisma.ExamSetQuestionUpdateManyWithWhereWithoutExamSetInput | Prisma.ExamSetQuestionUpdateManyWithWhereWithoutExamSetInput[];
    deleteMany?: Prisma.ExamSetQuestionScalarWhereInput | Prisma.ExamSetQuestionScalarWhereInput[];
};
export type ExamSetQuestionUncheckedUpdateManyWithoutExamSetNestedInput = {
    create?: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput> | Prisma.ExamSetQuestionCreateWithoutExamSetInput[] | Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput | Prisma.ExamSetQuestionCreateOrConnectWithoutExamSetInput[];
    upsert?: Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutExamSetInput | Prisma.ExamSetQuestionUpsertWithWhereUniqueWithoutExamSetInput[];
    createMany?: Prisma.ExamSetQuestionCreateManyExamSetInputEnvelope;
    set?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    disconnect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    delete?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    connect?: Prisma.ExamSetQuestionWhereUniqueInput | Prisma.ExamSetQuestionWhereUniqueInput[];
    update?: Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutExamSetInput | Prisma.ExamSetQuestionUpdateWithWhereUniqueWithoutExamSetInput[];
    updateMany?: Prisma.ExamSetQuestionUpdateManyWithWhereWithoutExamSetInput | Prisma.ExamSetQuestionUpdateManyWithWhereWithoutExamSetInput[];
    deleteMany?: Prisma.ExamSetQuestionScalarWhereInput | Prisma.ExamSetQuestionScalarWhereInput[];
};
export type ExamSetQuestionCreateWithoutQuestionInput = {
    examSet: Prisma.ExamSetCreateNestedOneWithoutQuestionsInput;
};
export type ExamSetQuestionUncheckedCreateWithoutQuestionInput = {
    examSetId: number;
};
export type ExamSetQuestionCreateOrConnectWithoutQuestionInput = {
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput>;
};
export type ExamSetQuestionCreateManyQuestionInputEnvelope = {
    data: Prisma.ExamSetQuestionCreateManyQuestionInput | Prisma.ExamSetQuestionCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type ExamSetQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamSetQuestionUpdateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedCreateWithoutQuestionInput>;
};
export type ExamSetQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateWithoutQuestionInput, Prisma.ExamSetQuestionUncheckedUpdateWithoutQuestionInput>;
};
export type ExamSetQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.ExamSetQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateManyMutationInput, Prisma.ExamSetQuestionUncheckedUpdateManyWithoutQuestionInput>;
};
export type ExamSetQuestionScalarWhereInput = {
    AND?: Prisma.ExamSetQuestionScalarWhereInput | Prisma.ExamSetQuestionScalarWhereInput[];
    OR?: Prisma.ExamSetQuestionScalarWhereInput[];
    NOT?: Prisma.ExamSetQuestionScalarWhereInput | Prisma.ExamSetQuestionScalarWhereInput[];
    examSetId?: Prisma.IntFilter<"ExamSetQuestion"> | number;
    questionId?: Prisma.IntFilter<"ExamSetQuestion"> | number;
};
export type ExamSetQuestionCreateWithoutExamSetInput = {
    question: Prisma.QuestionCreateNestedOneWithoutExamSetQuestionsInput;
};
export type ExamSetQuestionUncheckedCreateWithoutExamSetInput = {
    questionId: number;
};
export type ExamSetQuestionCreateOrConnectWithoutExamSetInput = {
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput>;
};
export type ExamSetQuestionCreateManyExamSetInputEnvelope = {
    data: Prisma.ExamSetQuestionCreateManyExamSetInput | Prisma.ExamSetQuestionCreateManyExamSetInput[];
    skipDuplicates?: boolean;
};
export type ExamSetQuestionUpsertWithWhereUniqueWithoutExamSetInput = {
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExamSetQuestionUpdateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedUpdateWithoutExamSetInput>;
    create: Prisma.XOR<Prisma.ExamSetQuestionCreateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedCreateWithoutExamSetInput>;
};
export type ExamSetQuestionUpdateWithWhereUniqueWithoutExamSetInput = {
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateWithoutExamSetInput, Prisma.ExamSetQuestionUncheckedUpdateWithoutExamSetInput>;
};
export type ExamSetQuestionUpdateManyWithWhereWithoutExamSetInput = {
    where: Prisma.ExamSetQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateManyMutationInput, Prisma.ExamSetQuestionUncheckedUpdateManyWithoutExamSetInput>;
};
export type ExamSetQuestionCreateManyQuestionInput = {
    examSetId: number;
};
export type ExamSetQuestionUpdateWithoutQuestionInput = {
    examSet?: Prisma.ExamSetUpdateOneRequiredWithoutQuestionsNestedInput;
};
export type ExamSetQuestionUncheckedUpdateWithoutQuestionInput = {
    examSetId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamSetQuestionUncheckedUpdateManyWithoutQuestionInput = {
    examSetId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamSetQuestionCreateManyExamSetInput = {
    questionId: number;
};
export type ExamSetQuestionUpdateWithoutExamSetInput = {
    question?: Prisma.QuestionUpdateOneRequiredWithoutExamSetQuestionsNestedInput;
};
export type ExamSetQuestionUncheckedUpdateWithoutExamSetInput = {
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamSetQuestionUncheckedUpdateManyWithoutExamSetInput = {
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ExamSetQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    examSetId?: boolean;
    questionId?: boolean;
    examSet?: boolean | Prisma.ExamSetDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSetQuestion"]>;
export type ExamSetQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    examSetId?: boolean;
    questionId?: boolean;
    examSet?: boolean | Prisma.ExamSetDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSetQuestion"]>;
export type ExamSetQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    examSetId?: boolean;
    questionId?: boolean;
    examSet?: boolean | Prisma.ExamSetDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSetQuestion"]>;
export type ExamSetQuestionSelectScalar = {
    examSetId?: boolean;
    questionId?: boolean;
};
export type ExamSetQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"examSetId" | "questionId", ExtArgs["result"]["examSetQuestion"]>;
export type ExamSetQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSet?: boolean | Prisma.ExamSetDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type ExamSetQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSet?: boolean | Prisma.ExamSetDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type ExamSetQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSet?: boolean | Prisma.ExamSetDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $ExamSetQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExamSetQuestion";
    objects: {
        examSet: Prisma.$ExamSetPayload<ExtArgs>;
        question: Prisma.$QuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        examSetId: number;
        questionId: number;
    }, ExtArgs["result"]["examSetQuestion"]>;
    composites: {};
};
export type ExamSetQuestionGetPayload<S extends boolean | null | undefined | ExamSetQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload, S>;
export type ExamSetQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamSetQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamSetQuestionCountAggregateInputType | true;
};
export interface ExamSetQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExamSetQuestion'];
        meta: {
            name: 'ExamSetQuestion';
        };
    };
    findUnique<T extends ExamSetQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamSetQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamSetQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamSetQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamSetQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamSetQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamSetQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, ExamSetQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamSetQuestionCreateArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamSetQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamSetQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamSetQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamSetQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamSetQuestionDeleteArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamSetQuestionUpdateArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamSetQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamSetQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamSetQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamSetQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamSetQuestionUpsertArgs>(args: Prisma.SelectSubset<T, ExamSetQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamSetQuestionClient<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamSetQuestionCountArgs>(args?: Prisma.Subset<T, ExamSetQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamSetQuestionCountAggregateOutputType> : number>;
    aggregate<T extends ExamSetQuestionAggregateArgs>(args: Prisma.Subset<T, ExamSetQuestionAggregateArgs>): Prisma.PrismaPromise<GetExamSetQuestionAggregateType<T>>;
    groupBy<T extends ExamSetQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamSetQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamSetQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamSetQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamSetQuestionFieldRefs;
}
export interface Prisma__ExamSetQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    examSet<T extends Prisma.ExamSetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamSetDefaultArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamSetQuestionFieldRefs {
    readonly examSetId: Prisma.FieldRef<"ExamSetQuestion", 'Int'>;
    readonly questionId: Prisma.FieldRef<"ExamSetQuestion", 'Int'>;
}
export type ExamSetQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    where: Prisma.ExamSetQuestionWhereUniqueInput;
};
export type ExamSetQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    where: Prisma.ExamSetQuestionWhereUniqueInput;
};
export type ExamSetQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamSetQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamSetQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamSetQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamSetQuestionCreateInput, Prisma.ExamSetQuestionUncheckedCreateInput>;
};
export type ExamSetQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamSetQuestionCreateManyInput | Prisma.ExamSetQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamSetQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    data: Prisma.ExamSetQuestionCreateManyInput | Prisma.ExamSetQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExamSetQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExamSetQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateInput, Prisma.ExamSetQuestionUncheckedUpdateInput>;
    where: Prisma.ExamSetQuestionWhereUniqueInput;
};
export type ExamSetQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateManyMutationInput, Prisma.ExamSetQuestionUncheckedUpdateManyInput>;
    where?: Prisma.ExamSetQuestionWhereInput;
    limit?: number;
};
export type ExamSetQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamSetQuestionUpdateManyMutationInput, Prisma.ExamSetQuestionUncheckedUpdateManyInput>;
    where?: Prisma.ExamSetQuestionWhereInput;
    limit?: number;
    include?: Prisma.ExamSetQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExamSetQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    where: Prisma.ExamSetQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamSetQuestionCreateInput, Prisma.ExamSetQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamSetQuestionUpdateInput, Prisma.ExamSetQuestionUncheckedUpdateInput>;
};
export type ExamSetQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
    where: Prisma.ExamSetQuestionWhereUniqueInput;
};
export type ExamSetQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetQuestionWhereInput;
    limit?: number;
};
export type ExamSetQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetQuestionSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetQuestionOmit<ExtArgs> | null;
    include?: Prisma.ExamSetQuestionInclude<ExtArgs> | null;
};
export {};
