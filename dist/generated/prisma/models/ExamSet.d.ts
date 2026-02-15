import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type ExamSetModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamSetPayload>;
export type AggregateExamSet = {
    _count: ExamSetCountAggregateOutputType | null;
    _avg: ExamSetAvgAggregateOutputType | null;
    _sum: ExamSetSumAggregateOutputType | null;
    _min: ExamSetMinAggregateOutputType | null;
    _max: ExamSetMaxAggregateOutputType | null;
};
export type ExamSetAvgAggregateOutputType = {
    id: number | null;
};
export type ExamSetSumAggregateOutputType = {
    id: number | null;
};
export type ExamSetMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    licenseType: $Enums.LicenseType | null;
    description: string | null;
};
export type ExamSetMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    licenseType: $Enums.LicenseType | null;
    description: string | null;
};
export type ExamSetCountAggregateOutputType = {
    id: number;
    name: number;
    licenseType: number;
    description: number;
    _all: number;
};
export type ExamSetAvgAggregateInputType = {
    id?: true;
};
export type ExamSetSumAggregateInputType = {
    id?: true;
};
export type ExamSetMinAggregateInputType = {
    id?: true;
    name?: true;
    licenseType?: true;
    description?: true;
};
export type ExamSetMaxAggregateInputType = {
    id?: true;
    name?: true;
    licenseType?: true;
    description?: true;
};
export type ExamSetCountAggregateInputType = {
    id?: true;
    name?: true;
    licenseType?: true;
    description?: true;
    _all?: true;
};
export type ExamSetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetWhereInput;
    orderBy?: Prisma.ExamSetOrderByWithRelationInput | Prisma.ExamSetOrderByWithRelationInput[];
    cursor?: Prisma.ExamSetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamSetCountAggregateInputType;
    _avg?: ExamSetAvgAggregateInputType;
    _sum?: ExamSetSumAggregateInputType;
    _min?: ExamSetMinAggregateInputType;
    _max?: ExamSetMaxAggregateInputType;
};
export type GetExamSetAggregateType<T extends ExamSetAggregateArgs> = {
    [P in keyof T & keyof AggregateExamSet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExamSet[P]> : Prisma.GetScalarType<T[P], AggregateExamSet[P]>;
};
export type ExamSetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetWhereInput;
    orderBy?: Prisma.ExamSetOrderByWithAggregationInput | Prisma.ExamSetOrderByWithAggregationInput[];
    by: Prisma.ExamSetScalarFieldEnum[] | Prisma.ExamSetScalarFieldEnum;
    having?: Prisma.ExamSetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamSetCountAggregateInputType | true;
    _avg?: ExamSetAvgAggregateInputType;
    _sum?: ExamSetSumAggregateInputType;
    _min?: ExamSetMinAggregateInputType;
    _max?: ExamSetMaxAggregateInputType;
};
export type ExamSetGroupByOutputType = {
    id: number;
    name: string;
    licenseType: $Enums.LicenseType;
    description: string | null;
    _count: ExamSetCountAggregateOutputType | null;
    _avg: ExamSetAvgAggregateOutputType | null;
    _sum: ExamSetSumAggregateOutputType | null;
    _min: ExamSetMinAggregateOutputType | null;
    _max: ExamSetMaxAggregateOutputType | null;
};
type GetExamSetGroupByPayload<T extends ExamSetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamSetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamSetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamSetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamSetGroupByOutputType[P]>;
}>>;
export type ExamSetWhereInput = {
    AND?: Prisma.ExamSetWhereInput | Prisma.ExamSetWhereInput[];
    OR?: Prisma.ExamSetWhereInput[];
    NOT?: Prisma.ExamSetWhereInput | Prisma.ExamSetWhereInput[];
    id?: Prisma.IntFilter<"ExamSet"> | number;
    name?: Prisma.StringFilter<"ExamSet"> | string;
    licenseType?: Prisma.EnumLicenseTypeFilter<"ExamSet"> | $Enums.LicenseType;
    description?: Prisma.StringNullableFilter<"ExamSet"> | string | null;
    questions?: Prisma.ExamSetQuestionListRelationFilter;
    testHistory?: Prisma.TestHistoryListRelationFilter;
};
export type ExamSetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    questions?: Prisma.ExamSetQuestionOrderByRelationAggregateInput;
    testHistory?: Prisma.TestHistoryOrderByRelationAggregateInput;
};
export type ExamSetWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ExamSetWhereInput | Prisma.ExamSetWhereInput[];
    OR?: Prisma.ExamSetWhereInput[];
    NOT?: Prisma.ExamSetWhereInput | Prisma.ExamSetWhereInput[];
    name?: Prisma.StringFilter<"ExamSet"> | string;
    licenseType?: Prisma.EnumLicenseTypeFilter<"ExamSet"> | $Enums.LicenseType;
    description?: Prisma.StringNullableFilter<"ExamSet"> | string | null;
    questions?: Prisma.ExamSetQuestionListRelationFilter;
    testHistory?: Prisma.TestHistoryListRelationFilter;
}, "id">;
export type ExamSetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ExamSetCountOrderByAggregateInput;
    _avg?: Prisma.ExamSetAvgOrderByAggregateInput;
    _max?: Prisma.ExamSetMaxOrderByAggregateInput;
    _min?: Prisma.ExamSetMinOrderByAggregateInput;
    _sum?: Prisma.ExamSetSumOrderByAggregateInput;
};
export type ExamSetScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamSetScalarWhereWithAggregatesInput | Prisma.ExamSetScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamSetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamSetScalarWhereWithAggregatesInput | Prisma.ExamSetScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ExamSet"> | number;
    name?: Prisma.StringWithAggregatesFilter<"ExamSet"> | string;
    licenseType?: Prisma.EnumLicenseTypeWithAggregatesFilter<"ExamSet"> | $Enums.LicenseType;
    description?: Prisma.StringNullableWithAggregatesFilter<"ExamSet"> | string | null;
};
export type ExamSetCreateInput = {
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
    questions?: Prisma.ExamSetQuestionCreateNestedManyWithoutExamSetInput;
    testHistory?: Prisma.TestHistoryCreateNestedManyWithoutExamSetInput;
};
export type ExamSetUncheckedCreateInput = {
    id?: number;
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
    questions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutExamSetInput;
    testHistory?: Prisma.TestHistoryUncheckedCreateNestedManyWithoutExamSetInput;
};
export type ExamSetUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.ExamSetQuestionUpdateManyWithoutExamSetNestedInput;
    testHistory?: Prisma.TestHistoryUpdateManyWithoutExamSetNestedInput;
};
export type ExamSetUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutExamSetNestedInput;
    testHistory?: Prisma.TestHistoryUncheckedUpdateManyWithoutExamSetNestedInput;
};
export type ExamSetCreateManyInput = {
    id?: number;
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
};
export type ExamSetUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExamSetUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ExamSetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ExamSetAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ExamSetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ExamSetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ExamSetSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ExamSetScalarRelationFilter = {
    is?: Prisma.ExamSetWhereInput;
    isNot?: Prisma.ExamSetWhereInput;
};
export type ExamSetNullableScalarRelationFilter = {
    is?: Prisma.ExamSetWhereInput | null;
    isNot?: Prisma.ExamSetWhereInput | null;
};
export type EnumLicenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseType;
};
export type ExamSetCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.ExamSetCreateWithoutQuestionsInput, Prisma.ExamSetUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.ExamSetCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.ExamSetWhereUniqueInput;
};
export type ExamSetUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.ExamSetCreateWithoutQuestionsInput, Prisma.ExamSetUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.ExamSetCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.ExamSetUpsertWithoutQuestionsInput;
    connect?: Prisma.ExamSetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamSetUpdateToOneWithWhereWithoutQuestionsInput, Prisma.ExamSetUpdateWithoutQuestionsInput>, Prisma.ExamSetUncheckedUpdateWithoutQuestionsInput>;
};
export type ExamSetCreateNestedOneWithoutTestHistoryInput = {
    create?: Prisma.XOR<Prisma.ExamSetCreateWithoutTestHistoryInput, Prisma.ExamSetUncheckedCreateWithoutTestHistoryInput>;
    connectOrCreate?: Prisma.ExamSetCreateOrConnectWithoutTestHistoryInput;
    connect?: Prisma.ExamSetWhereUniqueInput;
};
export type ExamSetUpdateOneWithoutTestHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.ExamSetCreateWithoutTestHistoryInput, Prisma.ExamSetUncheckedCreateWithoutTestHistoryInput>;
    connectOrCreate?: Prisma.ExamSetCreateOrConnectWithoutTestHistoryInput;
    upsert?: Prisma.ExamSetUpsertWithoutTestHistoryInput;
    disconnect?: Prisma.ExamSetWhereInput | boolean;
    delete?: Prisma.ExamSetWhereInput | boolean;
    connect?: Prisma.ExamSetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ExamSetUpdateToOneWithWhereWithoutTestHistoryInput, Prisma.ExamSetUpdateWithoutTestHistoryInput>, Prisma.ExamSetUncheckedUpdateWithoutTestHistoryInput>;
};
export type ExamSetCreateWithoutQuestionsInput = {
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
    testHistory?: Prisma.TestHistoryCreateNestedManyWithoutExamSetInput;
};
export type ExamSetUncheckedCreateWithoutQuestionsInput = {
    id?: number;
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
    testHistory?: Prisma.TestHistoryUncheckedCreateNestedManyWithoutExamSetInput;
};
export type ExamSetCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.ExamSetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamSetCreateWithoutQuestionsInput, Prisma.ExamSetUncheckedCreateWithoutQuestionsInput>;
};
export type ExamSetUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.ExamSetUpdateWithoutQuestionsInput, Prisma.ExamSetUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.ExamSetCreateWithoutQuestionsInput, Prisma.ExamSetUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.ExamSetWhereInput;
};
export type ExamSetUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.ExamSetWhereInput;
    data: Prisma.XOR<Prisma.ExamSetUpdateWithoutQuestionsInput, Prisma.ExamSetUncheckedUpdateWithoutQuestionsInput>;
};
export type ExamSetUpdateWithoutQuestionsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    testHistory?: Prisma.TestHistoryUpdateManyWithoutExamSetNestedInput;
};
export type ExamSetUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    testHistory?: Prisma.TestHistoryUncheckedUpdateManyWithoutExamSetNestedInput;
};
export type ExamSetCreateWithoutTestHistoryInput = {
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
    questions?: Prisma.ExamSetQuestionCreateNestedManyWithoutExamSetInput;
};
export type ExamSetUncheckedCreateWithoutTestHistoryInput = {
    id?: number;
    name: string;
    licenseType: $Enums.LicenseType;
    description?: string | null;
    questions?: Prisma.ExamSetQuestionUncheckedCreateNestedManyWithoutExamSetInput;
};
export type ExamSetCreateOrConnectWithoutTestHistoryInput = {
    where: Prisma.ExamSetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamSetCreateWithoutTestHistoryInput, Prisma.ExamSetUncheckedCreateWithoutTestHistoryInput>;
};
export type ExamSetUpsertWithoutTestHistoryInput = {
    update: Prisma.XOR<Prisma.ExamSetUpdateWithoutTestHistoryInput, Prisma.ExamSetUncheckedUpdateWithoutTestHistoryInput>;
    create: Prisma.XOR<Prisma.ExamSetCreateWithoutTestHistoryInput, Prisma.ExamSetUncheckedCreateWithoutTestHistoryInput>;
    where?: Prisma.ExamSetWhereInput;
};
export type ExamSetUpdateToOneWithWhereWithoutTestHistoryInput = {
    where?: Prisma.ExamSetWhereInput;
    data: Prisma.XOR<Prisma.ExamSetUpdateWithoutTestHistoryInput, Prisma.ExamSetUncheckedUpdateWithoutTestHistoryInput>;
};
export type ExamSetUpdateWithoutTestHistoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.ExamSetQuestionUpdateManyWithoutExamSetNestedInput;
};
export type ExamSetUncheckedUpdateWithoutTestHistoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.ExamSetQuestionUncheckedUpdateManyWithoutExamSetNestedInput;
};
export type ExamSetCountOutputType = {
    questions: number;
    testHistory: number;
};
export type ExamSetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | ExamSetCountOutputTypeCountQuestionsArgs;
    testHistory?: boolean | ExamSetCountOutputTypeCountTestHistoryArgs;
};
export type ExamSetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetCountOutputTypeSelect<ExtArgs> | null;
};
export type ExamSetCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetQuestionWhereInput;
};
export type ExamSetCountOutputTypeCountTestHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestHistoryWhereInput;
};
export type ExamSetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    licenseType?: boolean;
    description?: boolean;
    questions?: boolean | Prisma.ExamSet$questionsArgs<ExtArgs>;
    testHistory?: boolean | Prisma.ExamSet$testHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamSetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examSet"]>;
