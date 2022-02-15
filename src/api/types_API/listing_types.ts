export interface Root {
    kind: string
    data: Data
}

export interface Data {
    after: string
    dist: number
    modhash: any
    geo_filter: any
    children: Children[]
    before: any
}

export interface Children {
    kind: string
    data: Data2
}

export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: any[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height: number
    top_awarded_type?: string
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color: any
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width: number
    author_flair_template_id?: string
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text: any
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class?: string
    author_flair_richtext: any[]
    gildings: Gildings
    post_hint?: string
    content_categories: any
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html: any
    likes: any
    suggested_sort: any
    banned_at_utc: any
    url_overridden_by_dest: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview?: Preview
    all_awardings: AllAwarding[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    is_gallery?: boolean
    media_metadata?: MediaMetadata
    gallery_data?: GalleryData
}

export interface MediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
}

export interface SecureMedia {
    type: string
    oembed: Oembed
}

export interface Oembed {
    provider_url: string
    description: string
    title: string
    type: string
    author_name: string
    height: number
    width: number
    html: string
    thumbnail_width: number
    version: string
    provider_name: string
    thumbnail_url: string
    thumbnail_height: number
}

export interface SecureMediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
}

export interface Gildings {
    gid_1?: number
    gid_2?: number
}

export interface Preview {
    images: Image[]
    enabled: boolean
    reddit_video_preview?: RedditVideoPreview
}

export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
}

export interface Source {
    url: string
    width: number
    height: number
}

export interface Resolution {
    url: string
    width: number
    height: number
}

export interface Variants {
    gif?: Gif
    mp4?: Mp4
}

export interface Gif {
    source: Source2
    resolutions: Resolution2[]
}

export interface Source2 {
    url: string
    width: number
    height: number
}

export interface Resolution2 {
    url: string
    width: number
    height: number
}

export interface Mp4 {
    source: Source3
    resolutions: Resolution3[]
}

export interface Source3 {
    url: string
    width: number
    height: number
}

export interface Resolution3 {
    url: string
    width: number
    height: number
}

export interface RedditVideoPreview {
    bitrate_kbps: number
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

export interface AllAwarding {
    giver_coin_reward?: number
    subreddit_id?: string
    is_new: boolean
    days_of_drip_extension: number
    coin_price: number
    id: string
    penny_donate?: number
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium: number
    tiers_by_required_awardings: any
    resized_icons: ResizedIcon[]
    icon_width: number
    static_icon_width: number
    start_date: any
    is_enabled: boolean
    awardings_required_to_grant_benefits: any
    description: string
    end_date: any
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: ResizedStaticIcon[]
    icon_format?: string
    icon_height: number
    penny_price?: number
    award_type: string
    static_icon_url: string
}

export interface ResizedIcon {
    url: string
    width: number
    height: number
}

export interface ResizedStaticIcon {
    url: string
    width: number
    height: number
}

export interface Media {
    type: string
    oembed: Oembed2
    reddit_video:{
        fallback_url:string
    }
}

export interface Oembed2 {
    provider_url: string
    description: string
    title: string
    type: string
    author_name: string
    height: number
    width: number
    html: string
    thumbnail_width: number
    version: string
    provider_name: string
    thumbnail_url: string
    thumbnail_height: number
}

export interface MediaMetadata {
    "2tqecr65feh81": N2tqecr65feh81
    ne14nt65feh81: Ne14nt65feh81
    "8aknpr65feh81": N8aknpr65feh81
    gruhzt65feh81: Gruhzt65feh81
    nl3srt65feh81: Nl3srt65feh81
    cbad0q65feh81: Cbad0q65feh81
    amefvq65feh81: Amefvq65feh81
    "1akw9q65feh81": N1akw9q65feh81
    l44dpp65feh81: L44dpp65feh81
    zvkj3q65feh81: Zvkj3q65feh81
    albdns65feh81: Albdns65feh81
    wd3qit65feh81: Wd3qit65feh81
}

export interface N2tqecr65feh81 {
    status: string
    e: string
    m: string
    p: P[]
    s: S
    id: string
}

export interface P {
    y: number
    x: number
    u: string
}

export interface S {
    y: number
    x: number
    u: string
}

export interface Ne14nt65feh81 {
    status: string
    e: string
    m: string
    p: P2[]
    s: S2
    id: string
}

export interface P2 {
    y: number
    x: number
    u: string
}

export interface S2 {
    y: number
    x: number
    u: string
}

export interface N8aknpr65feh81 {
    status: string
    e: string
    m: string
    p: P3[]
    s: S3
    id: string
}

export interface P3 {
    y: number
    x: number
    u: string
}

export interface S3 {
    y: number
    x: number
    u: string
}

export interface Gruhzt65feh81 {
    status: string
    e: string
    m: string
    p: P4[]
    s: S4
    id: string
}

export interface P4 {
    y: number
    x: number
    u: string
}

export interface S4 {
    y: number
    x: number
    u: string
}

export interface Nl3srt65feh81 {
    status: string
    e: string
    m: string
    p: P5[]
    s: S5
    id: string
}

export interface P5 {
    y: number
    x: number
    u: string
}

export interface S5 {
    y: number
    x: number
    u: string
}

export interface Cbad0q65feh81 {
    status: string
    e: string
    m: string
    p: P6[]
    s: S6
    id: string
}

export interface P6 {
    y: number
    x: number
    u: string
}

export interface S6 {
    y: number
    x: number
    u: string
}

export interface Amefvq65feh81 {
    status: string
    e: string
    m: string
    p: P7[]
    s: S7
    id: string
}

export interface P7 {
    y: number
    x: number
    u: string
}

export interface S7 {
    y: number
    x: number
    u: string
}

export interface N1akw9q65feh81 {
    status: string
    e: string
    m: string
    p: P8[]
    s: S8
    id: string
}

export interface P8 {
    y: number
    x: number
    u: string
}

export interface S8 {
    y: number
    x: number
    u: string
}

export interface L44dpp65feh81 {
    status: string
    e: string
    m: string
    p: P9[]
    s: S9
    id: string
}

export interface P9 {
    y: number
    x: number
    u: string
}

export interface S9 {
    y: number
    x: number
    u: string
}

export interface Zvkj3q65feh81 {
    status: string
    e: string
    m: string
    p: P10[]
    s: S10
    id: string
}

export interface P10 {
    y: number
    x: number
    u: string
}

export interface S10 {
    y: number
    x: number
    u: string
}

export interface Albdns65feh81 {
    status: string
    e: string
    m: string
    p: P11[]
    s: S11
    id: string
}

export interface P11 {
    y: number
    x: number
    u: string
}

export interface S11 {
    y: number
    x: number
    u: string
}

export interface Wd3qit65feh81 {
    status: string
    e: string
    m: string
    p: P12[]
    s: S12
    id: string
}

export interface P12 {
    y: number
    x: number
    u: string
}

export interface S12 {
    y: number
    x: number
    u: string
}

export interface GalleryData {
    items: Item[]
}

export interface Item {
    media_id: string
    id: number
}
