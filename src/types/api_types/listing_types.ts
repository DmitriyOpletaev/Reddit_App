export interface RedditAPIListingResponse<T extends RedditApiChildrenSubreddit|RedditApiChildrenLink|RedditApiChildrenUser>{
    kind: 'Listing'
    data: Data<T>
}


interface Data<T extends RedditApiChildrenSubreddit|RedditApiChildrenLink|RedditApiChildrenUser> {
    after: string | null
    before: string | null
    modhash: string | null
    children: Array<T>
}

export enum KindListing {
    Comment = 't1',
    Account = 't2',
    Link = 't3',
    Message = 't4',
    Subreddit = 't5',
    Award = 't6',
}
export type RedditApiChildrenSubreddit={
    kind:KindListing.Subreddit
    data: RedditAPISubreddit
}
export type RedditApiChildrenLink={
    kind:KindListing.Link
    data: RedditAPILink
}
export type RedditApiChildrenUser={
    kind:KindListing.Account
    data: RedditAPIAccount
}
//------------------------------------------------------------------------------------------------------------------

export type RedditAPISubreddit= {
    accept_followers: boolean | null
    accounts_active: null
    accounts_active_is_fuzzed: boolean | null
    active_user_count: null
    advertiser_category: AdvertiserCategory | null
    all_original_content: boolean | null
    allow_chat_post_creation?: boolean
    allow_discovery: boolean | null
    allow_galleries: boolean | null
    allow_images: boolean | null
    allow_polls: boolean | null
    allow_prediction_contributors: boolean
    allow_predictions: boolean
    allow_predictions_tournament: boolean
    allow_talks: boolean
    allow_videogifs: boolean
    allow_videos: boolean
    banner_background_color: null | string
    banner_background_image: string
    banner_img: null | string
    banner_size: number[] | null
    can_assign_link_flair: boolean
    can_assign_user_flair: boolean
    collapse_deleted_comments: boolean | null
    comment_score_hide_mins: number | null
    community_icon: string
    community_reviewed: boolean | null
    content_category?: string
    created: number
    created_utc: number
    description: null | string
    description_html: null | string
    disable_contributor_requests: boolean | null
    display_name: string
    display_name_prefixed: string
    emojis_custom_size: number[] | null
    emojis_enabled: boolean
    free_form_reports: boolean | null
    has_menu_widget: boolean
    header_img: null | string
    header_size: number[] | null
    header_title: null | string
    hide_ads: boolean | null
    icon_img: null | string
    icon_size: number[] | null
    id: string
    is_chat_post_feature_enabled?: boolean
    is_crosspostable_subreddit: boolean | null
    is_enrolled_in_new_modmail: null
    key_color: null | string
    lang: Lang | null
    link_flair_enabled: boolean | null
    link_flair_position: FlairPosition | null
    mobile_banner_image: null | string
    name: string  //fullname (напр. t5_sd56ad)
    notification_level: null | string
    original_content_tag_enabled: boolean | null
    over18: boolean | null
    prediction_leaderboard_entry_type: PredictionLeaderboardEntryType
    primary_color: null | string
    public_description: string
    public_description_html: null | string
    public_traffic: boolean | null
    quarantine: boolean | null
    restrict_commenting: boolean | null
    restrict_posting: boolean | null
    should_archive_posts: boolean | null
    show_media: boolean | null
    show_media_preview: boolean | null
    spoilers_enabled: boolean | null
    submission_type: SubmissionType | null
    submit_link_label: null | string
    submit_text: null | string
    submit_text_html: null | string
    submit_text_label: null | string
    subreddit_type: SubredditType
    subscribers: number | null
    suggested_comment_sort: null | string
    title: string
    url: string
    user_can_flair_in_sr: null
    user_flair_background_color: null
    user_flair_css_class: null
    user_flair_enabled_in_sr: boolean | null
    user_flair_position: FlairPosition | null
    user_flair_richtext: any[]
    user_flair_template_id: null
    user_flair_text: null
    user_flair_text_color: null
    user_flair_type: UserFlairType
    user_has_favorited: boolean | null
    user_is_banned: boolean | null
    user_is_contributor: boolean | null
    user_is_moderator: boolean | null
    user_is_muted: boolean | null
    user_is_subscriber: boolean | null
    user_sr_flair_enabled: null
    user_sr_theme_enabled: boolean | null
    videostream_links_count?: number
    whitelist_status: WhitelistStatus | null
    wiki_enabled: boolean | null
    wls: number | null
}

