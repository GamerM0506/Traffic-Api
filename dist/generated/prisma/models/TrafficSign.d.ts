import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type TrafficSignModel = runtime.Types.Result.DefaultSelection<Prisma.$TrafficSignPayload>;
export type AggregateTrafficSign = {
    _count: TrafficSignCountAggregateOutputType | null;
    _avg: TrafficSignAvgAggregateOutputType | null;
    _sum: TrafficSignSumAggregateOutputType | null;
    _min: TrafficSignMinAggregateOutputType | null;
    _max: TrafficSignMaxAggregateOutputType | null;
};
export type TrafficSignAvgAggregateOutputType = {
    id: number | null;
};
export type TrafficSignSumAggregateOutputType = {
    id: number | null;
};
export type TrafficSignMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
    description: string | null;
    imageUrl: string | null;
    group: string | null;
};
export type TrafficSignMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
    description: string | null;
    imageUrl: string | null;
    group: string | null;
};
export type TrafficSignCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    imageUrl: number;
    group: number;
    _all: number;
};
export type TrafficSignAvgAggregateInputType = {
    id?: true;
};
export type TrafficSignSumAggregateInputType = {
    id?: true;
};
export type TrafficSignMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    imageUrl?: true;
    group?: true;
};
export type TrafficSignMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    imageUrl?: true;
    group?: true;
};
export type TrafficSignCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    imageUrl?: true;
    group?: true;
    _all?: true;
};
export type TrafficSignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrafficSignWhereInput;
    orderBy?: Prisma.TrafficSignOrderByWithRelationInput | Prisma.TrafficSignOrderByWithRelationInput[];
    cursor?: Prisma.TrafficSignWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TrafficSignCountAggregateInputType;
    _avg?: TrafficSignAvgAggregateInputType;
    _sum?: TrafficSignSumAggregateInputType;
    _min?: TrafficSignMinAggregateInputType;
    _max?: TrafficSignMaxAggregateInputType;
};
export type GetTrafficSignAggregateType<T extends TrafficSignAggregateArgs> = {
    [P in keyof T & keyof AggregateTrafficSign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrafficSign[P]> : Prisma.GetScalarType<T[P], AggregateTrafficSign[P]>;
};
export type TrafficSignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrafficSignWhereInput;
    orderBy?: Prisma.TrafficSignOrderByWithAggregationInput | Prisma.TrafficSignOrderByWithAggregationInput[];
    by: Prisma.TrafficSignScalarFieldEnum[] | Prisma.TrafficSignScalarFieldEnum;
    having?: Prisma.TrafficSignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrafficSignCountAggregateInputType | true;
    _avg?: TrafficSignAvgAggregateInputType;
    _sum?: TrafficSignSumAggregateInputType;
    _min?: TrafficSignMinAggregateInputType;
    _max?: TrafficSignMaxAggregateInputType;
};
export type TrafficSignGroupByOutputType = {
    id: number;
    code: string;
    name: string;
    description: string | null;
    imageUrl: string;
    group: string;
    _count: TrafficSignCountAggregateOutputType | null;
    _avg: TrafficSignAvgAggregateOutputType | null;
    _sum: TrafficSignSumAggregateOutputType | null;
    _min: TrafficSignMinAggregateOutputType | null;
    _max: TrafficSignMaxAggregateOutputType | null;
};
type GetTrafficSignGroupByPayload<T extends TrafficSignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrafficSignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrafficSignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrafficSignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrafficSignGroupByOutputType[P]>;
}>>;
export type TrafficSignWhereInput = {
    AND?: Prisma.TrafficSignWhereInput | Prisma.TrafficSignWhereInput[];
    OR?: Prisma.TrafficSignWhereInput[];
    NOT?: Prisma.TrafficSignWhereInput | Prisma.TrafficSignWhereInput[];
    id?: Prisma.IntFilter<"TrafficSign"> | number;
    code?: Prisma.StringFilter<"TrafficSign"> | string;
    name?: Prisma.StringFilter<"TrafficSign"> | string;
    description?: Prisma.StringNullableFilter<"TrafficSign"> | string | null;
    imageUrl?: Prisma.StringFilter<"TrafficSign"> | string;
    group?: Prisma.StringFilter<"TrafficSign"> | string;
    questions?: Prisma.QuestionListRelationFilter;
};
export type TrafficSignOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    questions?: Prisma.QuestionOrderByRelationAggregateInput;
};
export type TrafficSignWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    code?: string;
    AND?: Prisma.TrafficSignWhereInput | Prisma.TrafficSignWhereInput[];
    OR?: Prisma.TrafficSignWhereInput[];
    NOT?: Prisma.TrafficSignWhereInput | Prisma.TrafficSignWhereInput[];
    name?: Prisma.StringFilter<"TrafficSign"> | string;
    description?: Prisma.StringNullableFilter<"TrafficSign"> | string | null;
    imageUrl?: Prisma.StringFilter<"TrafficSign"> | string;
    group?: Prisma.StringFilter<"TrafficSign"> | string;
    questions?: Prisma.QuestionListRelationFilter;
}, "id" | "code">;
export type TrafficSignOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    _count?: Prisma.TrafficSignCountOrderByAggregateInput;
    _avg?: Prisma.TrafficSignAvgOrderByAggregateInput;
    _max?: Prisma.TrafficSignMaxOrderByAggregateInput;
    _min?: Prisma.TrafficSignMinOrderByAggregateInput;
    _sum?: Prisma.TrafficSignSumOrderByAggregateInput;
};
export type TrafficSignScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrafficSignScalarWhereWithAggregatesInput | Prisma.TrafficSignScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrafficSignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrafficSignScalarWhereWithAggregatesInput | Prisma.TrafficSignScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TrafficSign"> | number;
    code?: Prisma.StringWithAggregatesFilter<"TrafficSign"> | string;
    name?: Prisma.StringWithAggregatesFilter<"TrafficSign"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"TrafficSign"> | string | null;
    imageUrl?: Prisma.StringWithAggregatesFilter<"TrafficSign"> | string;
    group?: Prisma.StringWithAggregatesFilter<"TrafficSign"> | string;
};
export type TrafficSignCreateInput = {
    code: string;
    name: string;
    description?: string | null;
    imageUrl: string;
    group: string;
    questions?: Prisma.QuestionCreateNestedManyWithoutTrafficSignInput;
};
export type TrafficSignUncheckedCreateInput = {
    id?: number;
    code: string;
    name: string;
    description?: string | null;
    imageUrl: string;
    group: string;
    questions?: Prisma.QuestionUncheckedCreateNestedManyWithoutTrafficSignInput;
};
export type TrafficSignUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUpdateManyWithoutTrafficSignNestedInput;
};
export type TrafficSignUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.QuestionUncheckedUpdateManyWithoutTrafficSignNestedInput;
};
export type TrafficSignCreateManyInput = {
    id?: number;
    code: string;
    name: string;
    description?: string | null;
    imageUrl: string;
    group: string;
};
export type TrafficSignUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TrafficSignUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TrafficSignNullableScalarRelationFilter = {
    is?: Prisma.TrafficSignWhereInput | null;
    isNot?: Prisma.TrafficSignWhereInput | null;
};
export type TrafficSignCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
};
export type TrafficSignAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TrafficSignMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
};
export type TrafficSignMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
};
export type TrafficSignSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type TrafficSignCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.TrafficSignCreateWithoutQuestionsInput, Prisma.TrafficSignUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.TrafficSignCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.TrafficSignWhereUniqueInput;
};
export type TrafficSignUpdateOneWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.TrafficSignCreateWithoutQuestionsInput, Prisma.TrafficSignUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.TrafficSignCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.TrafficSignUpsertWithoutQuestionsInput;
    disconnect?: Prisma.TrafficSignWhereInput | boolean;
    delete?: Prisma.TrafficSignWhereInput | boolean;
    connect?: Prisma.TrafficSignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrafficSignUpdateToOneWithWhereWithoutQuestionsInput, Prisma.TrafficSignUpdateWithoutQuestionsInput>, Prisma.TrafficSignUncheckedUpdateWithoutQuestionsInput>;
};
export type TrafficSignCreateWithoutQuestionsInput = {
    code: string;
    name: string;
    description?: string | null;
    imageUrl: string;
    group: string;
};
export type TrafficSignUncheckedCreateWithoutQuestionsInput = {
    id?: number;
    code: string;
    name: string;
    description?: string | null;
    imageUrl: string;
    group: string;
};
export type TrafficSignCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.TrafficSignWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrafficSignCreateWithoutQuestionsInput, Prisma.TrafficSignUncheckedCreateWithoutQuestionsInput>;
};
export type TrafficSignUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.TrafficSignUpdateWithoutQuestionsInput, Prisma.TrafficSignUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.TrafficSignCreateWithoutQuestionsInput, Prisma.TrafficSignUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.TrafficSignWhereInput;
};
export type TrafficSignUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.TrafficSignWhereInput;
    data: Prisma.XOR<Prisma.TrafficSignUpdateWithoutQuestionsInput, Prisma.TrafficSignUncheckedUpdateWithoutQuestionsInput>;
};
export type TrafficSignUpdateWithoutQuestionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TrafficSignUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TrafficSignCountOutputType = {
    questions: number;
};
export type TrafficSignCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | TrafficSignCountOutputTypeCountQuestionsArgs;
};
export type TrafficSignCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignCountOutputTypeSelect<ExtArgs> | null;
};
export type TrafficSignCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.QuestionWhereInput;
};
export type TrafficSignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    group?: boolean;
    questions?: boolean | Prisma.TrafficSign$questionsArgs<ExtArgs>;
    _count?: boolean | Prisma.TrafficSignCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trafficSign"]>;
