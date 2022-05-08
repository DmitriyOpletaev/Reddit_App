import {useDispatch, useSelector} from "react-redux"
import {authSelector} from "../../redux/selectors/auth-selector"
import {Col} from "antd"
import {useState} from "react"
import Search from "antd/es/input/Search"
import {LoginPopover} from "../common/LoginPopover"

export const HomePage = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(authSelector.accessToken)
    const [searchValue,setSearchValue] = useState('Kai__Lorenz')

    return(
        <div>
            <h1>HOMEPAGE</h1>
            <Col span={10} push={1}>
                <Search
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.currentTarget.value)}
                    onSearch={()=>{}}
                    size={'middle'}
                />
            </Col>
        </div>
    )
}
