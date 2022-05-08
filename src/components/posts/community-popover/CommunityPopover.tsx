import React, {FC, ReactNode} from "react"
import {Popover} from "antd"
import {PostData} from "../../../types/redux_types/posts-types"
import {TooltipPlacement} from "antd/es/tooltip"
import {CommunityPopoverTitle} from "./CommunityPopoverTitle"
import {CommunityPopoverContent} from "./CommunityPopoverContent"
import './CommunityPopover.scss'
export const CommunityPopover: FC<CommunityAvatarProps> = (props) => {
    const {communityInfo, children, placement} = props
    const {
        communityHeaderImg,
        communityMiniDescription,
        communityType,
        communityId,
        communityName,
        communityBanner,
        communityColor,
        communityIcon,
        keyColor,
        authUserInfo,
        isOver18,
        subscribersCount,
        acceptFollowers
    } = communityInfo
    const {isLoadingSubscribing,userIsSubscribed}=authUserInfo
    const contentProps = {communityId,isLoadingSubscribing,userIsSubscribed,communityColor: communityBackgroundColor,communityMiniDescription,subscribersCount}
    const titleProps={communityName,communityIcon,communityColor: communityBackgroundColor}

    return (
        <div className={'community_popover'}>
            <Popover
                destroyTooltipOnHide={{keepParent:true}}
                mouseEnterDelay={0.5}
                autoAdjustOverflow={true}
                placement={placement}
                content={<CommunityPopoverContent {...contentProps}/>}
                title={<CommunityPopoverTitle {...titleProps}/>}
                overlayClassName={'community_popover'}
            >
            <div>
                {children}
            </div>
            </Popover>
        </div>

    )
}


type CommunityAvatarProps = {
    communityInfo: PostData['community']
    children: ReactNode
    placement?: TooltipPlacement
}