enum AdvertiserCategory {
    Empty = "",
    Entertainment = "Entertainment",
    Games = "Games",
    Lifestyles = "Lifestyles",
}

enum Lang {
    En = "en",
    Eo = "eo",
    Es = "es",
}

enum FlairPosition {
    Empty = "",
    Left = "left",
    Right = "right",
}

enum PredictionLeaderboardEntryType {
    InFeed = "IN_FEED",
    SubredditHeader = "SUBREDDIT_HEADER",
}

enum SubmissionType {
    Any = "any",
    Link = "link",
    Self = "self",
}

enum SubredditType {
    Archived = "archived",
    GoldOnly = "gold_only",
    Private = "private",
    Public = "public",
    Restricted = "restricted",
}

enum UserFlairType {
    Text = "text",
}

enum WhitelistStatus {
    AllAds = "all_ads",
    NoAds = "no_ads",
    SomeAds = "some_ads",
}
//------------------------------------------------------------------------------------------------------------------

export type RedditAPIAccount = {
    accept_chats?: boolean
    accept_followers?: boolean
    accept_pms?: boolean
    comment_karma?: number
    created?: number
    created_utc?: number
    has_subscribed?: boolean
    has_verified_email?: boolean
    hide_from_robots?: boolean
    icon_img?: string
    id?: string
    is_blocked: boolean
    is_employee?: boolean
    is_friend?: boolean
    is_gold?: boolean
    is_mod?: boolean
    is_suspended?: boolean
    link_karma?: number
    name: string
    pref_show_snoovatar?: boolean
    snoovatar_img?: string
    snoovatar_size?: number[] | null
    subreddit?: RedditAPI_SubredditDetails
    verified?: boolean
}


//-----------------------------------------------------------------------------------------------------------------------------

export interface RedditAPILink {
    all_awardings: AllAwarding[];
    allow_live_comments: boolean;
    approved_at_utc: null;
    approved_by: null;
    archived: boolean;
    author: string;
    author_flair_background_color: null | string;
    author_flair_css_class: null | string;
    author_flair_richtext: FlairRichtext[];
    author_flair_template_id: null | string;
    author_flair_text: null | string;
    author_flair_text_color: FlairTextColor | null;
    author_flair_type: FlairType;
    author_fullname: string;
    author_is_blocked: boolean;
    author_patreon_flair: boolean;
    author_premium: boolean;
    awarders: any[];
    banned_at_utc: null;
    banned_by: null;
    can_gild: boolean;
    can_mod_post: boolean;
    category: null;
    clicked: boolean;
    content_categories: string[] | null;
    contest_mode: boolean;
    created: number;
    created_utc: number;
    crosspost_parent?: string;
    crosspost_parent_list?: CrosspostParentList[];
    discussion_type: null;
    distinguished: null;
    domain: string;
    downs: number;
    edited: boolean | number;
    gilded: number;
    gildings: DataGildings;
    hidden: boolean;
    hide_score: boolean;
    id: string;
    is_created_from_ads_ui: boolean;
    is_crosspostable: boolean;
    is_meta: boolean;
    is_original_content: boolean;
    is_reddit_media_domain: boolean;
    is_robot_indexable: boolean;
    is_self: boolean;
    is_video: boolean;
    likes: null;
    link_flair_background_color: string;
    link_flair_css_class: null | string;
    link_flair_richtext: FlairRichtext[];
    link_flair_template_id?: string;
    link_flair_text: null | string;
    link_flair_text_color: FlairTextColor;
    link_flair_type: FlairType;
    locked: boolean;
    media: DataMedia | null;
    media_embed: MediaEmbed;
    media_metadata?: MediaMetadata;
    media_only: boolean;
    mod_note: null;
    mod_reason_by: null;
    mod_reason_title: null;
    mod_reports: any[];
    name: string;
    no_follow: boolean;
    num_comments: number;
    num_crossposts: number;
    num_reports: null;
    over_18: boolean;
    parent_whitelist_status: WhitelistStatus;
    permalink: string;
    pinned: boolean;
    poll_data?: PollData;
    post_hint?: PostHint;
    preview?: DataPreview;
    pwls: number;
    quarantine: boolean;
    removal_reason: null;
    removed_by: null;
    removed_by_category: null;
    report_reasons: null;
    saved: boolean;
    score: number;
    secure_media: DataMedia | null;
    secure_media_embed: MediaEmbed;
    selftext: string;
    selftext_html: null | string;
    send_replies: boolean;
    spoiler: boolean;
    stickied: boolean;
    subreddit: string;
    subreddit_id: string;
    subreddit_name_prefixed: string;
    subreddit_subscribers: number;
    subreddit_type: SubredditType;
    suggested_sort: SuggestedSort | null
    sr_detail:RedditAPI_SubredditDetails
    thumbnail: string;
    thumbnail_height: number | null;
    thumbnail_width: number | null;
    title: string;
    top_awarded_type: null | string;
    total_awards_received: number;
    treatment_tags: any[];
    ups: number;
    upvote_ratio: number;
    url: string;
    url_overridden_by_dest?: string;
    user_reports: any[];
    view_count: null;
    visited: boolean;
    whitelist_status: WhitelistStatus;
    wls: number;
}

