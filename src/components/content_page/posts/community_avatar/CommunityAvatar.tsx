import {FC} from "react";
import {Avatar, Space} from "antd";

export const CommunityAvatar:FC<AvatarCommunityProps>=({ communityDetails})=>{
    const{communityId,communityIcon,communityName}=communityDetails
    return(
        <Space>
            <Avatar src={communityIcon}/>
            <a>{communityName}</a>
        </Space>
    )
}
type AvatarCommunityProps={
    communityDetails:{
        communityIcon?:string
        communityName:string
        communityId:string
    }

}