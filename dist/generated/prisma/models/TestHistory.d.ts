import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type TestHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$TestHistoryPayload>;
export type AggregateTestHistory = {
    _count: TestHistoryCountAggregateOutputType | null;
    _avg: TestHistoryAvgAggregateOutputType | null;
    _sum: TestHistorySumAggregateOutputType | null;
    _min: TestHistoryMinAggregateOutputType | null;
    _max: TestHistoryMaxAggregateOutputType | null;
};
export type TestHistoryAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    examSetId: number | null;
    score: number | null;
    totalQuestions: number | null;
    durationSeconds: number | null;
};
export type TestHistorySumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    examSetId: number | null;
    score: number | null;
    totalQuestions: number | null;
    durationSeconds: number | null;
};
export type TestHistoryMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    examSetId: number | null;
    licenseType: $Enums.LicenseType | null;
    score: number | null;
    totalQuestions: number | null;
    status: $Enums.TestStatus | null;
    isParalysisFailed: boolean | null;
    durationSeconds: number | null;
    createdAt: Date | null;
};
export type TestHistoryMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    examSetId: number | null;
    licenseType: $Enums.LicenseType | null;
    score: number | null;
    totalQuestions: number | null;
    status: $Enums.TestStatus | null;
    isParalysisFailed: boolean | null;
    durationSeconds: number | null;
    createdAt: Date | null;
};
export type TestHistoryCountAggregateOutputType = {
    id: number;
    userId: number;
    examSetId: number;
    licenseType: number;
    score: number;
    totalQuestions: number;
    status: number;
    isParalysisFailed: number;
    durationSeconds: number;
    createdAt: number;
    _all: number;
};
export type TestHistoryAvgAggregateInputType = {
    id?: true;
    userId?: true;
    examSetId?: true;
    score?: true;
    totalQuestions?: true;
    durationSeconds?: true;
};
export type TestHistorySumAggregateInputType = {
    id?: true;
    userId?: true;
    examSetId?: true;
    score?: true;
    totalQuestions?: true;
    durationSeconds?: true;
};
export type TestHistoryMinAggregateInputType = {
    id?: true;
    userId?: true;
    examSetId?: true;
    licenseType?: true;
    score?: true;
    totalQuestions?: true;
    status?: true;
    isParalysisFailed?: true;
    durationSeconds?: true;
    createdAt?: true;
};
export type TestHistoryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    examSetId?: true;
    licenseType?: true;
    score?: true;
    totalQuestions?: true;
    status?: true;
    isParalysisFailed?: true;
    durationSeconds?: true;
    createdAt?: true;
};
export type TestHistoryCountAggregateInputType = {
    id?: true;
    userId?: true;
    examSetId?: true;
    licenseType?: true;
    score?: true;
    totalQuestions?: true;
    status?: true;
    isParalysisFailed?: true;
    durationSeconds?: true;
    createdAt?: true;
    _all?: true;
};
export type TestHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestHistoryWhereInput;
    orderBy?: Prisma.TestHistoryOrderByWithRelationInput | Prisma.TestHistoryOrderByWithRelationInput[];
    cursor?: Prisma.TestHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestHistoryCountAggregateInputType;
    _avg?: TestHistoryAvgAggregateInputType;
    _sum?: TestHistorySumAggregateInputType;
    _min?: TestHistoryMinAggregateInputType;
    _max?: TestHistoryMaxAggregateInputType;
};
export type GetTestHistoryAggregateType<T extends TestHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateTestHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestHistory[P]> : Prisma.GetScalarType<T[P], AggregateTestHistory[P]>;
};
export type TestHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestHistoryWhereInput;
    orderBy?: Prisma.TestHistoryOrderByWithAggregationInput | Prisma.TestHistoryOrderByWithAggregationInput[];
    by: Prisma.TestHistoryScalarFieldEnum[] | Prisma.TestHistoryScalarFieldEnum;
    having?: Prisma.TestHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestHistoryCountAggregateInputType | true;
    _avg?: TestHistoryAvgAggregateInputType;
    _sum?: TestHistorySumAggregateInputType;
    _min?: TestHistoryMinAggregateInputType;
    _max?: TestHistoryMaxAggregateInputType;
};
export type TestHistoryGroupByOutputType = {
    id: number;
    userId: number;
    examSetId: number | null;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed: boolean;
    durationSeconds: number;
    createdAt: Date;
    _count: TestHistoryCountAggregateOutputType | null;
    _avg: TestHistoryAvgAggregateOutputType | null;
    _sum: TestHistorySumAggregateOutputType | null;
    _min: TestHistoryMinAggregateOutputType | null;
    _max: TestHistoryMaxAggregateOutputType | null;
};
type GetTestHistoryGroupByPayload<T extends TestHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestHistoryGroupByOutputType[P]>;
}>>;
export type TestHistoryWhereInput = {
    AND?: Prisma.TestHistoryWhereInput | Prisma.TestHistoryWhereInput[];
    OR?: Prisma.TestHistoryWhereInput[];
    NOT?: Prisma.TestHistoryWhereInput | Prisma.TestHistoryWhereInput[];
    id?: Prisma.IntFilter<"TestHistory"> | number;
    userId?: Prisma.IntFilter<"TestHistory"> | number;
    examSetId?: Prisma.IntNullableFilter<"TestHistory"> | number | null;
    licenseType?: Prisma.EnumLicenseTypeFilter<"TestHistory"> | $Enums.LicenseType;
    score?: Prisma.IntFilter<"TestHistory"> | number;
    totalQuestions?: Prisma.IntFilter<"TestHistory"> | number;
    status?: Prisma.EnumTestStatusFilter<"TestHistory"> | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFilter<"TestHistory"> | boolean;
    durationSeconds?: Prisma.IntFilter<"TestHistory"> | number;
    createdAt?: Prisma.DateTimeFilter<"TestHistory"> | Date | string;
    examSet?: Prisma.XOR<Prisma.ExamSetNullableScalarRelationFilter, Prisma.ExamSetWhereInput> | null;
    details?: Prisma.TestDetailListRelationFilter;
};
export type TestHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrderInput | Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isParalysisFailed?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    examSet?: Prisma.ExamSetOrderByWithRelationInput;
    details?: Prisma.TestDetailOrderByRelationAggregateInput;
};
export type TestHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TestHistoryWhereInput | Prisma.TestHistoryWhereInput[];
    OR?: Prisma.TestHistoryWhereInput[];
    NOT?: Prisma.TestHistoryWhereInput | Prisma.TestHistoryWhereInput[];
    userId?: Prisma.IntFilter<"TestHistory"> | number;
    examSetId?: Prisma.IntNullableFilter<"TestHistory"> | number | null;
    licenseType?: Prisma.EnumLicenseTypeFilter<"TestHistory"> | $Enums.LicenseType;
    score?: Prisma.IntFilter<"TestHistory"> | number;
    totalQuestions?: Prisma.IntFilter<"TestHistory"> | number;
    status?: Prisma.EnumTestStatusFilter<"TestHistory"> | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFilter<"TestHistory"> | boolean;
    durationSeconds?: Prisma.IntFilter<"TestHistory"> | number;
    createdAt?: Prisma.DateTimeFilter<"TestHistory"> | Date | string;
    examSet?: Prisma.XOR<Prisma.ExamSetNullableScalarRelationFilter, Prisma.ExamSetWhereInput> | null;
    details?: Prisma.TestDetailListRelationFilter;
}, "id">;
export type TestHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrderInput | Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isParalysisFailed?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TestHistoryCountOrderByAggregateInput;
    _avg?: Prisma.TestHistoryAvgOrderByAggregateInput;
    _max?: Prisma.TestHistoryMaxOrderByAggregateInput;
    _min?: Prisma.TestHistoryMinOrderByAggregateInput;
    _sum?: Prisma.TestHistorySumOrderByAggregateInput;
};
export type TestHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestHistoryScalarWhereWithAggregatesInput | Prisma.TestHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestHistoryScalarWhereWithAggregatesInput | Prisma.TestHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TestHistory"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"TestHistory"> | number;
    examSetId?: Prisma.IntNullableWithAggregatesFilter<"TestHistory"> | number | null;
    licenseType?: Prisma.EnumLicenseTypeWithAggregatesFilter<"TestHistory"> | $Enums.LicenseType;
    score?: Prisma.IntWithAggregatesFilter<"TestHistory"> | number;
    totalQuestions?: Prisma.IntWithAggregatesFilter<"TestHistory"> | number;
    status?: Prisma.EnumTestStatusWithAggregatesFilter<"TestHistory"> | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolWithAggregatesFilter<"TestHistory"> | boolean;
    durationSeconds?: Prisma.IntWithAggregatesFilter<"TestHistory"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TestHistory"> | Date | string;
};
export type TestHistoryCreateInput = {
    userId: number;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
    examSet?: Prisma.ExamSetCreateNestedOneWithoutTestHistoryInput;
    details?: Prisma.TestDetailCreateNestedManyWithoutHistoryInput;
};
export type TestHistoryUncheckedCreateInput = {
    id?: number;
    userId: number;
    examSetId?: number | null;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
    details?: Prisma.TestDetailUncheckedCreateNestedManyWithoutHistoryInput;
};
export type TestHistoryUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSet?: Prisma.ExamSetUpdateOneWithoutTestHistoryNestedInput;
    details?: Prisma.TestDetailUpdateManyWithoutHistoryNestedInput;
};
export type TestHistoryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    examSetId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.TestDetailUncheckedUpdateManyWithoutHistoryNestedInput;
};
export type TestHistoryCreateManyInput = {
    id?: number;
    userId: number;
    examSetId?: number | null;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
};
export type TestHistoryUpdateManyMutationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestHistoryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    examSetId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestHistoryListRelationFilter = {
    every?: Prisma.TestHistoryWhereInput;
    some?: Prisma.TestHistoryWhereInput;
    none?: Prisma.TestHistoryWhereInput;
};
export type TestHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TestHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isParalysisFailed?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestHistoryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
};
export type TestHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isParalysisFailed?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    isParalysisFailed?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestHistorySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    examSetId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    totalQuestions?: Prisma.SortOrder;
    durationSeconds?: Prisma.SortOrder;
};
export type TestHistoryScalarRelationFilter = {
    is?: Prisma.TestHistoryWhereInput;
    isNot?: Prisma.TestHistoryWhereInput;
};
export type TestHistoryCreateNestedManyWithoutExamSetInput = {
    create?: Prisma.XOR<Prisma.TestHistoryCreateWithoutExamSetInput, Prisma.TestHistoryUncheckedCreateWithoutExamSetInput> | Prisma.TestHistoryCreateWithoutExamSetInput[] | Prisma.TestHistoryUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.TestHistoryCreateOrConnectWithoutExamSetInput | Prisma.TestHistoryCreateOrConnectWithoutExamSetInput[];
    createMany?: Prisma.TestHistoryCreateManyExamSetInputEnvelope;
    connect?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
};
export type TestHistoryUncheckedCreateNestedManyWithoutExamSetInput = {
    create?: Prisma.XOR<Prisma.TestHistoryCreateWithoutExamSetInput, Prisma.TestHistoryUncheckedCreateWithoutExamSetInput> | Prisma.TestHistoryCreateWithoutExamSetInput[] | Prisma.TestHistoryUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.TestHistoryCreateOrConnectWithoutExamSetInput | Prisma.TestHistoryCreateOrConnectWithoutExamSetInput[];
    createMany?: Prisma.TestHistoryCreateManyExamSetInputEnvelope;
    connect?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
};
export type TestHistoryUpdateManyWithoutExamSetNestedInput = {
    create?: Prisma.XOR<Prisma.TestHistoryCreateWithoutExamSetInput, Prisma.TestHistoryUncheckedCreateWithoutExamSetInput> | Prisma.TestHistoryCreateWithoutExamSetInput[] | Prisma.TestHistoryUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.TestHistoryCreateOrConnectWithoutExamSetInput | Prisma.TestHistoryCreateOrConnectWithoutExamSetInput[];
    upsert?: Prisma.TestHistoryUpsertWithWhereUniqueWithoutExamSetInput | Prisma.TestHistoryUpsertWithWhereUniqueWithoutExamSetInput[];
    createMany?: Prisma.TestHistoryCreateManyExamSetInputEnvelope;
    set?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    disconnect?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    delete?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    connect?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    update?: Prisma.TestHistoryUpdateWithWhereUniqueWithoutExamSetInput | Prisma.TestHistoryUpdateWithWhereUniqueWithoutExamSetInput[];
    updateMany?: Prisma.TestHistoryUpdateManyWithWhereWithoutExamSetInput | Prisma.TestHistoryUpdateManyWithWhereWithoutExamSetInput[];
    deleteMany?: Prisma.TestHistoryScalarWhereInput | Prisma.TestHistoryScalarWhereInput[];
};
export type TestHistoryUncheckedUpdateManyWithoutExamSetNestedInput = {
    create?: Prisma.XOR<Prisma.TestHistoryCreateWithoutExamSetInput, Prisma.TestHistoryUncheckedCreateWithoutExamSetInput> | Prisma.TestHistoryCreateWithoutExamSetInput[] | Prisma.TestHistoryUncheckedCreateWithoutExamSetInput[];
    connectOrCreate?: Prisma.TestHistoryCreateOrConnectWithoutExamSetInput | Prisma.TestHistoryCreateOrConnectWithoutExamSetInput[];
    upsert?: Prisma.TestHistoryUpsertWithWhereUniqueWithoutExamSetInput | Prisma.TestHistoryUpsertWithWhereUniqueWithoutExamSetInput[];
    createMany?: Prisma.TestHistoryCreateManyExamSetInputEnvelope;
    set?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    disconnect?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    delete?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    connect?: Prisma.TestHistoryWhereUniqueInput | Prisma.TestHistoryWhereUniqueInput[];
    update?: Prisma.TestHistoryUpdateWithWhereUniqueWithoutExamSetInput | Prisma.TestHistoryUpdateWithWhereUniqueWithoutExamSetInput[];
    updateMany?: Prisma.TestHistoryUpdateManyWithWhereWithoutExamSetInput | Prisma.TestHistoryUpdateManyWithWhereWithoutExamSetInput[];
    deleteMany?: Prisma.TestHistoryScalarWhereInput | Prisma.TestHistoryScalarWhereInput[];
};
export type EnumTestStatusFieldUpdateOperationsInput = {
    set?: $Enums.TestStatus;
};
export type TestHistoryCreateNestedOneWithoutDetailsInput = {
    create?: Prisma.XOR<Prisma.TestHistoryCreateWithoutDetailsInput, Prisma.TestHistoryUncheckedCreateWithoutDetailsInput>;
    connectOrCreate?: Prisma.TestHistoryCreateOrConnectWithoutDetailsInput;
    connect?: Prisma.TestHistoryWhereUniqueInput;
};
export type TestHistoryUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: Prisma.XOR<Prisma.TestHistoryCreateWithoutDetailsInput, Prisma.TestHistoryUncheckedCreateWithoutDetailsInput>;
    connectOrCreate?: Prisma.TestHistoryCreateOrConnectWithoutDetailsInput;
    upsert?: Prisma.TestHistoryUpsertWithoutDetailsInput;
    connect?: Prisma.TestHistoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TestHistoryUpdateToOneWithWhereWithoutDetailsInput, Prisma.TestHistoryUpdateWithoutDetailsInput>, Prisma.TestHistoryUncheckedUpdateWithoutDetailsInput>;
};
export type TestHistoryCreateWithoutExamSetInput = {
    userId: number;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
    details?: Prisma.TestDetailCreateNestedManyWithoutHistoryInput;
};
export type TestHistoryUncheckedCreateWithoutExamSetInput = {
    id?: number;
    userId: number;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
    details?: Prisma.TestDetailUncheckedCreateNestedManyWithoutHistoryInput;
};
export type TestHistoryCreateOrConnectWithoutExamSetInput = {
    where: Prisma.TestHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestHistoryCreateWithoutExamSetInput, Prisma.TestHistoryUncheckedCreateWithoutExamSetInput>;
};
export type TestHistoryCreateManyExamSetInputEnvelope = {
    data: Prisma.TestHistoryCreateManyExamSetInput | Prisma.TestHistoryCreateManyExamSetInput[];
    skipDuplicates?: boolean;
};
export type TestHistoryUpsertWithWhereUniqueWithoutExamSetInput = {
    where: Prisma.TestHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestHistoryUpdateWithoutExamSetInput, Prisma.TestHistoryUncheckedUpdateWithoutExamSetInput>;
    create: Prisma.XOR<Prisma.TestHistoryCreateWithoutExamSetInput, Prisma.TestHistoryUncheckedCreateWithoutExamSetInput>;
};
export type TestHistoryUpdateWithWhereUniqueWithoutExamSetInput = {
    where: Prisma.TestHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestHistoryUpdateWithoutExamSetInput, Prisma.TestHistoryUncheckedUpdateWithoutExamSetInput>;
};
export type TestHistoryUpdateManyWithWhereWithoutExamSetInput = {
    where: Prisma.TestHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.TestHistoryUpdateManyMutationInput, Prisma.TestHistoryUncheckedUpdateManyWithoutExamSetInput>;
};
export type TestHistoryScalarWhereInput = {
    AND?: Prisma.TestHistoryScalarWhereInput | Prisma.TestHistoryScalarWhereInput[];
    OR?: Prisma.TestHistoryScalarWhereInput[];
    NOT?: Prisma.TestHistoryScalarWhereInput | Prisma.TestHistoryScalarWhereInput[];
    id?: Prisma.IntFilter<"TestHistory"> | number;
    userId?: Prisma.IntFilter<"TestHistory"> | number;
    examSetId?: Prisma.IntNullableFilter<"TestHistory"> | number | null;
    licenseType?: Prisma.EnumLicenseTypeFilter<"TestHistory"> | $Enums.LicenseType;
    score?: Prisma.IntFilter<"TestHistory"> | number;
    totalQuestions?: Prisma.IntFilter<"TestHistory"> | number;
    status?: Prisma.EnumTestStatusFilter<"TestHistory"> | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFilter<"TestHistory"> | boolean;
    durationSeconds?: Prisma.IntFilter<"TestHistory"> | number;
    createdAt?: Prisma.DateTimeFilter<"TestHistory"> | Date | string;
};
export type TestHistoryCreateWithoutDetailsInput = {
    userId: number;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
    examSet?: Prisma.ExamSetCreateNestedOneWithoutTestHistoryInput;
};
export type TestHistoryUncheckedCreateWithoutDetailsInput = {
    id?: number;
    userId: number;
    examSetId?: number | null;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
};
export type TestHistoryCreateOrConnectWithoutDetailsInput = {
    where: Prisma.TestHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestHistoryCreateWithoutDetailsInput, Prisma.TestHistoryUncheckedCreateWithoutDetailsInput>;
};
export type TestHistoryUpsertWithoutDetailsInput = {
    update: Prisma.XOR<Prisma.TestHistoryUpdateWithoutDetailsInput, Prisma.TestHistoryUncheckedUpdateWithoutDetailsInput>;
    create: Prisma.XOR<Prisma.TestHistoryCreateWithoutDetailsInput, Prisma.TestHistoryUncheckedCreateWithoutDetailsInput>;
    where?: Prisma.TestHistoryWhereInput;
};
export type TestHistoryUpdateToOneWithWhereWithoutDetailsInput = {
    where?: Prisma.TestHistoryWhereInput;
    data: Prisma.XOR<Prisma.TestHistoryUpdateWithoutDetailsInput, Prisma.TestHistoryUncheckedUpdateWithoutDetailsInput>;
};
export type TestHistoryUpdateWithoutDetailsInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    examSet?: Prisma.ExamSetUpdateOneWithoutTestHistoryNestedInput;
};
export type TestHistoryUncheckedUpdateWithoutDetailsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    examSetId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestHistoryCreateManyExamSetInput = {
    id?: number;
    userId: number;
    licenseType: $Enums.LicenseType;
    score: number;
    totalQuestions: number;
    status: $Enums.TestStatus;
    isParalysisFailed?: boolean;
    durationSeconds: number;
    createdAt?: Date | string;
};
export type TestHistoryUpdateWithoutExamSetInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.TestDetailUpdateManyWithoutHistoryNestedInput;
};
export type TestHistoryUncheckedUpdateWithoutExamSetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    details?: Prisma.TestDetailUncheckedUpdateManyWithoutHistoryNestedInput;
};
export type TestHistoryUncheckedUpdateManyWithoutExamSetInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    licenseType?: Prisma.EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    totalQuestions?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTestStatusFieldUpdateOperationsInput | $Enums.TestStatus;
    isParalysisFailed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    durationSeconds?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestHistoryCountOutputType = {
    details: number;
};
export type TestHistoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    details?: boolean | TestHistoryCountOutputTypeCountDetailsArgs;
};
export type TestHistoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistoryCountOutputTypeSelect<ExtArgs> | null;
};
export type TestHistoryCountOutputTypeCountDetailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestDetailWhereInput;
};
export type TestHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    examSetId?: boolean;
    licenseType?: boolean;
    score?: boolean;
    totalQuestions?: boolean;
    status?: boolean;
    isParalysisFailed?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    examSet?: boolean | Prisma.TestHistory$examSetArgs<ExtArgs>;
    details?: boolean | Prisma.TestHistory$detailsArgs<ExtArgs>;
    _count?: boolean | Prisma.TestHistoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testHistory"]>;
