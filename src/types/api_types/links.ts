import {Metadata} from "./common_types";


export interface RedditAPILink {
    approved_at_utc: unknown
    subreddit: string
    selftext: string
    author_fullname?: string
    saved: boolean
    mod_reason_title: unknown
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height?: number
    top_awarded_type?: string
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color?: string
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width?: number
    author_flair_template_id?: string
    is_original_content: boolean
    user_reports: unknown[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category?: string
    secure_media_embed: SecureMediaEmbed
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: unknown
    is_created_from_ads_ui: boolean
    author_premium?: boolean
    thumbnail: string
    edited: unknown
    author_flair_css_class?: string
    author_flair_richtext?: AuthorFlairRichtext[]
    gildings: Gildings
    post_hint?: string
    content_categories?: string[]
    is_self: boolean
    mod_note: unknown
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: unknown
    banned_by: unknown
    author_flair_type?: string
    domain: string
    allow_live_comments: boolean
    selftext_html?: string
    likes: unknown
    suggested_sort?: string
    banned_at_utc: unknown
    view_count: unknown
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview?: Preview
    all_awardings: AllAwarding[]
    awarders: unknown[]
    media_only: boolean
    sr_detail: SrDetail
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: unknown[]
    visited: boolean
    removed_by: unknown
    num_reports: unknown
    distinguished?: string
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: unknown
    removal_reason: unknown
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: unknown
    author: string
    discussion_type: unknown
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: unknown[]
    author_patreon_flair?: boolean
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
    url_overridden_by_dest?: string
    call_to_action?: string
    link_flair_template_id?: string
    media_metadata?: MediaMetadata
    poll_data?: PollData
    crosspost_parent_list?: CrosspostParentList[]
    crosspost_parent?: string
    is_gallery?: boolean
    gallery_data?: GalleryData2
}

export interface LinkFlairRichtext {
    e: string
    t?: string
    a?: string
    u?: string
}

export interface MediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
}

export interface SecureMedia {
    type?: string
    oembed?: Oembed
    reddit_video?: RedditVideo
}

export interface Oembed {
    provider_url: string
    version: string
    title?: string
    type: string
    thumbnail_width?: number
    height?: number
    width: number
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

export interface RedditVideo {
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

export interface SecureMediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
}

export interface AuthorFlairRichtext {
    a?: string
    e: string
    u?: string
    t?: string
}

export interface Gildings {
    gid_1?: number
    gid_2?: number
    gid_3?: number
}

export interface Preview {
    images: Image[]
    enabled: boolean
    reddit_video_preview?: RedditVideoPreview
}

export interface Image {
    source: Metadata
    resolutions: Metadata[]
    variants: Variants
    id: string
}





export interface Variants {
    gif?: Gif
    mp4?: Mp4
    obfuscated?: Obfuscated
    nsfw?: Nsfw
}

export interface Gif {
    source: Metadata
    resolutions: Metadata[]
}





export interface Mp4 {
    source: Metadata
    resolutions: Metadata[]
}





export interface Obfuscated {
    source: Metadata
    resolutions: Metadata[]
}





export interface Nsfw {
    source: Metadata
    resolutions: Metadata[]
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
    giver_coin_reward: unknown
    subreddit_id: unknown
    is_new: boolean
    days_of_drip_extension?: number
    coin_price: number
    id: string
    penny_donate: unknown
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium?: number
    tiers_by_required_awardings?: TiersByRequiredAwardings
    resized_icons: Metadata[]
    icon_width: number
    static_icon_width: number
    start_date: unknown
    is_enabled: boolean
    awardings_required_to_grant_benefits?: number
    description: string
    end_date: unknown
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: Metadata[]
    icon_format?: string
    icon_height: number
    penny_price?: number
    award_type: string
    static_icon_url: string
}

export interface TiersByRequiredAwardings {
    "0": N0
    "3"?: N3
    "6"?: N6
    "9"?: N9
    "5"?: N5
    "10"?: N10
    "25"?: N25
}

export interface N0 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon
    resized_static_icons: Metadata[]
    icon: Icon
}



export interface StaticIcon {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon {
    url: string
    width: number
    format: string
    height: number
}

export interface N3 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon2
    resized_static_icons: Metadata[]
    icon: Icon2
}



export interface StaticIcon2 {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon2 {
    url: string
    width: number
    format: string
    height: number
}

export interface N6 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon3
    resized_static_icons: Metadata[]
    icon: Icon3
}



export interface StaticIcon3 {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon3 {
    url: string
    width: number
    format: string
    height: number
}

export interface N9 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon4
    resized_static_icons: Metadata[]
    icon: Icon4
}



export interface StaticIcon4 {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon4 {
    url: string
    width: number
    format: string
    height: number
}

export interface N5 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon5
    resized_static_icons: Metadata[]
    icon: Icon5
}



export interface StaticIcon5 {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon5 {
    url: string
    width: number
    format: string
    height: number
}

export interface N10 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon6
    resized_static_icons: Metadata[]
    icon: Icon6
}



