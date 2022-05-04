type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type GetPostsParamsType = {
    after?: string
    before?: string
    count?: number
    limit?: Range<1, 101> //max-100
    show?: 'all'
    sr_detail?: 'expand subreddits',
    raw_json?:1
}

export type PostsSortType = 'best' | 'new' | 'rising' | 'hot' | 'top'

export type SearchCommunityParams = {
    include_over_18?: boolean,
    include_profiles?: boolean,
    query:string
}