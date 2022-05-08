
export interface SrDetail{
    accept_followers: boolean
    allow_chat_post_creation?: boolean
    banner_img?: string
    banner_size?: number[]
    community_icon?: string
    created: number
    created_utc: number
    default_set: boolean
    description: string
    disable_contributor_requests: boolean
    display_name: string
    display_name_prefixed: string
    free_form_reports: boolean
    header_img?: string
    header_size?: number[]
    icon_color: string
    icon_img: string
    icon_size?: number[]
    is_chat_post_feature_enabled?: boolean
    key_color: string
    link_flair_enabled: boolean
    link_flair_position?: string
    name: string
    over_18: boolean
    previous_names: unknown[]
    primary_color: string
    public_description: string
    quarantine: boolean
    restrict_commenting: boolean
    restrict_posting: boolean
    show_media: boolean
    submit_link_label?: string
    submit_text_label?: string
    subreddit_type: SubredditType
    subscribers: number
    title: string
    url: string
    user_is_banned: boolean|null
    user_is_contributor: boolean|null
    user_is_moderator: boolean|null
    user_is_muted: boolean|null
    user_is_subscriber: boolean|null
}

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