interface AllAwarding {
    award_sub_type: AwardSubType;
    award_type: AwardType;
    awardings_required_to_grant_benefits: number | null;
    coin_price: number;
    coin_reward: number;
    count: number;
    days_of_drip_extension: number;
    days_of_premium: number;
    description: string;
    end_date: null;
    giver_coin_reward: number | null;
    icon_format: Format | null;
    icon_height: number;
    icon_url: string;
    icon_width: number;
    id: string;
    is_enabled: boolean;
    is_new: boolean;
    name: string;
    penny_donate: number | null;
    penny_price: number | null;
    resized_icons: ResizedIcon[];
    resized_static_icons: ResizedIcon[];
    start_date: null;
    static_icon_height: number;
    static_icon_url: string;
    static_icon_width: number;
    subreddit_coin_reward: number;
    subreddit_id: null | string;
    tiers_by_required_awardings: { [key: string]: TiersByRequiredAwarding } | null;
}

enum AwardSubType {
    Appreciation = "APPRECIATION",
    Community = "COMMUNITY",
    Global = "GLOBAL",
    Group = "GROUP",
    Premium = "PREMIUM",
}

enum AwardType {
    Community = "community",
    Global = "global",
}

enum Format {
    Apng = "APNG",
    PNG = "PNG",
}

interface ResizedIcon {
    url: string;
    width: number;
    height: number;
    format?: Format | null;
}

interface TiersByRequiredAwarding {
    resized_icons: ResizedIcon[];
    awardings_required: number;
    static_icon: ResizedIcon;
    resized_static_icons: ResizedIcon[];
    icon: ResizedIcon;
}

interface FlairRichtext {
    a?: string;
    e: E;
    u?: string;
    t?: string;
}

enum E {
    Emoji = "emoji",
    Text = "text",
}

enum FlairTextColor {
    Dark = "dark",
    Empty = "",
    Light = "light",
}

enum FlairType {
    Richtext = "richtext",
    Text = "text",
}

interface CrosspostParentList {
    approved_at_utc: null;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: null | string;
    downs: number;
    thumbnail_height: number;
    top_awarded_type: null;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: FlairTextColor;
    upvote_ratio: number;
    author_flair_background_color: null;
    subreddit_type: SubredditType;
    ups: number;
    total_awards_received: number;
    media_embed: Facets;
    thumbnail_width: number;
    author_flair_template_id: null;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: CrosspostParentListMedia | null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: Facets;
    link_flair_text: null | string;
    can_mod_post: boolean;
    score: number;
    approved_by: null;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: null;
    author_flair_richtext: any[];
    gildings: CrosspostParentListGildings;
    post_hint: PostHint;
    content_categories: null;
    is_self: boolean;
    mod_note: null;
    created: number;
    link_flair_type: E;
    wls: number;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: E;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: CrosspostParentListPreview;
    all_awardings: AllAwarding[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: null;
    treatment_tags: any[];
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: null;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons: null;
    author: string;
    discussion_type: null;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: WhitelistStatus;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: null;
    permalink: string;
    parent_whitelist_status: WhitelistStatus;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: CrosspostParentListMedia | null;
    is_video: boolean;
    link_flair_template_id?: string;
}

interface CrosspostParentListGildings {
    gid_1?: number;
}

interface CrosspostParentListMedia {
    reddit_video: RedditVideo;
}

interface RedditVideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: TranscodingStatus;
}