export type TrafficSignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    group?: boolean;
}, ExtArgs["result"]["trafficSign"]>;
export type TrafficSignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    group?: boolean;
}, ExtArgs["result"]["trafficSign"]>;
export type TrafficSignSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    group?: boolean;
};
export type TrafficSignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "description" | "imageUrl" | "group", ExtArgs["result"]["trafficSign"]>;
export type TrafficSignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | Prisma.TrafficSign$questionsArgs<ExtArgs>;
    _count?: boolean | Prisma.TrafficSignCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TrafficSignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TrafficSignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TrafficSignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TrafficSign";
    objects: {
        questions: Prisma.$QuestionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        name: string;
        description: string | null;
        imageUrl: string;
        group: string;
    }, ExtArgs["result"]["trafficSign"]>;
    composites: {};
};
export type TrafficSignGetPayload<S extends boolean | null | undefined | TrafficSignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload, S>;
export type TrafficSignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrafficSignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrafficSignCountAggregateInputType | true;
};
export interface TrafficSignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TrafficSign'];
        meta: {
            name: 'TrafficSign';
        };
    };
    findUnique<T extends TrafficSignFindUniqueArgs>(args: Prisma.SelectSubset<T, TrafficSignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TrafficSignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrafficSignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TrafficSignFindFirstArgs>(args?: Prisma.SelectSubset<T, TrafficSignFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TrafficSignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrafficSignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TrafficSignFindManyArgs>(args?: Prisma.SelectSubset<T, TrafficSignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TrafficSignCreateArgs>(args: Prisma.SelectSubset<T, TrafficSignCreateArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TrafficSignCreateManyArgs>(args?: Prisma.SelectSubset<T, TrafficSignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TrafficSignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TrafficSignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TrafficSignDeleteArgs>(args: Prisma.SelectSubset<T, TrafficSignDeleteArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TrafficSignUpdateArgs>(args: Prisma.SelectSubset<T, TrafficSignUpdateArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TrafficSignDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrafficSignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TrafficSignUpdateManyArgs>(args: Prisma.SelectSubset<T, TrafficSignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TrafficSignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TrafficSignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TrafficSignUpsertArgs>(args: Prisma.SelectSubset<T, TrafficSignUpsertArgs<ExtArgs>>): Prisma.Prisma__TrafficSignClient<runtime.Types.Result.GetResult<Prisma.$TrafficSignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TrafficSignCountArgs>(args?: Prisma.Subset<T, TrafficSignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrafficSignCountAggregateOutputType> : number>;
    aggregate<T extends TrafficSignAggregateArgs>(args: Prisma.Subset<T, TrafficSignAggregateArgs>): Prisma.PrismaPromise<GetTrafficSignAggregateType<T>>;
    groupBy<T extends TrafficSignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrafficSignGroupByArgs['orderBy'];
    } : {
        orderBy?: TrafficSignGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrafficSignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafficSignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TrafficSignFieldRefs;
}
export interface Prisma__TrafficSignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    questions<T extends Prisma.TrafficSign$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TrafficSign$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TrafficSignFieldRefs {
    readonly id: Prisma.FieldRef<"TrafficSign", 'Int'>;
    readonly code: Prisma.FieldRef<"TrafficSign", 'String'>;
    readonly name: Prisma.FieldRef<"TrafficSign", 'String'>;
    readonly description: Prisma.FieldRef<"TrafficSign", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"TrafficSign", 'String'>;
    readonly group: Prisma.FieldRef<"TrafficSign", 'String'>;
}
export type TrafficSignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where: Prisma.TrafficSignWhereUniqueInput;
};
export type TrafficSignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where: Prisma.TrafficSignWhereUniqueInput;
};
export type TrafficSignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where?: Prisma.TrafficSignWhereInput;
    orderBy?: Prisma.TrafficSignOrderByWithRelationInput | Prisma.TrafficSignOrderByWithRelationInput[];
    cursor?: Prisma.TrafficSignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrafficSignScalarFieldEnum | Prisma.TrafficSignScalarFieldEnum[];
};
export type TrafficSignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where?: Prisma.TrafficSignWhereInput;
    orderBy?: Prisma.TrafficSignOrderByWithRelationInput | Prisma.TrafficSignOrderByWithRelationInput[];
    cursor?: Prisma.TrafficSignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrafficSignScalarFieldEnum | Prisma.TrafficSignScalarFieldEnum[];
};
export type TrafficSignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where?: Prisma.TrafficSignWhereInput;
    orderBy?: Prisma.TrafficSignOrderByWithRelationInput | Prisma.TrafficSignOrderByWithRelationInput[];
    cursor?: Prisma.TrafficSignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrafficSignScalarFieldEnum | Prisma.TrafficSignScalarFieldEnum[];
};
export type TrafficSignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrafficSignCreateInput, Prisma.TrafficSignUncheckedCreateInput>;
};
export type TrafficSignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TrafficSignCreateManyInput | Prisma.TrafficSignCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrafficSignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    data: Prisma.TrafficSignCreateManyInput | Prisma.TrafficSignCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrafficSignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrafficSignUpdateInput, Prisma.TrafficSignUncheckedUpdateInput>;
    where: Prisma.TrafficSignWhereUniqueInput;
};
export type TrafficSignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TrafficSignUpdateManyMutationInput, Prisma.TrafficSignUncheckedUpdateManyInput>;
    where?: Prisma.TrafficSignWhereInput;
    limit?: number;
};
export type TrafficSignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrafficSignUpdateManyMutationInput, Prisma.TrafficSignUncheckedUpdateManyInput>;
    where?: Prisma.TrafficSignWhereInput;
    limit?: number;
};
export type TrafficSignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where: Prisma.TrafficSignWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrafficSignCreateInput, Prisma.TrafficSignUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TrafficSignUpdateInput, Prisma.TrafficSignUncheckedUpdateInput>;
};
export type TrafficSignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
    where: Prisma.TrafficSignWhereUniqueInput;
};
export type TrafficSignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrafficSignWhereInput;
    limit?: number;
};
export type TrafficSign$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrafficSignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrafficSignSelect<ExtArgs> | null;
    omit?: Prisma.TrafficSignOmit<ExtArgs> | null;
    include?: Prisma.TrafficSignInclude<ExtArgs> | null;
};
export {};