export type TestHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    examSetId?: boolean;
    licenseType?: boolean;
    score?: boolean;
    totalQuestions?: boolean;
    status?: boolean;
    isParalysisFailed?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    examSet?: boolean | Prisma.TestHistory$examSetArgs<ExtArgs>;
}, ExtArgs["result"]["testHistory"]>;
export type TestHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    examSetId?: boolean;
    licenseType?: boolean;
    score?: boolean;
    totalQuestions?: boolean;
    status?: boolean;
    isParalysisFailed?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
    examSet?: boolean | Prisma.TestHistory$examSetArgs<ExtArgs>;
}, ExtArgs["result"]["testHistory"]>;
export type TestHistorySelectScalar = {
    id?: boolean;
    userId?: boolean;
    examSetId?: boolean;
    licenseType?: boolean;
    score?: boolean;
    totalQuestions?: boolean;
    status?: boolean;
    isParalysisFailed?: boolean;
    durationSeconds?: boolean;
    createdAt?: boolean;
};
export type TestHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "examSetId" | "licenseType" | "score" | "totalQuestions" | "status" | "isParalysisFailed" | "durationSeconds" | "createdAt", ExtArgs["result"]["testHistory"]>;
export type TestHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSet?: boolean | Prisma.TestHistory$examSetArgs<ExtArgs>;
    details?: boolean | Prisma.TestHistory$detailsArgs<ExtArgs>;
    _count?: boolean | Prisma.TestHistoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TestHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSet?: boolean | Prisma.TestHistory$examSetArgs<ExtArgs>;
};
export type TestHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examSet?: boolean | Prisma.TestHistory$examSetArgs<ExtArgs>;
};
export type $TestHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TestHistory";
    objects: {
        examSet: Prisma.$ExamSetPayload<ExtArgs> | null;
        details: Prisma.$TestDetailPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        examSetId: number | null;
        licenseType: $Enums.LicenseType;
        score: number;
        totalQuestions: number;
        status: $Enums.TestStatus;
        isParalysisFailed: boolean;
        durationSeconds: number;
        createdAt: Date;
    }, ExtArgs["result"]["testHistory"]>;
    composites: {};
};
export type TestHistoryGetPayload<S extends boolean | null | undefined | TestHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload, S>;
export type TestHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestHistoryCountAggregateInputType | true;
};
export interface TestHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TestHistory'];
        meta: {
            name: 'TestHistory';
        };
    };
    findUnique<T extends TestHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, TestHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, TestHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, TestHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestHistoryCreateArgs>(args: Prisma.SelectSubset<T, TestHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, TestHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestHistoryDeleteArgs>(args: Prisma.SelectSubset<T, TestHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestHistoryUpdateArgs>(args: Prisma.SelectSubset<T, TestHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, TestHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestHistoryUpsertArgs>(args: Prisma.SelectSubset<T, TestHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__TestHistoryClient<runtime.Types.Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestHistoryCountArgs>(args?: Prisma.Subset<T, TestHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestHistoryCountAggregateOutputType> : number>;
    aggregate<T extends TestHistoryAggregateArgs>(args: Prisma.Subset<T, TestHistoryAggregateArgs>): Prisma.PrismaPromise<GetTestHistoryAggregateType<T>>;
    groupBy<T extends TestHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: TestHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestHistoryFieldRefs;
}
export interface Prisma__TestHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    examSet<T extends Prisma.TestHistory$examSetArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestHistory$examSetArgs<ExtArgs>>): Prisma.Prisma__ExamSetClient<runtime.Types.Result.GetResult<Prisma.$ExamSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    details<T extends Prisma.TestHistory$detailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TestHistory$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"TestHistory", 'Int'>;
    readonly userId: Prisma.FieldRef<"TestHistory", 'Int'>;
    readonly examSetId: Prisma.FieldRef<"TestHistory", 'Int'>;
    readonly licenseType: Prisma.FieldRef<"TestHistory", 'LicenseType'>;
    readonly score: Prisma.FieldRef<"TestHistory", 'Int'>;
    readonly totalQuestions: Prisma.FieldRef<"TestHistory", 'Int'>;
    readonly status: Prisma.FieldRef<"TestHistory", 'TestStatus'>;
    readonly isParalysisFailed: Prisma.FieldRef<"TestHistory", 'Boolean'>;
    readonly durationSeconds: Prisma.FieldRef<"TestHistory", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TestHistory", 'DateTime'>;
}
export type TestHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    where: Prisma.TestHistoryWhereUniqueInput;
};
export type TestHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    where: Prisma.TestHistoryWhereUniqueInput;
};
export type TestHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestHistoryCreateInput, Prisma.TestHistoryUncheckedCreateInput>;
};
export type TestHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestHistoryCreateManyInput | Prisma.TestHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    data: Prisma.TestHistoryCreateManyInput | Prisma.TestHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TestHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TestHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestHistoryUpdateInput, Prisma.TestHistoryUncheckedUpdateInput>;
    where: Prisma.TestHistoryWhereUniqueInput;
};
export type TestHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestHistoryUpdateManyMutationInput, Prisma.TestHistoryUncheckedUpdateManyInput>;
    where?: Prisma.TestHistoryWhereInput;
    limit?: number;
};
export type TestHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestHistoryUpdateManyMutationInput, Prisma.TestHistoryUncheckedUpdateManyInput>;
    where?: Prisma.TestHistoryWhereInput;
    limit?: number;
    include?: Prisma.TestHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TestHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    where: Prisma.TestHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestHistoryCreateInput, Prisma.TestHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestHistoryUpdateInput, Prisma.TestHistoryUncheckedUpdateInput>;
};
export type TestHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
    where: Prisma.TestHistoryWhereUniqueInput;
};
export type TestHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestHistoryWhereInput;
    limit?: number;
};
export type TestHistory$examSetArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSetSelect<ExtArgs> | null;
    omit?: Prisma.ExamSetOmit<ExtArgs> | null;
    include?: Prisma.ExamSetInclude<ExtArgs> | null;
    where?: Prisma.ExamSetWhereInput;
};
export type TestHistory$detailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TestHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestHistorySelect<ExtArgs> | null;
    omit?: Prisma.TestHistoryOmit<ExtArgs> | null;
    include?: Prisma.TestHistoryInclude<ExtArgs> | null;
};
export {};
