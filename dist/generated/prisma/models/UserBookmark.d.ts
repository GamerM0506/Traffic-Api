import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type UserBookmarkModel = runtime.Types.Result.DefaultSelection<Prisma.$UserBookmarkPayload>;
export type AggregateUserBookmark = {
    _count: UserBookmarkCountAggregateOutputType | null;
    _avg: UserBookmarkAvgAggregateOutputType | null;
    _sum: UserBookmarkSumAggregateOutputType | null;
    _min: UserBookmarkMinAggregateOutputType | null;
    _max: UserBookmarkMaxAggregateOutputType | null;
};
export type UserBookmarkAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    questionId: number | null;
};
export type UserBookmarkSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    questionId: number | null;
};
export type UserBookmarkMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    questionId: number | null;
    bookmarkType: $Enums.BookmarkType | null;
    note: string | null;
    createdAt: Date | null;
};
export type UserBookmarkMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    questionId: number | null;
    bookmarkType: $Enums.BookmarkType | null;
    note: string | null;
    createdAt: Date | null;
};
export type UserBookmarkCountAggregateOutputType = {
    id: number;
    userId: number;
    questionId: number;
    bookmarkType: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type UserBookmarkAvgAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
};
export type UserBookmarkSumAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
};
export type UserBookmarkMinAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    bookmarkType?: true;
    note?: true;
    createdAt?: true;
};
export type UserBookmarkMaxAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    bookmarkType?: true;
    note?: true;
    createdAt?: true;
};
export type UserBookmarkCountAggregateInputType = {
    id?: true;
    userId?: true;
    questionId?: true;
    bookmarkType?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type UserBookmarkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookmarkWhereInput;
    orderBy?: Prisma.UserBookmarkOrderByWithRelationInput | Prisma.UserBookmarkOrderByWithRelationInput[];
    cursor?: Prisma.UserBookmarkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserBookmarkCountAggregateInputType;
    _avg?: UserBookmarkAvgAggregateInputType;
    _sum?: UserBookmarkSumAggregateInputType;
    _min?: UserBookmarkMinAggregateInputType;
    _max?: UserBookmarkMaxAggregateInputType;
};
export type GetUserBookmarkAggregateType<T extends UserBookmarkAggregateArgs> = {
    [P in keyof T & keyof AggregateUserBookmark]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserBookmark[P]> : Prisma.GetScalarType<T[P], AggregateUserBookmark[P]>;
};
export type UserBookmarkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookmarkWhereInput;
    orderBy?: Prisma.UserBookmarkOrderByWithAggregationInput | Prisma.UserBookmarkOrderByWithAggregationInput[];
    by: Prisma.UserBookmarkScalarFieldEnum[] | Prisma.UserBookmarkScalarFieldEnum;
    having?: Prisma.UserBookmarkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserBookmarkCountAggregateInputType | true;
    _avg?: UserBookmarkAvgAggregateInputType;
    _sum?: UserBookmarkSumAggregateInputType;
    _min?: UserBookmarkMinAggregateInputType;
    _max?: UserBookmarkMaxAggregateInputType;
};
export type UserBookmarkGroupByOutputType = {
    id: number;
    userId: number;
    questionId: number;
    bookmarkType: $Enums.BookmarkType;
    note: string | null;
    createdAt: Date;
    _count: UserBookmarkCountAggregateOutputType | null;
    _avg: UserBookmarkAvgAggregateOutputType | null;
    _sum: UserBookmarkSumAggregateOutputType | null;
    _min: UserBookmarkMinAggregateOutputType | null;
    _max: UserBookmarkMaxAggregateOutputType | null;
};
type GetUserBookmarkGroupByPayload<T extends UserBookmarkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserBookmarkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserBookmarkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserBookmarkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserBookmarkGroupByOutputType[P]>;
}>>;
export type UserBookmarkWhereInput = {
    AND?: Prisma.UserBookmarkWhereInput | Prisma.UserBookmarkWhereInput[];
    OR?: Prisma.UserBookmarkWhereInput[];
    NOT?: Prisma.UserBookmarkWhereInput | Prisma.UserBookmarkWhereInput[];
    id?: Prisma.IntFilter<"UserBookmark"> | number;
    userId?: Prisma.IntFilter<"UserBookmark"> | number;
    questionId?: Prisma.IntFilter<"UserBookmark"> | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFilter<"UserBookmark"> | $Enums.BookmarkType;
    note?: Prisma.StringNullableFilter<"UserBookmark"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserBookmark"> | Date | string;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
};
export type UserBookmarkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    bookmarkType?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    question?: Prisma.QuestionOrderByWithRelationInput;
};
export type UserBookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_questionId_bookmarkType?: Prisma.UserBookmarkUserIdQuestionIdBookmarkTypeCompoundUniqueInput;
    AND?: Prisma.UserBookmarkWhereInput | Prisma.UserBookmarkWhereInput[];
    OR?: Prisma.UserBookmarkWhereInput[];
    NOT?: Prisma.UserBookmarkWhereInput | Prisma.UserBookmarkWhereInput[];
    userId?: Prisma.IntFilter<"UserBookmark"> | number;
    questionId?: Prisma.IntFilter<"UserBookmark"> | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFilter<"UserBookmark"> | $Enums.BookmarkType;
    note?: Prisma.StringNullableFilter<"UserBookmark"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserBookmark"> | Date | string;
    question?: Prisma.XOR<Prisma.QuestionScalarRelationFilter, Prisma.QuestionWhereInput>;
}, "id" | "userId_questionId_bookmarkType">;
export type UserBookmarkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    bookmarkType?: Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserBookmarkCountOrderByAggregateInput;
    _avg?: Prisma.UserBookmarkAvgOrderByAggregateInput;
    _max?: Prisma.UserBookmarkMaxOrderByAggregateInput;
    _min?: Prisma.UserBookmarkMinOrderByAggregateInput;
    _sum?: Prisma.UserBookmarkSumOrderByAggregateInput;
};
export type UserBookmarkScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserBookmarkScalarWhereWithAggregatesInput | Prisma.UserBookmarkScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserBookmarkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserBookmarkScalarWhereWithAggregatesInput | Prisma.UserBookmarkScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserBookmark"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"UserBookmark"> | number;
    questionId?: Prisma.IntWithAggregatesFilter<"UserBookmark"> | number;
    bookmarkType?: Prisma.EnumBookmarkTypeWithAggregatesFilter<"UserBookmark"> | $Enums.BookmarkType;
    note?: Prisma.StringNullableWithAggregatesFilter<"UserBookmark"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserBookmark"> | Date | string;
};
export type UserBookmarkCreateInput = {
    userId: number;
    bookmarkType: $Enums.BookmarkType;
    note?: string | null;
    createdAt?: Date | string;
    question: Prisma.QuestionCreateNestedOneWithoutBookmarksInput;
};
export type UserBookmarkUncheckedCreateInput = {
    id?: number;
    userId: number;
    questionId: number;
    bookmarkType: $Enums.BookmarkType;
    note?: string | null;
    createdAt?: Date | string;
};
export type UserBookmarkUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.QuestionUpdateOneRequiredWithoutBookmarksNestedInput;
};
export type UserBookmarkUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookmarkCreateManyInput = {
    id?: number;
    userId: number;
    questionId: number;
    bookmarkType: $Enums.BookmarkType;
    note?: string | null;
    createdAt?: Date | string;
};
export type UserBookmarkUpdateManyMutationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookmarkUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    questionId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookmarkListRelationFilter = {
    every?: Prisma.UserBookmarkWhereInput;
    some?: Prisma.UserBookmarkWhereInput;
    none?: Prisma.UserBookmarkWhereInput;
};
export type UserBookmarkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserBookmarkUserIdQuestionIdBookmarkTypeCompoundUniqueInput = {
    userId: number;
    questionId: number;
    bookmarkType: $Enums.BookmarkType;
};
export type UserBookmarkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    bookmarkType?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserBookmarkAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type UserBookmarkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    bookmarkType?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserBookmarkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    bookmarkType?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserBookmarkSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type UserBookmarkCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.UserBookmarkCreateWithoutQuestionInput, Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput> | Prisma.UserBookmarkCreateWithoutQuestionInput[] | Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput | Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.UserBookmarkCreateManyQuestionInputEnvelope;
    connect?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
};
export type UserBookmarkUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.UserBookmarkCreateWithoutQuestionInput, Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput> | Prisma.UserBookmarkCreateWithoutQuestionInput[] | Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput | Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.UserBookmarkCreateManyQuestionInputEnvelope;
    connect?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
};
export type UserBookmarkUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.UserBookmarkCreateWithoutQuestionInput, Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput> | Prisma.UserBookmarkCreateWithoutQuestionInput[] | Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput | Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.UserBookmarkUpsertWithWhereUniqueWithoutQuestionInput | Prisma.UserBookmarkUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.UserBookmarkCreateManyQuestionInputEnvelope;
    set?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    disconnect?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    delete?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    connect?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    update?: Prisma.UserBookmarkUpdateWithWhereUniqueWithoutQuestionInput | Prisma.UserBookmarkUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.UserBookmarkUpdateManyWithWhereWithoutQuestionInput | Prisma.UserBookmarkUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.UserBookmarkScalarWhereInput | Prisma.UserBookmarkScalarWhereInput[];
};
export type UserBookmarkUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.UserBookmarkCreateWithoutQuestionInput, Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput> | Prisma.UserBookmarkCreateWithoutQuestionInput[] | Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput | Prisma.UserBookmarkCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.UserBookmarkUpsertWithWhereUniqueWithoutQuestionInput | Prisma.UserBookmarkUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.UserBookmarkCreateManyQuestionInputEnvelope;
    set?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    disconnect?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    delete?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    connect?: Prisma.UserBookmarkWhereUniqueInput | Prisma.UserBookmarkWhereUniqueInput[];
    update?: Prisma.UserBookmarkUpdateWithWhereUniqueWithoutQuestionInput | Prisma.UserBookmarkUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.UserBookmarkUpdateManyWithWhereWithoutQuestionInput | Prisma.UserBookmarkUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.UserBookmarkScalarWhereInput | Prisma.UserBookmarkScalarWhereInput[];
};
export type EnumBookmarkTypeFieldUpdateOperationsInput = {
    set?: $Enums.BookmarkType;
};
export type UserBookmarkCreateWithoutQuestionInput = {
    userId: number;
    bookmarkType: $Enums.BookmarkType;
    note?: string | null;
    createdAt?: Date | string;
};
export type UserBookmarkUncheckedCreateWithoutQuestionInput = {
    id?: number;
    userId: number;
    bookmarkType: $Enums.BookmarkType;
    note?: string | null;
    createdAt?: Date | string;
};
export type UserBookmarkCreateOrConnectWithoutQuestionInput = {
    where: Prisma.UserBookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserBookmarkCreateWithoutQuestionInput, Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput>;
};
export type UserBookmarkCreateManyQuestionInputEnvelope = {
    data: Prisma.UserBookmarkCreateManyQuestionInput | Prisma.UserBookmarkCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type UserBookmarkUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.UserBookmarkWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserBookmarkUpdateWithoutQuestionInput, Prisma.UserBookmarkUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.UserBookmarkCreateWithoutQuestionInput, Prisma.UserBookmarkUncheckedCreateWithoutQuestionInput>;
};
export type UserBookmarkUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.UserBookmarkWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserBookmarkUpdateWithoutQuestionInput, Prisma.UserBookmarkUncheckedUpdateWithoutQuestionInput>;
};
export type UserBookmarkUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.UserBookmarkScalarWhereInput;
    data: Prisma.XOR<Prisma.UserBookmarkUpdateManyMutationInput, Prisma.UserBookmarkUncheckedUpdateManyWithoutQuestionInput>;
};
export type UserBookmarkScalarWhereInput = {
    AND?: Prisma.UserBookmarkScalarWhereInput | Prisma.UserBookmarkScalarWhereInput[];
    OR?: Prisma.UserBookmarkScalarWhereInput[];
    NOT?: Prisma.UserBookmarkScalarWhereInput | Prisma.UserBookmarkScalarWhereInput[];
    id?: Prisma.IntFilter<"UserBookmark"> | number;
    userId?: Prisma.IntFilter<"UserBookmark"> | number;
    questionId?: Prisma.IntFilter<"UserBookmark"> | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFilter<"UserBookmark"> | $Enums.BookmarkType;
    note?: Prisma.StringNullableFilter<"UserBookmark"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserBookmark"> | Date | string;
};
export type UserBookmarkCreateManyQuestionInput = {
    id?: number;
    userId: number;
    bookmarkType: $Enums.BookmarkType;
    note?: string | null;
    createdAt?: Date | string;
};
export type UserBookmarkUpdateWithoutQuestionInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookmarkUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookmarkUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    bookmarkType?: Prisma.EnumBookmarkTypeFieldUpdateOperationsInput | $Enums.BookmarkType;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserBookmarkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    bookmarkType?: boolean;
    note?: boolean;
    createdAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBookmark"]>;
