import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type AnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$AnswerPayload>;
export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null;
    _avg: AnswerAvgAggregateOutputType | null;
    _sum: AnswerSumAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
};
export type AnswerAvgAggregateOutputType = {
    id: number | null;
    questionId: number | null;
};
export type AnswerSumAggregateOutputType = {
    id: number | null;
    questionId: number | null;
};
export type AnswerMinAggregateOutputType = {
    id: number | null;
    questionId: number | null;
    content: string | null;
    isCorrect: boolean | null;
};
export type AnswerMaxAggregateOutputType = {
    id: number | null;
    questionId: number | null;
    content: string | null;
    isCorrect: boolean | null;
};
export type AnswerCountAggregateOutputType = {
    id: number;
    questionId: number;
    content: number;
    isCorrect: number;
    _all: number;
};
export type AnswerAvgAggregateInputType = {
    id?: true;
    questionId?: true;
};
export type AnswerSumAggregateInputType = {
    id?: true;
    questionId?: true;
};
export type AnswerMinAggregateInputType = {
    id?: true;
    questionId?: true;
    content?: true;
    isCorrect?: true;
};
export type AnswerMaxAggregateInputType = {
    id?: true;
    questionId?: true;
    content?: true;
    isCorrect?: true;
};
export type AnswerCountAggregateInputType = {
    id?: true;
    questionId?: true;
    content?: true;
    isCorrect?: true;
    _all?: true;
};
export type AnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithRelationInput | Prisma.AnswerOrderByWithRelationInput[];
    cursor?: Prisma.AnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnswerCountAggregateInputType;
    _avg?: AnswerAvgAggregateInputType;
    _sum?: AnswerSumAggregateInputType;
    _min?: AnswerMinAggregateInputType;
    _max?: AnswerMaxAggregateInputType;
};
export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnswer[P]> : Prisma.GetScalarType<T[P], AggregateAnswer[P]>;
};
export type AnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
    orderBy?: Prisma.AnswerOrderByWithAggregationInput | Prisma.AnswerOrderByWithAggregationInput[];
    by: Prisma.AnswerScalarFieldEnum[] | Prisma.AnswerScalarFieldEnum;
    having?: Prisma.AnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnswerCountAggregateInputType | true;
    _avg?: AnswerAvgAggregateInputType;
    _sum?: AnswerSumAggregateInputType;
    _min?: AnswerMinAggregateInputType;
    _max?: AnswerMaxAggregateInputType;
};
export type AnswerGroupByOutputType = {
    id: number;
    questionId: number;
    content: string;
    isCorrect: boolean;
    _count: AnswerCountAggregateOutputType | null;
    _avg: AnswerAvgAggregateOutputType | null;
    _sum: AnswerSumAggregateOutputType | null;
    _min: AnswerMinAggregateOutputType | null;
    _max: AnswerMaxAggregateOutputType | null;
};
type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnswerGroupByOutputType[P]>;
}>>;
export type AnswerWhereInput = {
    AND?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    OR?: Prisma.AnswerWhereInput[];
    NOT?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    id?: Prisma.IntFilter<"Answer"> | number;
    questionId?: Prisma.IntFilter<"Answer"> | number;
    content?: Prisma.StringFilter<"Answer"> | string;
    isCorrect?: Prisma.BoolFilter<"Answer"> | boolean;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    testDetails?: Prisma.TestDetailListRelationFilter;
};
export type AnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    question?: Prisma.QuestionOrderByWithRelationInput;
    testDetails?: Prisma.TestDetailOrderByRelationAggregateInput;
};
export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    OR?: Prisma.AnswerWhereInput[];
    NOT?: Prisma.AnswerWhereInput | Prisma.AnswerWhereInput[];
    questionId?: Prisma.IntFilter<"Answer"> | number;
    content?: Prisma.StringFilter<"Answer"> | string;
    isCorrect?: Prisma.BoolFilter<"Answer"> | boolean;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
    testDetails?: Prisma.TestDetailListRelationFilter;
}, "id">;
export type AnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
    _count?: Prisma.AnswerCountOrderByAggregateInput;
    _avg?: Prisma.AnswerAvgOrderByAggregateInput;
    _max?: Prisma.AnswerMaxOrderByAggregateInput;
    _min?: Prisma.AnswerMinOrderByAggregateInput;
    _sum?: Prisma.AnswerSumOrderByAggregateInput;
};
export type AnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnswerScalarWhereWithAggregatesInput | Prisma.AnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnswerScalarWhereWithAggregatesInput | Prisma.AnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Answer"> | number;
    questionId?: Prisma.IntWithAggregatesFilter<"Answer"> | number;
    content?: Prisma.StringWithAggregatesFilter<"Answer"> | string;
    isCorrect?: Prisma.BoolWithAggregatesFilter<"Answer"> | boolean;
};
export type AnswerCreateInput = {
    content: string;
    isCorrect?: boolean;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutSelectedAnswerInput;
};
export type AnswerUncheckedCreateInput = {
    id?: number;
    questionId: number;
    content: string;
    isCorrect?: boolean;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutSelectedAnswerInput;
};
export type AnswerUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
    testDetails?: Prisma.TestDetailUpdateManyWithoutSelectedAnswerNestedInput;
};
export type AnswerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutSelectedAnswerNestedInput;
};
export type AnswerCreateManyInput = {
    id?: number;
    questionId: number;
    content: string;
    isCorrect?: boolean;
};
export type AnswerUpdateManyMutationInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnswerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnswerListRelationFilter = {
    every?: Prisma.AnswerWhereInput;
    some?: Prisma.AnswerWhereInput;
    none?: Prisma.AnswerWhereInput;
};
export type AnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type AnswerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type AnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type AnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isCorrect?: Prisma.SortOrder;
};
export type AnswerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type AnswerNullableScalarRelationFilter = {
    is?: Prisma.AnswerWhereInput | null;
    isNot?: Prisma.AnswerWhereInput | null;
};
export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
};
export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
};
export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    disconnect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    delete?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    update?: Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
};
export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput> | Prisma.AnswerCreateWithoutQuestionInput[] | Prisma.AnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutQuestionInput | Prisma.AnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.AnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    disconnect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    delete?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    connect?: Prisma.AnswerWhereUniqueInput | Prisma.AnswerWhereUniqueInput[];
    update?: Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
};
export type AnswerCreateNestedOneWithoutTestDetailsInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutTestDetailsInput, Prisma.AnswerUncheckedCreateWithoutTestDetailsInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutTestDetailsInput;
    connect?: Prisma.AnswerWhereUniqueInput;
};
export type AnswerUpdateOneWithoutTestDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.AnswerCreateWithoutTestDetailsInput, Prisma.AnswerUncheckedCreateWithoutTestDetailsInput>;
    connectOrCreate?: Prisma.AnswerCreateOrConnectWithoutTestDetailsInput;
    upsert?: Prisma.AnswerUpsertWithoutTestDetailsInput;
    disconnect?: Prisma.AnswerWhereInput | boolean;
    delete?: Prisma.AnswerWhereInput | boolean;
    connect?: Prisma.AnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnswerUpdateToOneWithWhereWithoutTestDetailsInput, Prisma.AnswerUpdateWithoutTestDetailsInput>, Prisma.AnswerUncheckedUpdateWithoutTestDetailsInput>;
};
export type AnswerCreateWithoutQuestionInput = {
    content: string;
    isCorrect?: boolean;
    testDetails?: Prisma.TestDetailCreateNestedManyWithoutSelectedAnswerInput;
};
export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number;
    content: string;
    isCorrect?: boolean;
    testDetails?: Prisma.TestDetailUncheckedCreateNestedManyWithoutSelectedAnswerInput;
};
export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput>;
};
export type AnswerCreateManyQuestionInputEnvelope = {
    data: Prisma.AnswerCreateManyQuestionInput | Prisma.AnswerCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.AnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutQuestionInput, Prisma.AnswerUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutQuestionInput, Prisma.AnswerUncheckedCreateWithoutQuestionInput>;
};
export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.AnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutQuestionInput, Prisma.AnswerUncheckedUpdateWithoutQuestionInput>;
};
export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.AnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyWithoutQuestionInput>;
};
export type AnswerScalarWhereInput = {
    AND?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
    OR?: Prisma.AnswerScalarWhereInput[];
    NOT?: Prisma.AnswerScalarWhereInput | Prisma.AnswerScalarWhereInput[];
    id?: Prisma.IntFilter<"Answer"> | number;
    questionId?: Prisma.IntFilter<"Answer"> | number;
    content?: Prisma.StringFilter<"Answer"> | string;
    isCorrect?: Prisma.BoolFilter<"Answer"> | boolean;
};
export type AnswerCreateWithoutTestDetailsInput = {
    content: string;
    isCorrect?: boolean;
    question: Prisma.QuestionCreateNestedOneWithoutAnswersInput;
};
export type AnswerUncheckedCreateWithoutTestDetailsInput = {
    id?: number;
    questionId: number;
    content: string;
    isCorrect?: boolean;
};
export type AnswerCreateOrConnectWithoutTestDetailsInput = {
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutTestDetailsInput, Prisma.AnswerUncheckedCreateWithoutTestDetailsInput>;
};
export type AnswerUpsertWithoutTestDetailsInput = {
    update: Prisma.XOR<Prisma.AnswerUpdateWithoutTestDetailsInput, Prisma.AnswerUncheckedUpdateWithoutTestDetailsInput>;
    create: Prisma.XOR<Prisma.AnswerCreateWithoutTestDetailsInput, Prisma.AnswerUncheckedCreateWithoutTestDetailsInput>;
    where?: Prisma.AnswerWhereInput;
};
export type AnswerUpdateToOneWithWhereWithoutTestDetailsInput = {
    where?: Prisma.AnswerWhereInput;
    data: Prisma.XOR<Prisma.AnswerUpdateWithoutTestDetailsInput, Prisma.AnswerUncheckedUpdateWithoutTestDetailsInput>;
};
export type AnswerUpdateWithoutTestDetailsInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    question?: Prisma.QuestionUpdateOneRequiredWithoutAnswersNestedInput;
};
export type AnswerUncheckedUpdateWithoutTestDetailsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnswerCreateManyQuestionInput = {
    id?: number;
    content: string;
    isCorrect?: boolean;
};
export type AnswerUpdateWithoutQuestionInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    testDetails?: Prisma.TestDetailUpdateManyWithoutSelectedAnswerNestedInput;
};
export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    testDetails?: Prisma.TestDetailUncheckedUpdateManyWithoutSelectedAnswerNestedInput;
};
export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    isCorrect?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type AnswerCountOutputType = {
    testDetails: number;
};
export type AnswerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    testDetails?: boolean | AnswerCountOutputTypeCountTestDetailsArgs;
};
export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerCountOutputTypeSelect<ExtArgs> | null;
};
export type AnswerCountOutputTypeCountTestDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestDetailWhereInput;
};
export type AnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    content?: boolean;
    isCorrect?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    testDetails?: boolean | Prisma.Answer$testDetailsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnswerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answer"]>;
