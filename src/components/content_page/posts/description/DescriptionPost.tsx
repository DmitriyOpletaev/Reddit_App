import {FC} from "react";
import Paragraph from "antd/es/typography/Paragraph";

export const DescriptionPost:FC<DescriptionPostProps>=({description})=>{

    return(
        <Paragraph
            ellipsis={ellipsis}
        >
            {'  '}{description}
        </Paragraph>
    )
}
const ellipsis={
    rows: 2,
    expandable: true,
    symbol: 'more'
}
type DescriptionPostProps={
    description:string,
}