export interface StaticIcon6 {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon6 {
    url: string
    width: number
    format: string
    height: number
}

export interface N25 {
    resized_icons: Metadata[]
    awardings_required: number
    static_icon: StaticIcon7
    resized_static_icons: Metadata[]
    icon: Icon7
}



export interface StaticIcon7 {
    url: string
    width: number
    format: unknown
    height: number
}



export interface Icon7 {
    url: string
    width: number
    format: string
    height: number
}





export interface SrDetail {
    default_set: boolean
    banner_img: string
    restrict_posting: boolean
    user_is_banned: boolean
    free_form_reports: boolean
    community_icon?: string
    show_media: boolean
    description: string
    user_is_muted: boolean
    display_name: string
    header_img?: string
    title: string
    previous_names: unknown[]
    user_is_moderator: boolean
    over_18: boolean
    icon_size?: number[]
    primary_color: string
    icon_img: string
    icon_color: string
    submit_link_label?: string
    header_size?: number[]
    restrict_commenting: boolean
    subscribers: number
    submit_text_label?: string
    link_flair_position: string
    display_name_prefixed: string
    key_color: string
    name: string
    created: number
    url: string
    quarantine: boolean
    created_utc: number
    banner_size?: number[]
    user_is_contributor: boolean
    accept_followers: boolean
    public_description: string
    link_flair_enabled: boolean
    disable_contributor_requests: boolean
    subreddit_type: string
    user_is_subscriber: boolean
    is_chat_post_feature_enabled?: boolean
    allow_chat_post_creation?: boolean
}

export interface Media {
    type?: string
    oembed?: Oembed2
    reddit_video?: RedditVideo2
}

export interface Oembed2 {
    provider_url: string
    version: string
    title?: string
    type: string
    thumbnail_width?: number
    height?: number
    width: number
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

export interface RedditVideo2 {
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

export interface MediaMetadata {
    "4190cv3naov81"?: N4190cv3naov81
    acfw4v3naov81?: Acfw4v3naov81
    "6y5zhv3naov81"?: N6y5zhv3naov81
    "4d2x3v3naov81"?: N4d2x3v3naov81
    cw1obv3naov81?: Cw1obv3naov81
    du3b2uv0wov81?: Du3b2uv0wov81
    qr1t86t0wov81?: Qr1t86t0wov81
    sghyz0o0wov81?: Sghyz0o0wov81
    "945xptq0wov81"?: N945xptq0wov81
    lgd0qztdqpv81?: Lgd0qztdqpv81
    v5rbt8mdqpv81?: V5rbt8mdqpv81
    "8oz3gvqdqpv81"?: N8oz3gvqdqpv81
    "0k8gs6wcqpv81"?: N0k8gs6wcqpv81
    f1edt3hdqpv81?: F1edt3hdqpv81
    wfz65kbdqpv81?: Wfz65kbdqpv81
    keyvr96dqpv81?: Keyvr96dqpv81
    "0g86vfy6rpv81"?: N0g86vfy6rpv81
    "0g213tt6rpv81"?: N0g213tt6rpv81
    b7oz1ow6rpv81?: B7oz1ow6rpv81
    bd7f5bx6rpv81?: Bd7f5bx6rpv81
    "7znp71s6rpv81"?: N7znp71s6rpv81
    fdw7rsx6rpv81?: Fdw7rsx6rpv81
    cner8bo6rpv81?: Cner8bo6rpv81
    h6j7j7v6rpv81?: H6j7j7v6rpv81
    cnu9f607rpv81?: Cnu9f607rpv81
    uk46sls6rpv81?: Uk46sls6rpv81
    h8alwlu6rpv81?: H8alwlu6rpv81
    tgb3ukq6rpv81?: Tgb3ukq6rpv81
    f3yaq817rpv81?: F3yaq817rpv81
    n9n8a6t6rpv81?: N9n8a6t6rpv81
    vd8liwv6rpv81?: Vd8liwv6rpv81
    p9uopr07rpv81?: P9uopr07rpv81
    vvgxkv17rpv81?: Vvgxkv17rpv81
    "144jfh27rpv81"?: N144jfh27rpv81
    v9pbbjz6rpv81?: V9pbbjz6rpv81
    c2vc8mkfrpv81?: C2vc8mkfrpv81
    "9g6z8nlfrpv81"?: N9g6z8nlfrpv81
    "8nmvb9mfrpv81"?: N8nmvb9mfrpv81
    ldn3q1gmspv81?: Ldn3q1gmspv81
    zhihq1gmspv81?: Zhihq1gmspv81
    j8v4q1gmspv81?: J8v4q1gmspv81
    q1t2z1gmspv81?: Q1t2z1gmspv81
    r7pdfnoatpv81?: R7pdfnoatpv81
    fspv2r3btpv81?: Fspv2r3btpv81
    "13yrq0aatpv81"?: N13yrq0aatpv81
    z5zt04wwwpv81?: Z5zt04wwwpv81
    "56qgs4wwwpv81"?: N56qgs4wwwpv81
    wglby7zadmv81?: Wglby7zadmv81
    o8nd58zadmv81?: O8nd58zadmv81
    "7m02imgdxmv81"?: N7m02imgdxmv81
    "3c6rtdgdxmv81"?: N3c6rtdgdxmv81
    "0uk0xdgdxmv81"?: N0uk0xdgdxmv81
    wqc0scgdxmv81?: Wqc0scgdxmv81
    at7yxkgdxmv81?: At7yxkgdxmv81
    krbrucgdxmv81?: Krbrucgdxmv81
    npnltg65lnv81?: Npnltg65lnv81
    "6zlngtk5lnv81"?: N6zlngtk5lnv81
    uju75ct4jov81?: Uju75ct4jov81
    "31k97dt4jov81"?: N31k97dt4jov81
    pkqiva8g0pv81?: Pkqiva8g0pv81
    "4q5i3vdg0pv81"?: N4q5i3vdg0pv81
    v1s6hrz4epv81?: V1s6hrz4epv81
    wjm8grz4epv81?: Wjm8grz4epv81
    qrx76qz4epv81?: Qrx76qz4epv81
    tjp6yqz4epv81?: Tjp6yqz4epv81
    s6ax6xe930s81?: S6ax6xe930s81
    s44pikk930s81?: S44pikk930s81
    prr2bcr930s81?: Prr2bcr930s81
    "4a8rbtm930s81"?: N4a8rbtm930s81
    g4nfar9930s81?: G4nfar9930s81
    m6o3zpr1g5s81?: M6o3zpr1g5s81
    a1wcaoe1g5s81?: A1wcaoe1g5s81
    bdghrdz1g5s81?: Bdghrdz1g5s81
    yt2wj0l1g5s81?: Yt2wj0l1g5s81
    yungo782g5s81?: Yungo782g5s81
    x7fc8zu1g5s81?: X7fc8zu1g5s81
    t22oe2y1g5s81?: T22oe2y1g5s81
    k4jlsx32g5s81?: K4jlsx32g5s81
    je4dnqo1g5s81?: Je4dnqo1g5s81
    uzdw7i4debs81?: Uzdw7i4debs81
    "4gya3i4debs81"?: N4gya3i4debs81
    njootvvjfts81?: Njootvvjfts81
    uvzrfwvjfts81?: Uvzrfwvjfts81
    hwi2lo6vkvs81?: Hwi2lo6vkvs81
    du8wrvhukvs81?: Du8wrvhukvs81
    i6cplwxukvs81?: I6cplwxukvs81
    p3ttobrukvs81?: P3ttobrukvs81
    tg1zgobw92t81?: Tg1zgobw92t81
    pvlw0pbw92t81?: Pvlw0pbw92t81
    lxorgpbw92t81?: Lxorgpbw92t81
    "6rxwoobw92t81"?: N6rxwoobw92t81
    k68my58ax2t81?: K68my58ax2t81
    uchs168ax2t81?: Uchs168ax2t81
    "6giz868ax2t81"?: N6giz868ax2t81
    "5ra3x58ax2t81"?: N5ra3x58ax2t81
    puakr58ax2t81?: Puakr58ax2t81
    l1xipaboj5t81?: L1xipaboj5t81
    vnpebq4pj5t81?: Vnpebq4pj5t81
    l7pvy64i8bt81?: L7pvy64i8bt81
    "2mykm2tj8bt81"?: N2mykm2tj8bt81
    "53jtpftenwt81"?: N53jtpftenwt81
    ll1zy3sub0u81?: Ll1zy3sub0u81
    a1jpwo7vb0u81?: A1jpwo7vb0u81
    rppc1p9ub0u81?: Rppc1p9ub0u81
    bua3ffkhc8u81?: Bua3ffkhc8u81
    cnoltduhc8u81?: Cnoltduhc8u81
    "3ah62ndic8u81"?: N3ah62ndic8u81
    sc7pklrhc8u81?: Sc7pklrhc8u81
    "680yb7whc8u81"?: N680yb7whc8u81
    wktl3r3otju81?: Wktl3r3otju81
    zhtpekejvju81?: Zhtpekejvju81
    qatb8z3otju81?: Qatb8z3otju81
    "95expj3otju81"?: N95expj3otju81
    "2l3y2z3otju81"?: N2l3y2z3otju81
    jib2pz3otju81?: Jib2pz3otju81
    z3nefz3otju81?: Z3nefz3otju81
    "4sxvdr3otju81"?: N4sxvdr3otju81
    go93lz3otju81?: Go93lz3otju81
    zrhnnu3otju81?: Zrhnnu3otju81
    ynk8qj3otju81?: Ynk8qj3otju81
    hqobcl3otju81?: Hqobcl3otju81
    "4t73us3otju81"?: N4t73us3otju81
    x4omdt3otju81?: X4omdt3otju81
    w6djhq3otju81?: W6djhq3otju81
    tf9pnrvyfku81?: Tf9pnrvyfku81
    "82oxyrvyfku81"?: N82oxyrvyfku81
    vd2n8jvyfku81?: Vd2n8jvyfku81
    ydbunnvyfku81?: Ydbunnvyfku81
    "8mxvbrvyfku81"?: N8mxvbrvyfku81
    "3f970cvyfku81"?: N3f970cvyfku81
    py52efvyfku81?: Py52efvyfku81
    tfzg3gvyfku81?: Tfzg3gvyfku81
    j8iisfvyfku81?: J8iisfvyfku81
    rfcd9rvyfku81?: Rfcd9rvyfku81
    gw2tqxkusqu81?: Gw2tqxkusqu81
    bc2e7xkusqu81?: Bc2e7xkusqu81
    tpapfxkusqu81?: Tpapfxkusqu81
    "0fpet4sqvxu81"?: N0fpet4sqvxu81
    qba7d4sqvxu81?: Qba7d4sqvxu81
    uyea65sqvxu81?: Uyea65sqvxu81
    djijh9fdwxu81?: Djijh9fdwxu81
    awihs9fdwxu81?: Awihs9fdwxu81
    iaqvo9fdwxu81?: Iaqvo9fdwxu81
    lehaqtix55v81?: Lehaqtix55v81
    d01tswix55v81?: D01tswix55v81
    ldtdtvix55v81?: Ldtdtvix55v81
    mhimfwix55v81?: Mhimfwix55v81
    "7g79qwix55v81"?: N7g79qwix55v81
    tr8oktix55v81?: Tr8oktix55v81
    "5ysputix55v81"?: N5ysputix55v81
    owzcxvix55v81?: Owzcxvix55v81
    in15es3tgev81?: In15es3tgev81
    cdqcrt3tgev81?: Cdqcrt3tgev81
    jfpafn3tgev81?: Jfpafn3tgev81
    "2uibd8z0civ81"?: N2uibd8z0civ81
    o52488z0civ81?: O52488z0civ81
    ojaci0czamv81?: Ojaci0czamv81
    rcxa51czamv81?: Rcxa51czamv81
    "82fv380ihkv81"?: N82fv380ihkv81
    i30gjm5r5mv81?: I30gjm5r5mv81
    k6y3xs1o5mv81?: K6y3xs1o5mv81
    zb3ck7jp5mv81?: Zb3ck7jp5mv81
    jr9r6uwx0nv81?: Jr9r6uwx0nv81
    qqfyonxq0nv81?: Qqfyonxq0nv81
    rcltxt2s0nv81?: Rcltxt2s0nv81
    u2eqe3sr0nv81?: U2eqe3sr0nv81
    vgubiosh2nv81?: Vgubiosh2nv81
    "7wfq8mlq0nv81"?: N7wfq8mlq0nv81
    s6nrzxwhhnv81?: S6nrzxwhhnv81
    "88ncbxwhhnv81"?: N88ncbxwhhnv81
    avc3wyb2kov81?: Avc3wyb2kov81
    wws4u2e2kov81?: Wws4u2e2kov81
    "51ctluf5jpv81"?: N51ctluf5jpv81
    "9f3bcgsdlpv81"?: N9f3bcgsdlpv81
    b3jorqkgmpv81?: B3jorqkgmpv81
    "2s9bnkjcxxu81"?: N2s9bnkjcxxu81
    c2rqt3mhccv81?: C2rqt3mhccv81
    fl0jh3mhccv81?: Fl0jh3mhccv81
    tvq2ol4xtcv81?: Tvq2ol4xtcv81
    rj5k3m4xtcv81?: Rj5k3m4xtcv81
    c7ndsjauxdv81?: C7ndsjauxdv81
    "7l34ox4uxdv81"?: N7l34ox4uxdv81
    wfmiqyowqov81?: Wfmiqyowqov81
}

export interface N4190cv3naov81 {
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

export interface Acfw4v3naov81 {
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

export interface N6y5zhv3naov81 {
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

export interface N4d2x3v3naov81 {
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

export interface Cw1obv3naov81 {
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

export interface Du3b2uv0wov81 {
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

export interface Qr1t86t0wov81 {
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

export interface Sghyz0o0wov81 {
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

export interface N945xptq0wov81 {
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

export interface Lgd0qztdqpv81 {
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

export interface V5rbt8mdqpv81 {
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

export interface N8oz3gvqdqpv81 {
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

export interface N0k8gs6wcqpv81 {
    status: string
    e: string
    m: string
    p: P13[]
    s: S13
    id: string
}

export interface P13 {
    y: number
    x: number
    u: string
}

export interface S13 {
    y: number
    x: number
    u: string
}

export interface F1edt3hdqpv81 {
    status: string
    e: string
    m: string
    p: P14[]
    s: S14
    id: string
}

export interface P14 {
    y: number
    x: number
    u: string
}

export interface S14 {
    y: number
    x: number
    u: string
}

export interface Wfz65kbdqpv81 {
    status: string
    e: string
    m: string
    p: P15[]
    s: S15
    id: string
}

export interface P15 {
    y: number
    x: number
    u: string
}

export interface S15 {
    y: number
    x: number
    u: string
}

export interface Keyvr96dqpv81 {
    status: string
    e: string
    m: string
    p: P16[]
    s: S16
    id: string
}

export interface P16 {
    y: number
    x: number
    u: string
}

export interface S16 {
    y: number
    x: number
    u: string
}

export interface N0g86vfy6rpv81 {
    status: string
    e: string
    m: string
    p: P17[]
    s: S17
    id: string
}

export interface P17 {
    y: number
    x: number
    u: string
}

export interface S17 {
    y: number
    x: number
    u: string
}

export interface N0g213tt6rpv81 {
    status: string
    e: string
    m: string
    p: P18[]
    s: S18
    id: string
}

export interface P18 {
    y: number
    x: number
    u: string
}

export interface S18 {
    y: number
    x: number
    u: string
}

export interface B7oz1ow6rpv81 {
    status: string
    e: string
    m: string
    p: P19[]
    s: S19
    id: string
}

export interface P19 {
    y: number
    x: number
    u: string
}

export interface S19 {
    y: number
    x: number
    u: string
}

export interface Bd7f5bx6rpv81 {
    status: string
    e: string
    m: string
    p: P20[]
    s: S20
    id: string
}

export interface P20 {
    y: number
    x: number
    u: string
}

export interface S20 {
    y: number
    x: number
    u: string
}

export interface N7znp71s6rpv81 {
    status: string
    e: string
    m: string
    p: P21[]
    s: S21
    id: string
}

export interface P21 {
    y: number
    x: number
    u: string
}

export interface S21 {
    y: number
    x: number
    u: string
}

export interface Fdw7rsx6rpv81 {
    status: string
    e: string
    m: string
    p: P22[]
    s: S22
    id: string
}

export interface P22 {
    y: number
    x: number
    u: string
}

export interface S22 {
    y: number
    x: number
    u: string
}

export interface Cner8bo6rpv81 {
    status: string
    e: string
    m: string
    p: P23[]
    s: S23
    id: string
}

export interface P23 {
    y: number
    x: number
    u: string
}

export interface S23 {
    y: number
    x: number
    u: string
}

export interface H6j7j7v6rpv81 {
    status: string
    e: string
    m: string
    p: P24[]
    s: S24
    id: string
}

export interface P24 {
    y: number
    x: number
    u: string
}

export interface S24 {
    y: number
    x: number
    u: string
}

export interface Cnu9f607rpv81 {
    status: string
    e: string
    m: string
    p: P25[]
    s: S25
    id: string
}

export interface P25 {
    y: number
    x: number
    u: string
}

export interface S25 {
    y: number
    x: number
    u: string
}

export interface Uk46sls6rpv81 {
    status: string
    e: string
    m: string
    p: P26[]
    s: S26
    id: string
}

export interface P26 {
    y: number
    x: number
    u: string
}

export interface S26 {
    y: number
    x: number
    u: string
}

export interface H8alwlu6rpv81 {
    status: string
    e: string
    m: string
    p: P27[]
    s: S27
    id: string
}

export interface P27 {
    y: number
    x: number
    u: string
}

export interface S27 {
    y: number
    x: number
    u: string
}

export interface Tgb3ukq6rpv81 {
    status: string
    e: string
    m: string
    p: P28[]
    s: S28
    id: string
}

export interface P28 {
    y: number
    x: number
    u: string
}

export interface S28 {
    y: number
    x: number
    u: string
}

export interface F3yaq817rpv81 {
    status: string
    e: string
    m: string
    p: P29[]
    s: S29
    id: string
}

export interface P29 {
    y: number
    x: number
    u: string
}

export interface S29 {
    y: number
    x: number
    u: string
}

export interface N9n8a6t6rpv81 {
    status: string
    e: string
    m: string
    p: P30[]
    s: S30
    id: string
}

export interface P30 {
    y: number
    x: number
    u: string
}

export interface S30 {
    y: number
    x: number
    u: string
}

export interface Vd8liwv6rpv81 {
    status: string
    e: string
    m: string
    p: P31[]
    s: S31
    id: string
}

export interface P31 {
    y: number
    x: number
    u: string
}

export interface S31 {
    y: number
    x: number
    u: string
}

export interface P9uopr07rpv81 {
    status: string
    e: string
    m: string
    p: P32[]
    s: S32
    id: string
}

export interface P32 {
    y: number
    x: number
    u: string
}

export interface S32 {
    y: number
    x: number
    u: string
}

export interface Vvgxkv17rpv81 {
    status: string
    e: string
    m: string
    p: P33[]
    s: S33
    id: string
}

export interface P33 {
    y: number
    x: number
    u: string
}

export interface S33 {
    y: number
    x: number
    u: string
}

export interface N144jfh27rpv81 {
    status: string
    e: string
    m: string
    p: P34[]
    s: S34
    id: string
}

export interface P34 {
    y: number
    x: number
    u: string
}

export interface S34 {
    y: number
    x: number
    u: string
}

export interface V9pbbjz6rpv81 {
    status: string
    e: string
    m: string
    p: P35[]
    s: S35
    id: string
}

export interface P35 {
    y: number
    x: number
    u: string
}

export interface S35 {
    y: number
    x: number
    u: string
}

export interface C2vc8mkfrpv81 {
    status: string
    e: string
    m: string
    p: P36[]
    s: S36
    id: string
}

export interface P36 {
    y: number
    x: number
    u: string
}

export interface S36 {
    y: number
    x: number
    u: string
}

export interface N9g6z8nlfrpv81 {
    status: string
    e: string
    m: string
    p: P37[]
    s: S37
    id: string
}

export interface P37 {
    y: number
    x: number
    u: string
}

export interface S37 {
    y: number
    x: number
    u: string
}

export interface N8nmvb9mfrpv81 {
    status: string
    e: string
    m: string
    p: P38[]
    s: S38
    id: string
}

export interface P38 {
    y: number
    x: number
    u: string
}

export interface S38 {
    y: number
    x: number
    u: string
}

export interface Ldn3q1gmspv81 {
    status: string
    e: string
    m: string
    p: P39[]
    s: S39
    id: string
}

export interface P39 {
    y: number
    x: number
    u: string
}

export interface S39 {
    y: number
    x: number
    u: string
}

export interface Zhihq1gmspv81 {
    status: string
    e: string
    m: string
    p: P40[]
    s: S40
    id: string
}

export interface P40 {
    y: number
    x: number
    u: string
}

export interface S40 {
    y: number
    x: number
    u: string
}

export interface J8v4q1gmspv81 {
    status: string
    e: string
    m: string
    p: P41[]
    s: S41
    id: string
}

export interface P41 {
    y: number
    x: number
    u: string
}

export interface S41 {
    y: number
    x: number
    u: string
}

export interface Q1t2z1gmspv81 {
    status: string
    e: string
    m: string
    p: P42[]
    s: S42
    id: string
}

export interface P42 {
    y: number
    x: number
    u: string
}

export interface S42 {
    y: number
    x: number
    u: string
}

export interface R7pdfnoatpv81 {
    status: string
    e: string
    m: string
    p: P43[]
    s: S43
    id: string
}

export interface P43 {
    y: number
    x: number
    u: string
}

export interface S43 {
    y: number
    x: number
    u: string
}

export interface Fspv2r3btpv81 {
    status: string
    e: string
    m: string
    p: P44[]
    s: S44
    id: string
}

export interface P44 {
    y: number
    x: number
    u: string
}

export interface S44 {
    y: number
    x: number
    u: string
}

export interface N13yrq0aatpv81 {
    status: string
    e: string
    m: string
    p: P45[]
    s: S45
    id: string
}

export interface P45 {
    y: number
    x: number
    u: string
}

export interface S45 {
    y: number
    x: number
    u: string
}

export interface Z5zt04wwwpv81 {
    status: string
    e: string
    m: string
    p: P46[]
    s: S46
    id: string
}

export interface P46 {
    y: number
    x: number
    u: string
}

export interface S46 {
    y: number
    x: number
    u: string
}

export interface N56qgs4wwwpv81 {
    status: string
    e: string
    m: string
    p: P47[]
    s: S47
    id: string
}

export interface P47 {
    y: number
    x: number
    u: string
}

export interface S47 {
    y: number
    x: number
    u: string
}

export interface Wglby7zadmv81 {
    status: string
    e: string
    m: string
    p: P48[]
    s: S48
    id: string
}

export interface P48 {
    y: number
    x: number
    u: string
}

export interface S48 {
    y: number
    x: number
    u: string
}

export interface O8nd58zadmv81 {
    status: string
    e: string
    m: string
    p: P49[]
    s: S49
    id: string
}

export interface P49 {
    y: number
    x: number
    u: string
}

export interface S49 {
    y: number
    x: number
    u: string
}

export interface N7m02imgdxmv81 {
    status: string
    e: string
    m: string
    p: P50[]
    s: S50
    id: string
}

export interface P50 {
    y: number
    x: number
    u: string
}

export interface S50 {
    y: number
    x: number
    u: string
}

export interface N3c6rtdgdxmv81 {
    status: string
    e: string
    m: string
    p: P51[]
    s: S51
    id: string
}

export interface P51 {
    y: number
    x: number
    u: string
}

export interface S51 {
    y: number
    x: number
    u: string
}

export interface N0uk0xdgdxmv81 {
    status: string
    e: string
    m: string
    p: P52[]
    s: S52
    id: string
}

export interface P52 {
    y: number
    x: number
    u: string
}

export interface S52 {
    y: number
    x: number
    u: string
}

export interface Wqc0scgdxmv81 {
    status: string
    e: string
    m: string
    p: P53[]
    s: S53
    id: string
}

export interface P53 {
    y: number
    x: number
    u: string
}

export interface S53 {
    y: number
    x: number
    u: string
}

export interface At7yxkgdxmv81 {
    status: string
    e: string
    m: string
    p: P54[]
    s: S54
    id: string
}

export interface P54 {
    y: number
    x: number
    u: string
}

export interface S54 {
    y: number
    x: number
    u: string
}

export interface Krbrucgdxmv81 {
    status: string
    e: string
    m: string
    p: P55[]
    s: S55
    id: string
}

export interface P55 {
    y: number
    x: number
    u: string
}

export interface S55 {
    y: number
    x: number
    u: string
}

export interface Npnltg65lnv81 {
    status: string
    e: string
    m: string
    p: P56[]
    s: S56
    id: string
}

export interface P56 {
    y: number
    x: number
    u: string
}

export interface S56 {
    y: number
    x: number
    u: string
}

export interface N6zlngtk5lnv81 {
    status: string
    e: string
    m: string
    p: P57[]
    s: S57
    id: string
}

export interface P57 {
    y: number
    x: number
    u: string
}

export interface S57 {
    y: number
    x: number
    u: string
}

export interface Uju75ct4jov81 {
    status: string
    e: string
    m: string
    p: P58[]
    s: S58
    id: string
}

export interface P58 {
    y: number
    x: number
    u: string
}

export interface S58 {
    y: number
    x: number
    u: string
}

export interface N31k97dt4jov81 {
    status: string
    e: string
    m: string
    p: P59[]
    s: S59
    id: string
}

export interface P59 {
    y: number
    x: number
    u: string
}

export interface S59 {
    y: number
    x: number
    u: string
}

export interface Pkqiva8g0pv81 {
    status: string
    e: string
    m: string
    p: P60[]
    s: S60
    id: string
}

export interface P60 {
    y: number
    x: number
    u: string
}

export interface S60 {
    y: number
    x: number
    u: string
}

export interface N4q5i3vdg0pv81 {
    status: string
    e: string
    m: string
    p: P61[]
    s: S61
    id: string
}

export interface P61 {
    y: number
    x: number
    u: string
}

export interface S61 {
    y: number
    x: number
    u: string
}

export interface V1s6hrz4epv81 {
    status: string
    e: string
    m: string
    p: P62[]
    s: S62
    id: string
}

export interface P62 {
    y: number
    x: number
    u: string
}

export interface S62 {
    y: number
    x: number
    u: string
}

export interface Wjm8grz4epv81 {
    status: string
    e: string
    m: string
    p: P63[]
    s: S63
    id: string
}

export interface P63 {
    y: number
    x: number
    u: string
}

export interface S63 {
    y: number
    x: number
    u: string
}

export interface Qrx76qz4epv81 {
    status: string
    e: string
    m: string
    p: P64[]
    s: S64
    id: string
}

export interface P64 {
    y: number
    x: number
    u: string
}

export interface S64 {
    y: number
    x: number
    u: string
}

export interface Tjp6yqz4epv81 {
    status: string
    e: string
    m: string
    p: P65[]
    s: S65
    id: string
}

export interface P65 {
    y: number
    x: number
    u: string
}

export interface S65 {
    y: number
    x: number
    u: string
}

export interface S6ax6xe930s81 {
    status: string
    e: string
    m: string
    p: P66[]
    s: S66
    id: string
}

export interface P66 {
    y: number
    x: number
    u: string
}

export interface S66 {
    y: number
    x: number
    u: string
}

export interface S44pikk930s81 {
    status: string
    e: string
    m: string
    p: P67[]
    s: S67
    id: string
}

export interface P67 {
    y: number
    x: number
    u: string
}

export interface S67 {
    y: number
    x: number
    u: string
}

export interface Prr2bcr930s81 {
    status: string
    e: string
    m: string
    p: P68[]
    s: S68
    id: string
}

export interface P68 {
    y: number
    x: number
    u: string
}

export interface S68 {
    y: number
    x: number
    u: string
}

export interface N4a8rbtm930s81 {
    status: string
    e: string
    m: string
    p: P69[]
    s: S69
    id: string
}

export interface P69 {
    y: number
    x: number
    u: string
}

export interface S69 {
    y: number
    x: number
    u: string
}

export interface G4nfar9930s81 {
    status: string
    e: string
    m: string
    p: P70[]
    s: S70
    id: string
}

export interface P70 {
    y: number
    x: number
    u: string
}

export interface S70 {
    y: number
    x: number
    u: string
}

export interface M6o3zpr1g5s81 {
    status: string
    e: string
    m: string
    p: P71[]
    s: S71
    id: string
}

export interface P71 {
    y: number
    x: number
    u: string
}

export interface S71 {
    y: number
    x: number
    u: string
}

export interface A1wcaoe1g5s81 {
    status: string
    e: string
    m: string
    p: P72[]
    s: S72
    id: string
}

export interface P72 {
    y: number
    x: number
    u: string
}

export interface S72 {
    y: number
    x: number
    u: string
}

export interface Bdghrdz1g5s81 {
    status: string
    e: string
    m: string
    p: P73[]
    s: S73
    id: string
}

export interface P73 {
    y: number
    x: number
    u: string
}

export interface S73 {
    y: number
    x: number
    u: string
}

export interface Yt2wj0l1g5s81 {
    status: string
    e: string
    m: string
    p: P74[]
    s: S74
    id: string
}

export interface P74 {
    y: number
    x: number
    u: string
}

export interface S74 {
    y: number
    x: number
    u: string
}

export interface Yungo782g5s81 {
    status: string
    e: string
    m: string
    p: P75[]
    s: S75
    id: string
}

export interface P75 {
    y: number
    x: number
    u: string
}

export interface S75 {
    y: number
    x: number
    u: string
}

export interface X7fc8zu1g5s81 {
    status: string
    e: string
    m: string
    p: P76[]
    s: S76
    id: string
}

export interface P76 {
    y: number
    x: number
    u: string
}

export interface S76 {
    y: number
    x: number
    u: string
}

export interface T22oe2y1g5s81 {
    status: string
    e: string
    m: string
    p: P77[]
    s: S77
    id: string
}

export interface P77 {
    y: number
    x: number
    u: string
}

export interface S77 {
    y: number
    x: number
    u: string
}

export interface K4jlsx32g5s81 {
    status: string
    e: string
    m: string
    p: P78[]
    s: S78
    id: string
}

export interface P78 {
    y: number
    x: number
    u: string
}

export interface S78 {
    y: number
    x: number
    u: string
}

export interface Je4dnqo1g5s81 {
    status: string
    e: string
    m: string
    p: P79[]
    s: S79
    id: string
}

export interface P79 {
    y: number
    x: number
    u: string
}

export interface S79 {
    y: number
    x: number
    u: string
}

export interface Uzdw7i4debs81 {
    status: string
    e: string
    m: string
    p: P80[]
    s: S80
    id: string
}

export interface P80 {
    y: number
    x: number
    u: string
}

export interface S80 {
    y: number
    x: number
    u: string
}

export interface N4gya3i4debs81 {
    status: string
    e: string
    m: string
    p: P81[]
    s: S81
    id: string
}

export interface P81 {
    y: number
    x: number
    u: string
}

export interface S81 {
    y: number
    x: number
    u: string
}

export interface Njootvvjfts81 {
    status: string
    e: string
    m: string
    p: P82[]
    s: S82
    id: string
}

export interface P82 {
    y: number
    x: number
    u: string
}

export interface S82 {
    y: number
    x: number
    u: string
}

export interface Uvzrfwvjfts81 {
    status: string
    e: string
    m: string
    p: P83[]
    s: S83
    id: string
}

export interface P83 {
    y: number
    x: number
    u: string
}

export interface S83 {
    y: number
    x: number
    u: string
}

export interface Hwi2lo6vkvs81 {
    status: string
    e: string
    m: string
    p: P84[]
    s: S84
    id: string
}

export interface P84 {
    y: number
    x: number
    u: string
}

export interface S84 {
    y: number
    x: number
    u: string
}

export interface Du8wrvhukvs81 {
    status: string
    e: string
    m: string
    p: P85[]
    s: S85
    id: string
}

export interface P85 {
    y: number
    x: number
    u: string
}

export interface S85 {
    y: number
    x: number
    u: string
}

export interface I6cplwxukvs81 {
    status: string
    e: string
    m: string
    p: P86[]
    s: S86
    id: string
}

export interface P86 {
    y: number
    x: number
    u: string
}

export interface S86 {
    y: number
    x: number
    u: string
}

export interface P3ttobrukvs81 {
    status: string
    e: string
    m: string
    p: P87[]
    s: S87
    id: string
}

export interface P87 {
    y: number
    x: number
    u: string
}

export interface S87 {
    y: number
    x: number
    u: string
}

export interface Tg1zgobw92t81 {
    status: string
    e: string
    m: string
    p: P88[]
    s: S88
    id: string
}

export interface P88 {
    y: number
    x: number
    u: string
}

export interface S88 {
    y: number
    x: number
    u: string
}

export interface Pvlw0pbw92t81 {
    status: string
    e: string
    m: string
    p: P89[]
    s: S89
    id: string
}

export interface P89 {
    y: number
    x: number
    u: string
}

export interface S89 {
    y: number
    x: number
    u: string
}

export interface Lxorgpbw92t81 {
    status: string
    e: string
    m: string
    p: P90[]
    s: S90
    id: string
}

export interface P90 {
    y: number
    x: number
    u: string
}

export interface S90 {
    y: number
    x: number
    u: string
}

export interface N6rxwoobw92t81 {
    status: string
    e: string
    m: string
    p: P91[]
    s: S91
    id: string
}

export interface P91 {
    y: number
    x: number
    u: string
}

export interface S91 {
    y: number
    x: number
    u: string
}

export interface K68my58ax2t81 {
    status: string
    e: string
    m: string
    p: P92[]
    s: S92
    id: string
}

export interface P92 {
    y: number
    x: number
    u: string
}

export interface S92 {
    y: number
    x: number
    u: string
}

export interface Uchs168ax2t81 {
    status: string
    e: string
    m: string
    p: P93[]
    s: S93
    id: string
}

export interface P93 {
    y: number
    x: number
    u: string
}

export interface S93 {
    y: number
    x: number
    u: string
}

export interface N6giz868ax2t81 {
    status: string
    e: string
    m: string
    p: P94[]
    s: S94
    id: string
}

export interface P94 {
    y: number
    x: number
    u: string
}

export interface S94 {
    y: number
    x: number
    u: string
}

export interface N5ra3x58ax2t81 {
    status: string
    e: string
    m: string
    p: P95[]
    s: S95
    id: string
}

export interface P95 {
    y: number
    x: number
    u: string
}

export interface S95 {
    y: number
    x: number
    u: string
}

export interface Puakr58ax2t81 {
    status: string
    e: string
    m: string
    p: P96[]
    s: S96
    id: string
}

export interface P96 {
    y: number
    x: number
    u: string
}

export interface S96 {
    y: number
    x: number
    u: string
}

export interface L1xipaboj5t81 {
    status: string
    e: string
    m: string
    p: P97[]
    s: S97
    id: string
}

export interface P97 {
    y: number
    x: number
    u: string
}

export interface S97 {
    y: number
    x: number
    u: string
}

export interface Vnpebq4pj5t81 {
    status: string
    e: string
    m: string
    p: P98[]
    s: S98
    id: string
}

export interface P98 {
    y: number
    x: number
    u: string
}

export interface S98 {
    y: number
    x: number
    u: string
}

export interface L7pvy64i8bt81 {
    status: string
    e: string
    m: string
    p: P99[]
    s: S99
    id: string
}

export interface P99 {
    y: number
    x: number
    u: string
}

export interface S99 {
    y: number
    x: number
    u: string
}

export interface N2mykm2tj8bt81 {
    status: string
    e: string
    m: string
    p: P100[]
    s: S100
    id: string
}

export interface P100 {
    y: number
    x: number
    u: string
}

export interface S100 {
    y: number
    x: number
    u: string
}

export interface N53jtpftenwt81 {
    status: string
    e: string
    m: string
    p: P101[]
    s: S101
    id: string
}

export interface P101 {
    y: number
    x: number
    u: string
}

export interface S101 {
    y: number
    x: number
    u: string
}

export interface Ll1zy3sub0u81 {
    status: string
    e: string
    m: string
    p: P102[]
    s: S102
    id: string
}

export interface P102 {
    y: number
    x: number
    u: string
}

export interface S102 {
    y: number
    x: number
    u: string
}

export interface A1jpwo7vb0u81 {
    status: string
    e: string
    m: string
    p: P103[]
    s: S103
    id: string
}

export interface P103 {
    y: number
    x: number
    u: string
}

export interface S103 {
    y: number
    x: number
    u: string
}

export interface Rppc1p9ub0u81 {
    status: string
    e: string
    m: string
    p: P104[]
    s: S104
    id: string
}

export interface P104 {
    y: number
    x: number
    u: string
}

export interface S104 {
    y: number
    x: number
    u: string
}

export interface Bua3ffkhc8u81 {
    status: string
    e: string
    m: string
    p: P105[]
    s: S105
    id: string
}

export interface P105 {
    y: number
    x: number
    u: string
}

export interface S105 {
    y: number
    x: number
    u: string
}

export interface Cnoltduhc8u81 {
    status: string
    e: string
    m: string
    p: P106[]
    s: S106
    id: string
}

export interface P106 {
    y: number
    x: number
    u: string
}

export interface S106 {
    y: number
    x: number
    u: string
}

export interface N3ah62ndic8u81 {
    status: string
    e: string
    m: string
    p: P107[]
    s: S107
    id: string
}

export interface P107 {
    y: number
    x: number
    u: string
}

export interface S107 {
    y: number
    x: number
    u: string
}

export interface Sc7pklrhc8u81 {
    status: string
    e: string
    m: string
    p: P108[]
    s: S108
    id: string
}

export interface P108 {
    y: number
    x: number
    u: string
}

export interface S108 {
    y: number
    x: number
    u: string
}

export interface N680yb7whc8u81 {
    status: string
    e: string
    m: string
    p: P109[]
    s: S109
    id: string
}

export interface P109 {
    y: number
    x: number
    u: string
}

export interface S109 {
    y: number
    x: number
    u: string
}

export interface Wktl3r3otju81 {
    status: string
    e: string
    m: string
    p: P110[]
    s: S110
    id: string
}

export interface P110 {
    y: number
    x: number
    u: string
}

export interface S110 {
    y: number
    x: number
    u: string
}

export interface Zhtpekejvju81 {
    status: string
    e: string
    m: string
    p: P111[]
    s: S111
    id: string
}

export interface P111 {
    y: number
    x: number
    u: string
}

export interface S111 {
    y: number
    x: number
    u: string
}

export interface Qatb8z3otju81 {
    status: string
    e: string
    m: string
    p: P112[]
    s: S112
    id: string
}

export interface P112 {
    y: number
    x: number
    u: string
}

export interface S112 {
    y: number
    x: number
    u: string
}

export interface N95expj3otju81 {
    status: string
    e: string
    m: string
    p: P113[]
    s: S113
    id: string
}

export interface P113 {
    y: number
    x: number
    u: string
}

export interface S113 {
    y: number
    x: number
    u: string
}

export interface N2l3y2z3otju81 {
    status: string
    e: string
    m: string
    p: P114[]
    s: S114
    id: string
}

export interface P114 {
    y: number
    x: number
    u: string
}

export interface S114 {
    y: number
    x: number
    u: string
}

export interface Jib2pz3otju81 {
    status: string
    e: string
    m: string
    p: P115[]
    s: S115
    id: string
}

export interface P115 {
    y: number
    x: number
    u: string
}

export interface S115 {
    y: number
    x: number
    u: string
}

export interface Z3nefz3otju81 {
    status: string
    e: string
    m: string
    p: P116[]
    s: S116
    id: string
}

export interface P116 {
    y: number
    x: number
    u: string
}

export interface S116 {
    y: number
    x: number
    u: string
}

export interface N4sxvdr3otju81 {
    status: string
    e: string
    m: string
    p: P117[]
    s: S117
    id: string
}

export interface P117 {
    y: number
    x: number
    u: string
}

export interface S117 {
    y: number
    x: number
    u: string
}

export interface Go93lz3otju81 {
    status: string
    e: string
    m: string
    p: P118[]
    s: S118
    id: string
}

export interface P118 {
    y: number
    x: number
    u: string
}

export interface S118 {
    y: number
    x: number
    u: string
}

export interface Zrhnnu3otju81 {
    status: string
    e: string
    m: string
    p: P119[]
    s: S119
    id: string
}

export interface P119 {
    y: number
    x: number
    u: string
}

export interface S119 {
    y: number
    x: number
    u: string
}

export interface Ynk8qj3otju81 {
    status: string
    e: string
    m: string
    p: P120[]
    s: S120
    id: string
}

export interface P120 {
    y: number
    x: number
    u: string
}

export interface S120 {
    y: number
    x: number
    u: string
}

export interface Hqobcl3otju81 {
    status: string
    e: string
    m: string
    p: P121[]
    s: S121
    id: string
}

export interface P121 {
    y: number
    x: number
    u: string
}

export interface S121 {
    y: number
    x: number
    u: string
}

export interface N4t73us3otju81 {
    status: string
    e: string
    m: string
    p: P122[]
    s: S122
    id: string
}

export interface P122 {
    y: number
    x: number
    u: string
}

export interface S122 {
    y: number
    x: number
    u: string
}

export interface X4omdt3otju81 {
    status: string
    e: string
    m: string
    p: P123[]
    s: S123
    id: string
}

export interface P123 {
    y: number
    x: number
    u: string
}

export interface S123 {
    y: number
    x: number
    u: string
}

export interface W6djhq3otju81 {
    status: string
    e: string
    m: string
    p: P124[]
    s: S124
    id: string
}

export interface P124 {
    y: number
    x: number
    u: string
}

export interface S124 {
    y: number
    x: number
    u: string
}

export interface Tf9pnrvyfku81 {
    status: string
    e: string
    m: string
    p: P125[]
    s: S125
    id: string
}

export interface P125 {
    y: number
    x: number
    u: string
}

export interface S125 {
    y: number
    x: number
    u: string
}

export interface N82oxyrvyfku81 {
    status: string
    e: string
    m: string
    p: P126[]
    s: S126
    id: string
}

export interface P126 {
    y: number
    x: number
    u: string
}

export interface S126 {
    y: number
    x: number
    u: string
}

export interface Vd2n8jvyfku81 {
    status: string
    e: string
    m: string
    p: P127[]
    s: S127
    id: string
}

export interface P127 {
    y: number
    x: number
    u: string
}

export interface S127 {
    y: number
    x: number
    u: string
}

export interface Ydbunnvyfku81 {
    status: string
    e: string
    m: string
    p: P128[]
    s: S128
    id: string
}

export interface P128 {
    y: number
    x: number
    u: string
}

export interface S128 {
    y: number
    x: number
    u: string
}

export interface N8mxvbrvyfku81 {
    status: string
    e: string
    m: string
    p: P129[]
    s: S129
    id: string
}

export interface P129 {
    y: number
    x: number
    u: string
}

export interface S129 {
    y: number
    x: number
    u: string
}

export interface N3f970cvyfku81 {
    status: string
    e: string
    m: string
    p: P130[]
    s: S130
    id: string
}

export interface P130 {
    y: number
    x: number
    u: string
}

export interface S130 {
    y: number
    x: number
    u: string
}

export interface Py52efvyfku81 {
    status: string
    e: string
    m: string
    p: P131[]
    s: S131
    id: string
}

export interface P131 {
    y: number
    x: number
    u: string
}

export interface S131 {
    y: number
    x: number
    u: string
}

export interface Tfzg3gvyfku81 {
    status: string
    e: string
    m: string
    p: P132[]
    s: S132
    id: string
}

export interface P132 {
    y: number
    x: number
    u: string
}

export interface S132 {
    y: number
    x: number
    u: string
}

export interface J8iisfvyfku81 {
    status: string
    e: string
    m: string
    p: P133[]
    s: S133
    id: string
}

export interface P133 {
    y: number
    x: number
    u: string
}

export interface S133 {
    y: number
    x: number
    u: string
}

export interface Rfcd9rvyfku81 {
    status: string
    e: string
    m: string
    p: P134[]
    s: S134
    id: string
}

export interface P134 {
    y: number
    x: number
    u: string
}

export interface S134 {
    y: number
    x: number
    u: string
}

export interface Gw2tqxkusqu81 {
    status: string
    e: string
    m: string
    p: P135[]
    s: S135
    id: string
}

export interface P135 {
    y: number
    x: number
    u: string
}

export interface S135 {
    y: number
    x: number
    u: string
}

export interface Bc2e7xkusqu81 {
    status: string
    e: string
    m: string
    p: P136[]
    s: S136
    id: string
}

export interface P136 {
    y: number
    x: number
    u: string
}

export interface S136 {
    y: number
    x: number
    u: string
}

export interface Tpapfxkusqu81 {
    status: string
    e: string
    m: string
    p: P137[]
    s: S137
    id: string
}

export interface P137 {
    y: number
    x: number
    u: string
}

export interface S137 {
    y: number
    x: number
    u: string
}

export interface N0fpet4sqvxu81 {
    status: string
    e: string
    m: string
    p: P138[]
    s: S138
    id: string
}

export interface P138 {
    y: number
    x: number
    u: string
}

export interface S138 {
    y: number
    x: number
    u: string
}

export interface Qba7d4sqvxu81 {
    status: string
    e: string
    m: string
    p: P139[]
    s: S139
    id: string
}

export interface P139 {
    y: number
    x: number
    u: string
}

export interface S139 {
    y: number
    x: number
    u: string
}

export interface Uyea65sqvxu81 {
    status: string
    e: string
    m: string
    p: P140[]
    s: S140
    id: string
}

export interface P140 {
    y: number
    x: number
    u: string
}

export interface S140 {
    y: number
    x: number
    u: string
}

export interface Djijh9fdwxu81 {
    status: string
    e: string
    m: string
    p: P141[]
    s: S141
    id: string
}

export interface P141 {
    y: number
    x: number
    u: string
}

export interface S141 {
    y: number
    x: number
    u: string
}

export interface Awihs9fdwxu81 {
    status: string
    e: string
    m: string
    p: P142[]
    s: S142
    id: string
}

export interface P142 {
    y: number
    x: number
    u: string
}

export interface S142 {
    y: number
    x: number
    u: string
}

export interface Iaqvo9fdwxu81 {
    status: string
    e: string
    m: string
    p: P143[]
    s: S143
    id: string
}

export interface P143 {
    y: number
    x: number
    u: string
}

export interface S143 {
    y: number
    x: number
    u: string
}

export interface Lehaqtix55v81 {
    status: string
    e: string
    m: string
    p: P144[]
    s: S144
    id: string
}

export interface P144 {
    y: number
    x: number
    u: string
}

export interface S144 {
    y: number
    x: number
    u: string
}

export interface D01tswix55v81 {
    status: string
    e: string
    m: string
    p: P145[]
    s: S145
    id: string
}

export interface P145 {
    y: number
    x: number
    u: string
}

export interface S145 {
    y: number
    x: number
    u: string
}

export interface Ldtdtvix55v81 {
    status: string
    e: string
    m: string
    p: P146[]
    s: S146
    id: string
}

export interface P146 {
    y: number
    x: number
    u: string
}

export interface S146 {
    y: number
    x: number
    u: string
}

export interface Mhimfwix55v81 {
    status: string
    e: string
    m: string
    p: P147[]
    s: S147
    id: string
}

export interface P147 {
    y: number
    x: number
    u: string
}

export interface S147 {
    y: number
    x: number
    u: string
}

export interface N7g79qwix55v81 {
    status: string
    e: string
    m: string
    p: P148[]
    s: S148
    id: string
}

export interface P148 {
    y: number
    x: number
    u: string
}

export interface S148 {
    y: number
    x: number
    u: string
}

export interface Tr8oktix55v81 {
    status: string
    e: string
    m: string
    p: P149[]
    s: S149
    id: string
}

export interface P149 {
    y: number
    x: number
    u: string
}

export interface S149 {
    y: number
    x: number
    u: string
}

export interface N5ysputix55v81 {
    status: string
    e: string
    m: string
    p: P150[]
    s: S150
    id: string
}

export interface P150 {
    y: number
    x: number
    u: string
}

export interface S150 {
    y: number
    x: number
    u: string
}

export interface Owzcxvix55v81 {
    status: string
    e: string
    m: string
    p: P151[]
    s: S151
    id: string
}

export interface P151 {
    y: number
    x: number
    u: string
}

export interface S151 {
    y: number
    x: number
    u: string
}

export interface In15es3tgev81 {
    status: string
    e: string
    m: string
    p: P152[]
    s: S152
    id: string
}

export interface P152 {
    y: number
    x: number
    u: string
}

export interface S152 {
    y: number
    x: number
    u: string
}

export interface Cdqcrt3tgev81 {
    status: string
    e: string
    m: string
    p: P153[]
    s: S153
    id: string
}

export interface P153 {
    y: number
    x: number
    u: string
}

export interface S153 {
    y: number
    x: number
    u: string
}

export interface Jfpafn3tgev81 {
    status: string
    e: string
    m: string
    p: P154[]
    s: S154
    id: string
}

export interface P154 {
    y: number
    x: number
    u: string
}

export interface S154 {
    y: number
    x: number
    u: string
}

export interface N2uibd8z0civ81 {
    status: string
    e: string
    m: string
    p: P155[]
    s: S155
    id: string
}

export interface P155 {
    y: number
    x: number
    u: string
}

export interface S155 {
    y: number
    x: number
    u: string
}

export interface O52488z0civ81 {
    status: string
    e: string
    m: string
    p: P156[]
    s: S156
    id: string
}

export interface P156 {
    y: number
    x: number
    u: string
}

export interface S156 {
    y: number
    x: number
    u: string
}

export interface Ojaci0czamv81 {
    status: string
    e: string
    m: string
    p: P157[]
    s: S157
    id: string
}

export interface P157 {
    y: number
    x: number
    u: string
}

export interface S157 {
    y: number
    x: number
    u: string
}

export interface Rcxa51czamv81 {
    status: string
    e: string
    m: string
    p: P158[]
    s: S158
    id: string
}

export interface P158 {
    y: number
    x: number
    u: string
}

export interface S158 {
    y: number
    x: number
    u: string
}

export interface N82fv380ihkv81 {
    status: string
    e: string
    m: string
    p: P159[]
    s: S159
    id: string
}

export interface P159 {
    y: number
    x: number
    u: string
}

export interface S159 {
    y: number
    x: number
    u: string
}

export interface I30gjm5r5mv81 {
    status: string
    e: string
    m: string
    p: P160[]
    s: S160
    id: string
}

export interface P160 {
    y: number
    x: number
    u: string
}

export interface S160 {
    y: number
    x: number
    u: string
}

export interface K6y3xs1o5mv81 {
    status: string
    e: string
    m: string
    p: P161[]
    s: S161
    id: string
}

export interface P161 {
    y: number
    x: number
    u: string
}

export interface S161 {
    y: number
    x: number
    u: string
}

export interface Zb3ck7jp5mv81 {
    status: string
    e: string
    m: string
    p: P162[]
    s: S162
    id: string
}

export interface P162 {
    y: number
    x: number
    u: string
}

export interface S162 {
    y: number
    x: number
    u: string
}

export interface Jr9r6uwx0nv81 {
    status: string
    e: string
    m: string
    p: P163[]
    s: S163
    id: string
}

export interface P163 {
    y: number
    x: number
    u: string
}

export interface S163 {
    y: number
    x: number
    u: string
}

export interface Qqfyonxq0nv81 {
    status: string
    e: string
    m: string
    p: P164[]
    s: S164
    id: string
}

export interface P164 {
    y: number
    x: number
    u: string
}

export interface S164 {
    y: number
    x: number
    u: string
}

export interface Rcltxt2s0nv81 {
    status: string
    e: string
    m: string
    p: P165[]
    s: S165
    id: string
}

export interface P165 {
    y: number
    x: number
    u: string
}

export interface S165 {
    y: number
    x: number
    u: string
}

export interface U2eqe3sr0nv81 {
    status: string
    e: string
    m: string
    p: P166[]
    s: S166
    id: string
}

export interface P166 {
    y: number
    x: number
    u: string
}

export interface S166 {
    y: number
    x: number
    u: string
}

export interface Vgubiosh2nv81 {
    status: string
    e: string
    m: string
    p: P167[]
    s: S167
    id: string
}

export interface P167 {
    y: number
    x: number
    u: string
}

export interface S167 {
    y: number
    x: number
    u: string
}

export interface N7wfq8mlq0nv81 {
    status: string
    e: string
    m: string
    p: P168[]
    s: S168
    id: string
}

export interface P168 {
    y: number
    x: number
    u: string
}

export interface S168 {
    y: number
    x: number
    u: string
}

export interface S6nrzxwhhnv81 {
    status: string
    e: string
    m: string
    p: P169[]
    s: S169
    id: string
}

export interface P169 {
    y: number
    x: number
    u: string
}

export interface S169 {
    y: number
    x: number
    u: string
}

export interface N88ncbxwhhnv81 {
    status: string
    e: string
    m: string
    p: P170[]
    s: S170
    id: string
}

export interface P170 {
    y: number
    x: number
    u: string
}

export interface S170 {
    y: number
    x: number
    u: string
}

export interface Avc3wyb2kov81 {
    status: string
    e: string
    m: string
    p: P171[]
    s: S171
    id: string
}

export interface P171 {
    y: number
    x: number
    u: string
}

export interface S171 {
    y: number
    x: number
    u: string
}

export interface Wws4u2e2kov81 {
    status: string
    e: string
    m: string
    p: P172[]
    s: S172
    id: string
}

export interface P172 {
    y: number
    x: number
    u: string
}

export interface S172 {
    y: number
    x: number
    u: string
}

export interface N51ctluf5jpv81 {
    status: string
    e: string
    m: string
    p: P173[]
    s: S173
    id: string
}

export interface P173 {
    y: number
    x: number
    u: string
}

export interface S173 {
    y: number
    x: number
    u: string
}

export interface N9f3bcgsdlpv81 {
    status: string
    e: string
    m: string
    p: P174[]
    s: S174
    id: string
}

export interface P174 {
    y: number
    x: number
    u: string
}

export interface S174 {
    y: number
    x: number
    u: string
}

export interface B3jorqkgmpv81 {
    status: string
    e: string
    m: string
    p: P175[]
    s: S175
    id: string
}

export interface P175 {
    y: number
    x: number
    u: string
}

export interface S175 {
    y: number
    x: number
    u: string
}

export interface N2s9bnkjcxxu81 {
    status: string
    e: string
    m: string
    p: P176[]
    s: S176
    id: string
}

export interface P176 {
    y: number
    x: number
    u: string
}

export interface S176 {
    y: number
    x: number
    u: string
}

export interface C2rqt3mhccv81 {
    status: string
    e: string
    m: string
    p: P177[]
    s: S177
    id: string
}

export interface P177 {
    y: number
    x: number
    u: string
}

export interface S177 {
    y: number
    x: number
    u: string
}

export interface Fl0jh3mhccv81 {
    status: string
    e: string
    m: string
    p: P178[]
    s: S178
    id: string
}

export interface P178 {
    y: number
    x: number
    u: string
}

export interface S178 {
    y: number
    x: number
    u: string
}

export interface Tvq2ol4xtcv81 {
    status: string
    e: string
    m: string
    p: P179[]
    s: S179
    id: string
}

export interface P179 {
    y: number
    x: number
    u: string
}

export interface S179 {
    y: number
    x: number
    u: string
}

export interface Rj5k3m4xtcv81 {
    status: string
    e: string
    m: string
    p: P180[]
    s: S180
    id: string
}

export interface P180 {
    y: number
    x: number
    u: string
}

export interface S180 {
    y: number
    x: number
    u: string
}

export interface C7ndsjauxdv81 {
    status: string
    e: string
    m: string
    p: P181[]
    s: S181
    id: string
}

export interface P181 {
    y: number
    x: number
    u: string
}

export interface S181 {
    y: number
    x: number
    u: string
}

export interface N7l34ox4uxdv81 {
    status: string
    e: string
    m: string
    p: P182[]
    s: S182
    id: string
}

export interface P182 {
    y: number
    x: number
    u: string
}

export interface S182 {
    y: number
    x: number
    u: string
}

export interface Wfmiqyowqov81 {
    status: string
    e: string
    m: string
    p: P183[]
    s: S183
    id: string
}

export interface P183 {
    y: number
    x: number
    u: string
}

export interface S183 {
    y: number
    x: number
    u: string
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

export interface Option {
    text: string
    id: string
}

export interface CrosspostParentList {
    approved_at_utc: unknown
    subreddit: string
    selftext: string
    author_fullname?: string
    saved: boolean
    mod_reason_title: unknown
    gilded: number
    clicked: boolean
    is_gallery?: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext2[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height?: number
    top_awarded_type?: string
    hide_score: boolean
    media_metadata?: MediaMetadata2
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color?: string
    ups: number
    domain: string
    media_embed: MediaEmbed2
    thumbnail_width?: number
    author_flair_template_id?: string
    is_original_content: boolean
    user_reports: unknown[]
    secure_media?: SecureMedia2
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: unknown
    secure_media_embed: SecureMediaEmbed2
    gallery_data?: GalleryData
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: unknown
    is_created_from_ads_ui: boolean
    author_premium?: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class?: string
    author_flair_richtext?: AuthorFlairRichtext2[]
    gildings: Gildings2
    content_categories: unknown
    is_self: boolean
    subreddit_type: string
    created: number
    link_flair_type: string
    wls: number
    removed_by_category?: string
    banned_by: unknown
    author_flair_type?: string
    total_awards_received: number
    allow_live_comments: boolean
    selftext_html?: string
    likes: unknown
    suggested_sort?: string
    banned_at_utc: unknown
    url_overridden_by_dest?: string
    view_count: unknown
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    all_awardings: AllAwarding2[]
    awarders: unknown[]
    media_only: boolean
    link_flair_template_id?: string
    sr_detail: SrDetail2
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: unknown[]
    visited: boolean
    removed_by: unknown
    mod_note: unknown
    distinguished: unknown
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: unknown
    num_reports: unknown
    removal_reason: unknown
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: unknown
    author: string
    discussion_type: unknown
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: unknown[]
    author_patreon_flair?: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media2
    is_video: boolean
    post_hint?: string
    preview?: Preview2
}

export interface LinkFlairRichtext2 {
    e: string
    t?: string
    a?: string
    u?: string
}

export interface MediaMetadata2 {
    jbhd8s5n79s81?: Jbhd8s5n79s81
    a7vkzr5n79s81?: A7vkzr5n79s81
    "7y5yjs5n79s81"?: N7y5yjs5n79s81
    lwmwjw0u7zu81?: Lwmwjw0u7zu81
    lkzxqx0u7zu81?: Lkzxqx0u7zu81
}

export interface Jbhd8s5n79s81 {
    status: string
    e: string
    m: string
    p: P184[]
    s: S184
    id: string
}

export interface P184 {
    y: number
    x: number
    u: string
}

export interface S184 {
    y: number
    x: number
    u: string
}

export interface A7vkzr5n79s81 {
    status: string
    e: string
    m: string
    p: P185[]
    s: S185
    id: string
}

export interface P185 {
    y: number
    x: number
    u: string
}

export interface S185 {
    y: number
    x: number
    u: string
}

export interface N7y5yjs5n79s81 {
    status: string
    e: string
    m: string
    p: P186[]
    s: S186
    id: string
}

export interface P186 {
    y: number
    x: number
    u: string
}

export interface S186 {
    y: number
    x: number
    u: string
}

export interface Lwmwjw0u7zu81 {
    status: string
    e: string
    m: string
    p: P187[]
    s: S187
    id: string
}

export interface P187 {
    y: number
    x: number
    u: string
}

export interface S187 {
    y: number
    x: number
    u: string
}

export interface Lkzxqx0u7zu81 {
    status: string
    e: string
    m: string
    p: P188[]
    s: S188
    id: string
}

export interface P188 {
    y: number
    x: number
    u: string
}

export interface S188 {
    y: number
    x: number
    u: string
}

export interface MediaEmbed2 {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
}

export interface SecureMedia2 {
    reddit_video?: RedditVideo3
    type?: string
    oembed?: Oembed3
}

export interface RedditVideo3 {
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

export interface Oembed3 {
    provider_url: string
    description?: string
    title?: string
    type: string
    author_name: string
    height?: number
    width: number
    html: string
    thumbnail_width?: number
    version: string
    provider_name: string
    thumbnail_url?: string
    thumbnail_height?: number
    url?: string
    author_url?: string
    cache_age?: number
}

export interface SecureMediaEmbed2 {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
}

export interface GalleryData {
    items: Item[]
}

export interface Item {
    caption?: string
    media_id: string
    id: number
}

export interface AuthorFlairRichtext2 {
    a?: string
    e: string
    u?: string
    t?: string
}

export interface Gildings2 {
    gid_1?: number
    gid_2?: number
}

export interface AllAwarding2 {
    giver_coin_reward: unknown
    subreddit_id: unknown
    is_new: boolean
    days_of_drip_extension: unknown
    coin_price: number
    id: string
    penny_donate: unknown
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium?: number
    tiers_by_required_awardings: unknown
    resized_icons: Metadata[]
    icon_width: number
    static_icon_width: number
    start_date: unknown
    is_enabled: boolean
    awardings_required_to_grant_benefits: unknown
    description: string
    end_date: unknown
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: Metadata[]
    icon_format?: string
    icon_height: number
    penny_price?: number
    award_type: string
    static_icon_url: string
}





export interface SrDetail2 {
    default_set: boolean
    banner_img?: string
    restrict_posting: boolean
    user_is_banned: boolean
    free_form_reports: boolean
    community_icon?: string
    show_media: boolean
    description: string
    user_is_muted: boolean
    display_name: string
    header_img?: string
    title: string
    previous_names: unknown[]
    user_is_moderator: boolean
    over_18: boolean
    icon_size?: number[]
    primary_color: string
    icon_img: string
    icon_color: string
    submit_link_label?: string
    header_size?: number[]
    restrict_commenting: boolean
    subscribers: number
    submit_text_label?: string
    link_flair_position?: string
    display_name_prefixed: string
    key_color: string
    name: string
    created: number
    url: string
    quarantine: boolean
    created_utc: number
    banner_size?: number[]
    user_is_contributor: boolean
    accept_followers: boolean
    public_description: string
    link_flair_enabled: boolean
    disable_contributor_requests: boolean
    subreddit_type: string
    user_is_subscriber: boolean
    is_chat_post_feature_enabled?: boolean
    allow_chat_post_creation?: boolean
}

export interface Media2 {
    reddit_video?: RedditVideo4
    type?: string
    oembed?: Oembed4
}

export interface RedditVideo4 {
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

export interface Oembed4 {
    provider_url: string
    description?: string
    title?: string
    type: string
    author_name: string
    height?: number
    width: number
    html: string
    thumbnail_width?: number
    version: string
    provider_name: string
    thumbnail_url?: string
    thumbnail_height?: number
    url?: string
    author_url?: string
    cache_age?: number
}

export interface Preview2 {
    images: Image2[]
    enabled: boolean
    reddit_video_preview?: RedditVideoPreview2
}

export interface Image2 {
    source: Metadata
    resolutions: Metadata[]
    variants: Variants2
    id: string
}





export interface Variants2 {
    gif?: Gif2
    mp4?: Mp42
    obfuscated?: Obfuscated2
    nsfw?: Nsfw2
}

export interface Gif2 {
    source: Metadata
    resolutions: Metadata[]
}





export interface Mp42 {
    source: Metadata
    resolutions: Metadata[]
}





export interface Obfuscated2 {
    source: Metadata
    resolutions: Metadata[]
}





export interface Nsfw2 {
    source: Metadata
    resolutions: Metadata[]
}





export interface RedditVideoPreview2 {
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

export interface GalleryData2 {
    items: Item2[]
}

export interface Item2 {
    media_id: string
    id: number
    caption?: string
}
