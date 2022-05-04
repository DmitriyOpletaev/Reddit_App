import {ChangeEvent, FC, useState} from "react"
import {CloseCircleTwoTone, LoadingOutlined, SearchOutlined} from "@ant-design/icons";
import m from "./SearchBar.module.scss";
import {Input} from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

export const SearchInput: FC<SearchInputProps> = (props) => {
    const {isLoading,onSearchFunc} = props
    const [inputValue, setInputValue] = useState<string>('')
    const change = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)
    const search = () => onSearchFunc(inputValue)
    const clear = () => setInputValue('')
    const {xs,lg} = useBreakpoint()
    return (
        <Input
            value={inputValue}
            onChange={change}
            onPressEnter={search}
            suffix={<ClearIcon callbackFunc={clear}/>}
            prefix={isLoading ? <LoadingOutlined/> : <SearchIcon callbackFunc={search}/>}
            placeholder={'Пошук'}
            size={xs ? 'small' : lg ? 'large' : 'middle'}
            className={m.searchInput}
        />
    )

}

const ClearIcon: FC<IconProps> = ({callbackFunc}) => {
    const {lg} = useBreakpoint()
    if (!lg) return null
    return (
        <CloseCircleTwoTone
            onClick={callbackFunc}
            twoToneColor={'rgba(255,66,66,0.63)'}
        />
    )
}
const SearchIcon: FC<IconProps> = ({callbackFunc}) => {
    const {sm} = useBreakpoint()
    if (!sm) return null
    return (
        <SearchOutlined
            onClick={callbackFunc}
            style={{color: 'rgba(0,0,0,0.4)'}}
        />
    )
}




type SearchInputProps = {
    isLoading:boolean,
    onSearchFunc:(value:string)=>void
}
type IconProps = {
    callbackFunc: () => void,
}
