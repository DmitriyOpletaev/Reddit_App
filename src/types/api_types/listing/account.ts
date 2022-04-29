import {SrDetail} from "./subreddit";

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
    subreddit?: SrDetail
    verified?: boolean
}