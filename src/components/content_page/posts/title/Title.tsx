import {FC} from "react";
import Title from "antd/es/typography/Title";

export const TitlePost:FC<TitlePostProps>=({title})=>{

    return(
        <Title level={4}>
            {title}
        </Title>
    )
}

type TitlePostProps={
    title:string,
}