export type ExamSetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    licenseType?: boolean;
    description?: boolean;
}, ExtArgs["result"]["examSet"]>;
export type ExamSetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    licenseType?: boolean;
    description?: boolean;
}, ExtArgs["result"]["examSet"]>;
export type ExamSetSelectScalar = {
    id?: boolean;
    name?: boolean;
    licenseType?: boolean;
    description?: boolean;
};
export type ExamSetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "licenseType" | "description", ExtArgs["result"]["examSet"]>;
export type ExamSetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | Prisma.ExamSet$questionsArgs<ExtArgs>;
    testHistory?: boolean | Prisma.ExamSet$testHistoryArgs<ExtArgs>;
    _count?: boolean | Prisma.ExamSetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ExamSetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ExamSetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ExamSetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExamSet";
    objects: {
        questions: Prisma.$ExamSetQuestionPayload<ExtArgs>[];
        testHistory: Prisma.$TestHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        licenseType: $Enums.LicenseType;
        description: string | null;
    }, ExtArgs["result"]["examSet"]>;
    composites: {};
};
export type ExamSetGetPayload<S extends boolean | null | undefined | ExamSetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamSetPayload, S>;
export type ExamSetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamSetCountAggregateInputType | true;
};
export interface ExamSetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExamSet'];
        meta: {
            name: 'ExamSet';
        };
    };
    findUnique<T extends ExamSetFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamSetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamSetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamSetFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamSetFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamSetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamSetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamSetFindManyArgs>(args?: Prisma.SelectSubset<T, ExamSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamSetCreateArgs>(args: Prisma.SelectSubset<T, ExamSetCreateArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamSetCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamSetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamSetDeleteArgs>(args: Prisma.SelectSubset<T, ExamSetDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamSetUpdateArgs>(args: Prisma.SelectSubset<T, ExamSetUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamSetDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamSetUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamSetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamSetUpsertArgs>(args: Prisma.SelectSubset<T, ExamSetUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamSetCountArgs>(args?: Prisma.Subset<T, ExamSetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamSetCountAggregateOutputType> : number>;
    aggregate<T extends ExamSetAggregateArgs>(args: Prisma.Subset<T, ExamSetAggregateArgs>): Prisma.PrismaPromise<GetExamSetAggregateType<T>>;
    groupBy<T extends ExamSetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamSetGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamSetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamSetFieldRefs;
}
export interface Prisma__ExamSetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    questions<T extends Prisma.ExamSet$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamSet$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamSetQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    testHistory<T extends Prisma.ExamSet$testHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExamSet$testHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamSetFieldRefs {
    readonly id: Prisma.FieldRef<"ExamSet", 'Int'>;
    readonly name: Prisma.FieldRef<"ExamSet", 'String'>;
    readonly licenseType: Prisma.FieldRef<"ExamSet", 'LicenseType'>;
    readonly description: Prisma.FieldRef<"ExamSet", 'String'>;
}
export type ExamSetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where: Prisma.ExamSetWhereUniqueInput;
};
export type ExamSetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where: Prisma.ExamSetWhereUniqueInput;
};
export type ExamSetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where?: Prisma.ExamSetWhereInput;
    orderBy?: Prisma.ExamSetOrderByWithRelationInput | Prisma.ExamSetOrderByWithRelationInput[];
    cursor?: Prisma.ExamSetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamSetScalarFieldEnum | Prisma.ExamSetScalarFieldEnum[];
};
export type ExamSetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where?: Prisma.ExamSetWhereInput;
    orderBy?: Prisma.ExamSetOrderByWithRelationInput | Prisma.ExamSetOrderByWithRelationInput[];
    cursor?: Prisma.ExamSetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamSetScalarFieldEnum | Prisma.ExamSetScalarFieldEnum[];
};
export type ExamSetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where?: Prisma.ExamSetWhereInput;
    orderBy?: Prisma.ExamSetOrderByWithRelationInput | Prisma.ExamSetOrderByWithRelationInput[];
    cursor?: Prisma.ExamSetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamSetScalarFieldEnum | Prisma.ExamSetScalarFieldEnum[];
};
export type ExamSetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamSetCreateInput, Prisma.ExamSetUncheckedCreateInput>;
};
export type ExamSetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamSetCreateManyInput | Prisma.ExamSetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamSetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    data: Prisma.ExamSetCreateManyInput | Prisma.ExamSetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamSetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamSetUpdateInput, Prisma.ExamSetUncheckedUpdateInput>;
    where: Prisma.ExamSetWhereUniqueInput;
};
export type ExamSetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamSetUpdateManyMutationInput, Prisma.ExamSetUncheckedUpdateManyInput>;
    where?: Prisma.ExamSetWhereInput;
    limit?: number;
};
export type ExamSetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamSetUpdateManyMutationInput, Prisma.ExamSetUncheckedUpdateManyInput>;
    where?: Prisma.ExamSetWhereInput;
    limit?: number;
};
export type ExamSetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where: Prisma.ExamSetWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamSetCreateInput, Prisma.ExamSetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamSetUpdateInput, Prisma.ExamSetUncheckedUpdateInput>;
};
export type ExamSetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where: Prisma.ExamSetWhereUniqueInput;
};
export type ExamSetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamSetWhereInput;
    limit?: number;
};
export type ExamSet$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ExamSet$testHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    where?: Prisma.TestHistoryWhereInput;
    orderBy?: Prisma.TestHistoryOrderByWithRelationInput | Prisma.TestHistoryOrderByWithRelationInput[];
    cursor?: Prisma.TestHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestHistoryScalarFieldEnum | Prisma.TestHistoryScalarFieldEnum[];
};
export type ExamSetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
};
export {};
