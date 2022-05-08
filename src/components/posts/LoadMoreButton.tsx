import {FC} from "react"
import {Button} from "antd";


export const LoadMoreButton: FC<LoadMoreButtonProps> = ({func}) => {

    return (
        <Button onClick={func}>
            Більше постів
        </Button>
    )

}

type LoadMoreButtonProps = {
    func:()=>void
}