export type UserBookmarkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    bookmarkType?: boolean;
    note?: boolean;
    createdAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBookmark"]>;
export type UserBookmarkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    bookmarkType?: boolean;
    note?: boolean;
    createdAt?: boolean;
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userBookmark"]>;
export type UserBookmarkSelectScalar = {
    id?: boolean;
    userId?: boolean;
    questionId?: boolean;
    bookmarkType?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type UserBookmarkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "questionId" | "bookmarkType" | "note" | "createdAt", ExtArgs["result"]["userBookmark"]>;
export type UserBookmarkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type UserBookmarkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type UserBookmarkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    question?: boolean | Prisma.QuestionDefaultArgs<ExtArgs>;
};
export type $UserBookmarkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserBookmark";
    objects: {
        question: Prisma.$QuestionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        questionId: number;
        bookmarkType: $Enums.BookmarkType;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["userBookmark"]>;
    composites: {};
};
export type UserBookmarkGetPayload<S extends boolean | null | undefined | UserBookmarkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload, S>;
export type UserBookmarkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserBookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserBookmarkCountAggregateInputType | true;
};
export interface UserBookmarkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserBookmark'];
        meta: {
            name: 'UserBookmark';
        };
    };
    findUnique<T extends UserBookmarkFindUniqueArgs>(args: Prisma.SelectSubset<T, UserBookmarkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserBookmarkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserBookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserBookmarkFindFirstArgs>(args?: Prisma.SelectSubset<T, UserBookmarkFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserBookmarkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserBookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserBookmarkFindManyArgs>(args?: Prisma.SelectSubset<T, UserBookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserBookmarkCreateArgs>(args: Prisma.SelectSubset<T, UserBookmarkCreateArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserBookmarkCreateManyArgs>(args?: Prisma.SelectSubset<T, UserBookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserBookmarkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserBookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserBookmarkDeleteArgs>(args: Prisma.SelectSubset<T, UserBookmarkDeleteArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserBookmarkUpdateArgs>(args: Prisma.SelectSubset<T, UserBookmarkUpdateArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserBookmarkDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserBookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserBookmarkUpdateManyArgs>(args: Prisma.SelectSubset<T, UserBookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserBookmarkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserBookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserBookmarkUpsertArgs>(args: Prisma.SelectSubset<T, UserBookmarkUpsertArgs<ExtArgs>>): Prisma.Prisma__UserBookmarkClient<runtime.Types.Result.GetResult<Prisma.$UserBookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserBookmarkCountArgs>(args?: Prisma.Subset<T, UserBookmarkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserBookmarkCountAggregateOutputType> : number>;
    aggregate<T extends UserBookmarkAggregateArgs>(args: Prisma.Subset<T, UserBookmarkAggregateArgs>): Prisma.PrismaPromise<GetUserBookmarkAggregateType<T>>;
    groupBy<T extends UserBookmarkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserBookmarkGroupByArgs['orderBy'];
    } : {
        orderBy?: UserBookmarkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserBookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserBookmarkFieldRefs;
}
export interface Prisma__UserBookmarkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    question<T extends Prisma.QuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.QuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__QuestionClient<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserBookmarkFieldRefs {
    readonly id: Prisma.FieldRef<"UserBookmark", 'Int'>;
    readonly userId: Prisma.FieldRef<"UserBookmark", 'Int'>;
    readonly questionId: Prisma.FieldRef<"UserBookmark", 'Int'>;
    readonly bookmarkType: Prisma.FieldRef<"UserBookmark", 'BookmarkType'>;
    readonly note: Prisma.FieldRef<"UserBookmark", 'String'>;
    readonly createdAt: Prisma.FieldRef<"UserBookmark", 'DateTime'>;
}
export type UserBookmarkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    where: Prisma.UserBookmarkWhereUniqueInput;
};
export type UserBookmarkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    where: Prisma.UserBookmarkWhereUniqueInput;
};
export type UserBookmarkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserBookmarkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserBookmarkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserBookmarkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserBookmarkCreateInput, Prisma.UserBookmarkUncheckedCreateInput>;
};
export type UserBookmarkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserBookmarkCreateManyInput | Prisma.UserBookmarkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserBookmarkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    data: Prisma.UserBookmarkCreateManyInput | Prisma.UserBookmarkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserBookmarkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserBookmarkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserBookmarkUpdateInput, Prisma.UserBookmarkUncheckedUpdateInput>;
    where: Prisma.UserBookmarkWhereUniqueInput;
};
export type UserBookmarkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserBookmarkUpdateManyMutationInput, Prisma.UserBookmarkUncheckedUpdateManyInput>;
    where?: Prisma.UserBookmarkWhereInput;
    limit?: number;
};
export type UserBookmarkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserBookmarkUpdateManyMutationInput, Prisma.UserBookmarkUncheckedUpdateManyInput>;
    where?: Prisma.UserBookmarkWhereInput;
    limit?: number;
    include?: Prisma.UserBookmarkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserBookmarkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    where: Prisma.UserBookmarkWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserBookmarkCreateInput, Prisma.UserBookmarkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserBookmarkUpdateInput, Prisma.UserBookmarkUncheckedUpdateInput>;
};
export type UserBookmarkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
    where: Prisma.UserBookmarkWhereUniqueInput;
};
export type UserBookmarkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserBookmarkWhereInput;
    limit?: number;
};
export type UserBookmarkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserBookmarkSelect<ExtArgs> | null;
    omit?: Prisma.UserBookmarkOmit<ExtArgs> | null;
    include?: Prisma.UserBookmarkInclude<ExtArgs> | null;
};
export {};
