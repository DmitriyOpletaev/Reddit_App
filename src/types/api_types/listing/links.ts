import {
    AllAwarding, FlairRichtext, GalleryData, Gildings, MediaEmbed,
    MediaMetadata, PollData, Preview, SecureMedia, SecureMediaEmbed
} from "../common_types";
import {SrDetail} from "./subreddit";


export interface RedditAPILink extends Link{
    call_to_action?: string
    category?: string
    poll_data?: PollData
    crosspost_parent_list?: CrosspostParentList[]
    content_categories?: string[]
    distinguished?: string
    crosspost_parent?: string
    edited: unknown
}
interface CrosspostParentList extends Link{
    category: unknown
    content_categories: unknown
    distinguished: unknown
    edited: boolean
}
interface Link {
    all_awardings: AllAwarding[]
    allow_live_comments: boolean
    approved_at_utc: unknown
    approved_by: unknown
    archived: boolean
    author: string
    author_flair_background_color?: string
    author_flair_css_class?: string
    author_flair_richtext?: FlairRichtext[]
    author_flair_template_id?: string
    author_flair_text?: string
    author_flair_text_color?: string
    author_flair_type?: string
    author_fullname?: string
    author_is_blocked: boolean
    author_patreon_flair?: boolean
    author_premium?: boolean
    awarders: unknown[]
    banned_at_utc: unknown
    banned_by: unknown
    can_gild: boolean
    can_mod_post: boolean
    clicked: boolean
    contest_mode: boolean
    created: number
    created_utc: number
    discussion_type: unknown
    domain: string
    downs: number //коефіцієнт голосів проти --- завжди = 0
    gallery_data?: GalleryData
    gilded: number
    gildings: Gildings
    hidden: boolean
    hide_score: boolean  // is  showing score
    id: string
    is_created_from_ads_ui: boolean
    is_crosspostable: boolean
    is_gallery?: boolean
    is_meta: boolean
    is_original_content: boolean
    is_reddit_media_domain: boolean
    is_robot_indexable: boolean
    is_self: boolean
    is_video: boolean
    likes: true|false|null // like, dislike,none
    link_flair_background_color: string
    link_flair_css_class?: string
    link_flair_richtext: FlairRichtext[]
    link_flair_template_id?: string
    link_flair_text?: string
    link_flair_text_color: string
    link_flair_type: string
    locked: boolean
    media?: SecureMedia
    media_embed: MediaEmbed
    media_metadata?: MediaMetadata
    media_only: boolean
    mod_note: unknown
    mod_reason_by: unknown
    mod_reason_title: unknown
    mod_reports: unknown[]
    name: string
    no_follow: boolean
    num_comments: number
    num_crossposts: number
    num_reports: unknown
    over_18: boolean
    parent_whitelist_status: string
    permalink: string
    pinned: boolean
    post_hint?: string
    preview?: Preview
    pwls: number
    quarantine: boolean
    removal_reason: unknown
    removed_by: unknown
    removed_by_category?: string
    report_reasons: unknown
    saved: boolean
    score: number //rating 0 - 1
    secure_media?: SecureMedia
    secure_media_embed: SecureMediaEmbed
    selftext: string
    selftext_html?: string
    send_replies: boolean
    spoiler: boolean
    sr_detail: SrDetail
    stickied: boolean
    subreddit: string
    subreddit_id: string
    subreddit_name_prefixed: string
    subreddit_subscribers: number
    subreddit_type: string
    suggested_sort?: string
    thumbnail: string
    thumbnail_height?: number
    thumbnail_width?: number
    title: string
    top_awarded_type?: string
    total_awards_received: number
    treatment_tags: unknown[]
    ups: number //коефіцієнт голосів за
    upvote_ratio: number
    url: string
    url_overridden_by_dest?: string
    user_reports: unknown[]
    view_count: unknown
    visited: boolean
    whitelist_status: string
    wls: number
}