enum TranscodingStatus {
    Completed = "completed",
}

interface Facets {
}


enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
    Link = "link",
    RichVideo = "rich:video",
    Self = "self",
}

interface CrosspostParentListPreview {
    images: PurpleImage[];
    enabled: boolean;
}

interface PurpleImage {
    source: ResizedIcon;
    resolutions: ResizedIcon[];
    variants: Facets;
    id: string;
}

interface DataGildings {
    gid_1?: number;
    gid_2?: number;
    gid_3?: number;
}

interface DataMedia {
    reddit_video?: RedditVideo;
    type?: string;
    oembed?: Oembed;
}

interface Oembed {
    provider_url: string;
    version: string;
    title: string;
    type: string;
    thumbnail_width: number;
    height: number;
    width: number;
    html: string;
    author_name: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
}

interface MediaEmbed {
    content?: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
    media_domain_url?: string;
}

interface MediaMetadata {
    uwnlb1tl9ze81?: Ml4N22Rjc9C81;
    tiwq6semc9c81?: Ml4N22Rjc9C81;
    ml4n22rjc9c81?: Ml4N22Rjc9C81;
    g8qihv72c9c81?: G8Qihv72C9C81;
}

interface G8Qihv72C9C81 {
    status: string;
    e: string;
    m: string;
    p: SElement[];
    s: PurpleS;
    id: string;
}

interface SElement {
    y: number;
    x: number;
    u: string;
}

interface PurpleS {
    y: number;
    gif: string;
    mp4: string;
    x: number;
}

interface Ml4N22Rjc9C81 {
    status: string;
    e: string;
    m: string;
    p: SElement[];
    s: SElement;
    id: string;
}

interface PollData {
    prediction_status: null;
    total_stake_amount: null;
    voting_end_timestamp: number;
    options: Option[];
    vote_updates_remained: null;
    is_prediction: boolean;
    resolved_option_id: null;
    user_won_amount: null;
    user_selection: null;
    total_vote_count: number;
    tournament_id: null;
}

interface Option {
    text: string;
    vote_count: number;
    id: string;
}

interface DataPreview {
    images: FluffyImage[];
    enabled: boolean;
}

interface FluffyImage {
    source: ResizedIcon;
    resolutions: ResizedIcon[];
    variants: Variants;
    id: string;
}

interface Variants {
    obfuscated?: GIF;
    gif?: GIF;
    mp4?: GIF;
}

interface GIF {
    source: ResizedIcon;
    resolutions: ResizedIcon[];
}

enum SuggestedSort {
    Confidence = "confidence",
    Top = "top",
}




export type RedditAPI_SubredditDetails ={
    accept_followers: boolean
    banner_img: string
    banner_size: number[] | null
    community_icon: null
    default_set: boolean
    description: string
    disable_contributor_requests: boolean
    display_name: string
    display_name_prefixed: string
    free_form_reports: boolean
    header_img: null
    header_size: null
    icon_color: string
    icon_img: string
    icon_size: number[]
    is_default_banner: boolean
    is_default_icon: boolean
    key_color: string
    link_flair_enabled: boolean
    link_flair_position: string
    name: string
    over_18: boolean
    previous_names: any[]
    primary_color: string
    public_description: string
    quarantine: boolean
    restrict_commenting: boolean
    restrict_posting: boolean
    show_media: boolean
    submit_link_label: string
    submit_text_label: string
    subreddit_type: string
    subscribers: number
    title: string
    url: string
    user_is_banned: boolean
    user_is_contributor: boolean
    user_is_moderator: boolean
    user_is_muted: boolean
    user_is_subscriber: boolean
}
