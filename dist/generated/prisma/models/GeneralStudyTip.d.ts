import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type GeneralStudyTipModel = runtime.Types.Result.DefaultSelection<Prisma.$GeneralStudyTipPayload>;
export type AggregateGeneralStudyTip = {
    _count: GeneralStudyTipCountAggregateOutputType | null;
    _avg: GeneralStudyTipAvgAggregateOutputType | null;
    _sum: GeneralStudyTipSumAggregateOutputType | null;
    _min: GeneralStudyTipMinAggregateOutputType | null;
    _max: GeneralStudyTipMaxAggregateOutputType | null;
};
export type GeneralStudyTipAvgAggregateOutputType = {
    id: number | null;
};
export type GeneralStudyTipSumAggregateOutputType = {
    id: number | null;
};
export type GeneralStudyTipMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    licenseType: $Enums.LicenseType | null;
};
export type GeneralStudyTipMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    licenseType: $Enums.LicenseType | null;
};
export type GeneralStudyTipCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    licenseType: number;
    _all: number;
};
export type GeneralStudyTipAvgAggregateInputType = {
    id?: true;
};
export type GeneralStudyTipSumAggregateInputType = {
    id?: true;
};
export type GeneralStudyTipMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    licenseType?: true;
};
export type GeneralStudyTipMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    licenseType?: true;
};
export type GeneralStudyTipCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    licenseType?: true;
    _all?: true;
};
export type GeneralStudyTipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneralStudyTipWhereInput;
    orderBy?: Prisma.GeneralStudyTipOrderByWithRelationInput | Prisma.GeneralStudyTipOrderByWithRelationInput[];
    cursor?: Prisma.GeneralStudyTipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GeneralStudyTipCountAggregateInputType;
    _avg?: GeneralStudyTipAvgAggregateInputType;
    _sum?: GeneralStudyTipSumAggregateInputType;
    _min?: GeneralStudyTipMinAggregateInputType;
    _max?: GeneralStudyTipMaxAggregateInputType;
};
export type GetGeneralStudyTipAggregateType<T extends GeneralStudyTipAggregateArgs> = {
    [P in keyof T & keyof AggregateGeneralStudyTip]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGeneralStudyTip[P]> : Prisma.GetScalarType<T[P], AggregateGeneralStudyTip[P]>;
};
export type GeneralStudyTipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneralStudyTipWhereInput;
    orderBy?: Prisma.GeneralStudyTipOrderByWithAggregationInput | Prisma.GeneralStudyTipOrderByWithAggregationInput[];
    by: Prisma.GeneralStudyTipScalarFieldEnum[] | Prisma.GeneralStudyTipScalarFieldEnum;
    having?: Prisma.GeneralStudyTipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GeneralStudyTipCountAggregateInputType | true;
    _avg?: GeneralStudyTipAvgAggregateInputType;
    _sum?: GeneralStudyTipSumAggregateInputType;
    _min?: GeneralStudyTipMinAggregateInputType;
    _max?: GeneralStudyTipMaxAggregateInputType;
};
export type GeneralStudyTipGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    licenseType: $Enums.LicenseType | null;
    _count: GeneralStudyTipCountAggregateOutputType | null;
    _avg: GeneralStudyTipAvgAggregateOutputType | null;
    _sum: GeneralStudyTipSumAggregateOutputType | null;
    _min: GeneralStudyTipMinAggregateOutputType | null;
    _max: GeneralStudyTipMaxAggregateOutputType | null;
};
type GetGeneralStudyTipGroupByPayload<T extends GeneralStudyTipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GeneralStudyTipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GeneralStudyTipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GeneralStudyTipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GeneralStudyTipGroupByOutputType[P]>;
}>>;
export type GeneralStudyTipWhereInput = {
    AND?: Prisma.GeneralStudyTipWhereInput | Prisma.GeneralStudyTipWhereInput[];
    OR?: Prisma.GeneralStudyTipWhereInput[];
    NOT?: Prisma.GeneralStudyTipWhereInput | Prisma.GeneralStudyTipWhereInput[];
    id?: Prisma.IntFilter<"GeneralStudyTip"> | number;
    title?: Prisma.StringFilter<"GeneralStudyTip"> | string;
    content?: Prisma.StringFilter<"GeneralStudyTip"> | string;
    licenseType?: Prisma.EnumLicenseTypeNullableFilter<"GeneralStudyTip"> | $Enums.LicenseType | null;
};
export type GeneralStudyTipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type GeneralStudyTipWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.GeneralStudyTipWhereInput | Prisma.GeneralStudyTipWhereInput[];
    OR?: Prisma.GeneralStudyTipWhereInput[];
    NOT?: Prisma.GeneralStudyTipWhereInput | Prisma.GeneralStudyTipWhereInput[];
    title?: Prisma.StringFilter<"GeneralStudyTip"> | string;
    content?: Prisma.StringFilter<"GeneralStudyTip"> | string;
    licenseType?: Prisma.EnumLicenseTypeNullableFilter<"GeneralStudyTip"> | $Enums.LicenseType | null;
}, "id">;
export type GeneralStudyTipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.GeneralStudyTipCountOrderByAggregateInput;
    _avg?: Prisma.GeneralStudyTipAvgOrderByAggregateInput;
    _max?: Prisma.GeneralStudyTipMaxOrderByAggregateInput;
    _min?: Prisma.GeneralStudyTipMinOrderByAggregateInput;
    _sum?: Prisma.GeneralStudyTipSumOrderByAggregateInput;
};
export type GeneralStudyTipScalarWhereWithAggregatesInput = {
    AND?: Prisma.GeneralStudyTipScalarWhereWithAggregatesInput | Prisma.GeneralStudyTipScalarWhereWithAggregatesInput[];
    OR?: Prisma.GeneralStudyTipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GeneralStudyTipScalarWhereWithAggregatesInput | Prisma.GeneralStudyTipScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"GeneralStudyTip"> | number;
    title?: Prisma.StringWithAggregatesFilter<"GeneralStudyTip"> | string;
    content?: Prisma.StringWithAggregatesFilter<"GeneralStudyTip"> | string;
    licenseType?: Prisma.EnumLicenseTypeNullableWithAggregatesFilter<"GeneralStudyTip"> | $Enums.LicenseType | null;
};
export type GeneralStudyTipCreateInput = {
    title: string;
    content: string;
    licenseType?: $Enums.LicenseType | null;
};
export type GeneralStudyTipUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    licenseType?: $Enums.LicenseType | null;
};
export type GeneralStudyTipUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.NullableEnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType | null;
};
export type GeneralStudyTipUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.NullableEnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType | null;
};
export type GeneralStudyTipCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    licenseType?: $Enums.LicenseType | null;
};
export type GeneralStudyTipUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.NullableEnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType | null;
};
export type GeneralStudyTipUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    licenseType?: Prisma.NullableEnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType | null;
};
export type GeneralStudyTipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
};
export type GeneralStudyTipAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type GeneralStudyTipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
};
export type GeneralStudyTipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    licenseType?: Prisma.SortOrder;
};
export type GeneralStudyTipSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type NullableEnumLicenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseType | null;
};
export type GeneralStudyTipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    licenseType?: boolean;
}, ExtArgs["result"]["generalStudyTip"]>;
export type GeneralStudyTipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    licenseType?: boolean;
}, ExtArgs["result"]["generalStudyTip"]>;
export type GeneralStudyTipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    content?: boolean;
    licenseType?: boolean;
}, ExtArgs["result"]["generalStudyTip"]>;
export type GeneralStudyTipSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    licenseType?: boolean;
};
export type GeneralStudyTipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "content" | "licenseType", ExtArgs["result"]["generalStudyTip"]>;
export type $GeneralStudyTipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GeneralStudyTip";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        content: string;
        licenseType: $Enums.LicenseType | null;
    }, ExtArgs["result"]["generalStudyTip"]>;
    composites: {};
};
export type GeneralStudyTipGetPayload<S extends boolean | null | undefined | GeneralStudyTipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload, S>;
export type GeneralStudyTipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GeneralStudyTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GeneralStudyTipCountAggregateInputType | true;
};
export interface GeneralStudyTipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GeneralStudyTip'];
        meta: {
            name: 'GeneralStudyTip';
        };
    };
    findUnique<T extends GeneralStudyTipFindUniqueArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GeneralStudyTipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GeneralStudyTipFindFirstArgs>(args?: Prisma.SelectSubset<T, GeneralStudyTipFindFirstArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GeneralStudyTipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GeneralStudyTipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GeneralStudyTipFindManyArgs>(args?: Prisma.SelectSubset<T, GeneralStudyTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GeneralStudyTipCreateArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipCreateArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GeneralStudyTipCreateManyArgs>(args?: Prisma.SelectSubset<T, GeneralStudyTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GeneralStudyTipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GeneralStudyTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GeneralStudyTipDeleteArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipDeleteArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GeneralStudyTipUpdateArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipUpdateArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GeneralStudyTipDeleteManyArgs>(args?: Prisma.SelectSubset<T, GeneralStudyTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GeneralStudyTipUpdateManyArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GeneralStudyTipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GeneralStudyTipUpsertArgs>(args: Prisma.SelectSubset<T, GeneralStudyTipUpsertArgs<ExtArgs>>): Prisma.Prisma__GeneralStudyTipClient<runtime.Types.Result.GetResult<Prisma.$GeneralStudyTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GeneralStudyTipCountArgs>(args?: Prisma.Subset<T, GeneralStudyTipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GeneralStudyTipCountAggregateOutputType> : number>;
    aggregate<T extends GeneralStudyTipAggregateArgs>(args: Prisma.Subset<T, GeneralStudyTipAggregateArgs>): Prisma.PrismaPromise<GetGeneralStudyTipAggregateType<T>>;
    groupBy<T extends GeneralStudyTipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GeneralStudyTipGroupByArgs['orderBy'];
    } : {
        orderBy?: GeneralStudyTipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GeneralStudyTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralStudyTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GeneralStudyTipFieldRefs;
}
export interface Prisma__GeneralStudyTipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GeneralStudyTipFieldRefs {
    readonly id: Prisma.FieldRef<"GeneralStudyTip", 'Int'>;
    readonly title: Prisma.FieldRef<"GeneralStudyTip", 'String'>;
    readonly content: Prisma.FieldRef<"GeneralStudyTip", 'String'>;
    readonly licenseType: Prisma.FieldRef<"GeneralStudyTip", 'LicenseType'>;
}
export type GeneralStudyTipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where: Prisma.GeneralStudyTipWhereUniqueInput;
};
export type GeneralStudyTipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where: Prisma.GeneralStudyTipWhereUniqueInput;
};
export type GeneralStudyTipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where?: Prisma.GeneralStudyTipWhereInput;
    orderBy?: Prisma.GeneralStudyTipOrderByWithRelationInput | Prisma.GeneralStudyTipOrderByWithRelationInput[];
    cursor?: Prisma.GeneralStudyTipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneralStudyTipScalarFieldEnum | Prisma.GeneralStudyTipScalarFieldEnum[];
};
export type GeneralStudyTipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where?: Prisma.GeneralStudyTipWhereInput;
    orderBy?: Prisma.GeneralStudyTipOrderByWithRelationInput | Prisma.GeneralStudyTipOrderByWithRelationInput[];
    cursor?: Prisma.GeneralStudyTipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneralStudyTipScalarFieldEnum | Prisma.GeneralStudyTipScalarFieldEnum[];
};
export type GeneralStudyTipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where?: Prisma.GeneralStudyTipWhereInput;
    orderBy?: Prisma.GeneralStudyTipOrderByWithRelationInput | Prisma.GeneralStudyTipOrderByWithRelationInput[];
    cursor?: Prisma.GeneralStudyTipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneralStudyTipScalarFieldEnum | Prisma.GeneralStudyTipScalarFieldEnum[];
};
export type GeneralStudyTipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneralStudyTipCreateInput, Prisma.GeneralStudyTipUncheckedCreateInput>;
};
export type GeneralStudyTipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GeneralStudyTipCreateManyInput | Prisma.GeneralStudyTipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GeneralStudyTipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    data: Prisma.GeneralStudyTipCreateManyInput | Prisma.GeneralStudyTipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GeneralStudyTipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneralStudyTipUpdateInput, Prisma.GeneralStudyTipUncheckedUpdateInput>;
    where: Prisma.GeneralStudyTipWhereUniqueInput;
};
export type GeneralStudyTipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GeneralStudyTipUpdateManyMutationInput, Prisma.GeneralStudyTipUncheckedUpdateManyInput>;
    where?: Prisma.GeneralStudyTipWhereInput;
    limit?: number;
};
export type GeneralStudyTipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneralStudyTipUpdateManyMutationInput, Prisma.GeneralStudyTipUncheckedUpdateManyInput>;
    where?: Prisma.GeneralStudyTipWhereInput;
    limit?: number;
};
export type GeneralStudyTipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where: Prisma.GeneralStudyTipWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneralStudyTipCreateInput, Prisma.GeneralStudyTipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GeneralStudyTipUpdateInput, Prisma.GeneralStudyTipUncheckedUpdateInput>;
};
export type GeneralStudyTipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
    where: Prisma.GeneralStudyTipWhereUniqueInput;
};
export type GeneralStudyTipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneralStudyTipWhereInput;
    limit?: number;
};
export type GeneralStudyTipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneralStudyTipSelect<ExtArgs> | null;
    omit?: Prisma.GeneralStudyTipOmit<ExtArgs> | null;
};
export {};
