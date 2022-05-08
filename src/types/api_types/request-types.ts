type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export interface GetCommunityPostsParamsType<Show extends 'all' | 'given' = 'all'> {
    after?: string
    before?: string
    count?: Range<1, 101>
    limit?: Range<1, 101> //max-100
    show?: Show
    sr_detail?: 'expand subreddits',
    raw_json?: 1
}

export interface GetUserPostsParamsType extends GetCommunityPostsParamsType<'given'> {
    username?: string
    context?: Range<2, 10>
    type: 'links' | 'comments'
    t: 'hour' | 'day' | 'week' | 'month' | 'year' | 'all'
    sort: UserPostsSort
}

export enum CommunityPostsSort {
    Best = 'best',
    New = 'new',
    Top = 'top',
    Rising = 'rising',
    Hot = 'hot',
}

export enum UserPostsSort {
    Controversial = 'controversial',
    New = 'new',
    Top = 'top',
    Hot = 'hot',
}


export type ApiRequest = {
    searchCommunityParams: SearchCommunityParams
    subscribeCommunityParams: SubscribeCommunityParams
    ratePostParams:RatePostParams
}

type SearchCommunityParams = {
    include_over_18?: boolean,
    include_profiles?: boolean,
    query: string
}
type SubscribeCommunityParams = {
    action: 'sub' | 'unsub'
    sr: string // communityId ( 't5_asddas , t5_qfqgeq ' )
}
type RatePostParams = {
    dir: -1 | 0 | 1
    id:string
}


type User = {
    name: string
    id: number
    female: boolean
}

type Type = Pick<User, 'name' | 'id'>
const a: Type = {
    id: 5,
    name: 'asd'
}
type Type2 = Omit<User, 'id'>
const b: Type2 = {
    female: true, name: 'asd'
}

type User2 = {
    name?: string
    id?: number
    female?: boolean
}
type Type3 = Required<User2>
const c: Type3 = {
    female: true, name: 'as', id: 2
}













