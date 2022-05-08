import {FC} from "react"
import {Button, Space} from "antd"

export const PostsSortButtons: FC<PostsSortButtonsProps> = ({sort,callback}) => {


    const SortButtons = Object.values(sort).map(e=>(
        <Button onClick={()=>callback(e)}>
            {e}
        </Button>
    ))

    return (
        <Space>
            {SortButtons}
        </Space>
    )

}

type PostsSortButtonsProps = {
    sort:Array<string>,
    callback:(value:string)=>void
}