export type AnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    content?: boolean;
    isCorrect?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answer"]>;
export type AnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    questionId?: boolean;
    content?: boolean;
    isCorrect?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["answer"]>;
export type AnswerSelectScalar = {
    id?: boolean;
    questionId?: boolean;
    content?: boolean;
    isCorrect?: boolean;
};
export type AnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "questionId" | "content" | "isCorrect", ExtArgs["result"]["answer"]>;
export type AnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
    testDetails?: boolean | Prisma.Answer$testDetailsArgs<ExtArgs>;
    _count?: boolean | Prisma.AnswerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $AnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Answer";
    objects: {
        question: Prisma.$QuestionPayload<ExtArgs>;
        testDetails: Prisma.$TestDetailPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        questionId: number;
        content: string;
        isCorrect: boolean;
    }, ExtArgs["result"]["answer"]>;
    composites: {};
};
export type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnswerPayload, S>;
export type AnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnswerCountAggregateInputType | true;
};
export interface AnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Answer'];
        meta: {
            name: 'Answer';
        };
    };
    findUnique<T extends AnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnswerFindManyArgs>(args?: Prisma.SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnswerCreateArgs>(args: Prisma.SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnswerDeleteArgs>(args: Prisma.SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnswerUpdateArgs>(args: Prisma.SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnswerUpsertArgs>(args: Prisma.SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__AnswerClient<runtime.Types.Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnswerCountArgs>(args?: Prisma.Subset<T, AnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnswerCountAggregateOutputType> : number>;
    aggregate<T extends AnswerAggregateArgs>(args: Prisma.Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>;
    groupBy<T extends AnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: AnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnswerFieldRefs;
}
export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    testDetails<T extends Prisma.Answer$testDetailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Answer$testDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnswerFieldRefs {
    readonly id: Prisma.FieldRef<"Answer", 'Int'>;
    readonly questionId: Prisma.FieldRef<"Answer", 'Int'>;
    readonly content: Prisma.FieldRef<"Answer", 'String'>;
    readonly isCorrect: Prisma.FieldRef<"Answer", 'Boolean'>;
}
export type AnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerCreateInput, Prisma.AnswerUncheckedCreateInput>;
};
export type AnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnswerCreateManyInput | Prisma.AnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    data: Prisma.AnswerCreateManyInput | Prisma.AnswerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerUpdateInput, Prisma.AnswerUncheckedUpdateInput>;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyInput>;
    where?: Prisma.AnswerWhereInput;
    limit?: number;
};
export type AnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnswerUpdateManyMutationInput, Prisma.AnswerUncheckedUpdateManyInput>;
    where?: Prisma.AnswerWhereInput;
    limit?: number;
    include?: Prisma.AnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnswerCreateInput, Prisma.AnswerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnswerUpdateInput, Prisma.AnswerUncheckedUpdateInput>;
};
export type AnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
    where: Prisma.AnswerWhereUniqueInput;
};
export type AnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnswerWhereInput;
    limit?: number;
};
export type Answer$testDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnswerSelect<ExtArgs> | null;
    omit?: Prisma.AnswerOmit<ExtArgs> | null;
    include?: Prisma.AnswerInclude<ExtArgs> | null;
};
export {};
