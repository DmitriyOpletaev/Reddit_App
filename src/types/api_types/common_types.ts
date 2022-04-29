export interface AllAwarding {
    award_sub_type: string
    award_type: string
    awardings_required_to_grant_benefits?: number|unknown
    coin_price: number
    coin_reward: number
    count: number
    days_of_drip_extension?: unknown|number
    days_of_premium?: number
    description: string
    end_date: unknown
    giver_coin_reward: unknown
    icon_format?: string
    icon_height: number
    icon_url: string
    icon_width: number
    id: string
    is_enabled: boolean
    is_new: boolean
    name: string
    penny_donate: unknown
    penny_price?: number
    resized_icons: Metadata[]
    resized_static_icons: Metadata[]
    start_date: unknown
    static_icon_height: number
    static_icon_url: string
    static_icon_width: number
    subreddit_coin_reward: number
    subreddit_id: unknown
    tiers_by_required_awardings?:TiersByRequiredAwardings | unknown
}


//------------------------------------------------------------------------


export interface TiersByRequiredAwardings {
    '0': TiersByRequiredAwardingsElement
    [key:string]:TiersByRequiredAwardingsElement|undefined
}
interface TiersByRequiredAwardingsElement {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: Icon<'undefined'>
    resized_static_icons: Metadata[]
    icon: Icon<'string'>
}

 interface Icon<Format  extends 'string'|'undefined'> extends Metadata{
    format: Format extends 'string' ? string : undefined
}

export interface Metadata{
    url: string
    width: number
    height: number
}


//--------------------------------------------------------------------------------


export interface MediaMetadata {
    [key:string]:MediaMetadataElement
}
 interface MediaMetadataElement{
    status: string
    e: string
    m: string
    p: P[]
    s: P
    id: string
}
 interface P{
    y: number
    x: number
    u: string
}


//--------------------------------------------------------------------------------


export interface FlairRichtext {
    e: string
    t?: string
    a?: string
    u?: string
}


//--------------------------------------------------------------------------------


export interface MediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
}


//--------------------------------------------------------------------------------


export interface Image {
    source: Metadata
    resolutions: Metadata[]
    variants: Variants
    id: string
}
interface Variants {
    gif?: SourceAndResolutionsData
    mp4?: SourceAndResolutionsData
    obfuscated?: SourceAndResolutionsData
    nsfw?: SourceAndResolutionsData
}
 interface SourceAndResolutionsData {
    source: Metadata
    resolutions: Metadata[]
}


//-------------------------------------------------------------


export interface GalleryData {
    items: Item[]
}
interface Item {
    caption?: string
    media_id: string
    id: number
}


//------------------------------------------------------------------


export interface Preview {
    images: Image[]
    enabled: boolean
    reddit_video_preview?: RedditVideo
}
export interface SecureMedia {
    type?: string
    oembed?: Oembed
    reddit_video?: RedditVideo
}
 interface RedditVideo {
    bitrate_kbps?: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
}
 interface Oembed {
    provider_url: string
    version: string
    title?: string
    type: string
    thumbnail_width?: number
    height?: number
    width?: number
    html: string
    author_name?: string
    provider_name: string
    thumbnail_url?: string
    thumbnail_height?: number
    author_url?: string
    description?: string
    url?: string
    cache_age?: number
}



//-----------------------------------------------



export interface Gildings {
    [key:string]: number|undefined
}


export interface SecureMediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
}

export interface PollData {
    prediction_status: unknown
    total_stake_amount: unknown
    voting_end_timestamp: number
    options: Option[]
    vote_updates_remained: unknown
    is_prediction: boolean
    resolved_option_id: unknown
    user_won_amount: unknown
    user_selection: unknown
    total_vote_count: number
    tournament_id: unknown
}

interface Option {
    text: string
    id: string
}
































