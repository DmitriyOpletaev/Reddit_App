import {FC} from "react";
import {Space} from "antd";

export const OpenCommentsButton:FC<OpenCommentsButtonProps>=({commentsCount})=>{

    return(
        <div   >
            {commentsCount} комментариев
        </div>
    )
}
type OpenCommentsButtonProps={
    commentsCount:number
}