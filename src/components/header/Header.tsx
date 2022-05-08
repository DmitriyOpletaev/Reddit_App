import './Header.scss'
import React from "react"
import {Col, Row} from "antd"
import {LoginButton} from "../common/LoginButton"
import {ColProps} from "antd/es"
import {SettingTwoTone} from "@ant-design/icons"
import {SearchBar} from "./searchBar/SearchBar"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {HomeButton} from "./HomeButton";

export const AppHeader = () => {
    const {xs,lg} = useBreakpoint()
    return (
        <div className={'appHeaderWrapper'}>
            <Row justify={'space-between'} align={'middle'} className={'appHeader'}>
                <Col {...menuColSettings}>
                    {/*<AppMenu/>*/}
                </Col>
                <Col {...logoColSettings}>
                    <Row justify={'center'} align={'middle'}>
                        <HomeButton size={xs? 22 :40}/>
                    </Row>
                </Col>
                <Col {...thirdSettings} >
                    <Row justify={'space-between'} align={'middle'}>
                        <Col {...searchBarColSettings}>
                            <SearchBar/>
                        </Col>
                        <Col  {...someButtonColSettings} >
                            <SettingTwoTone />
                        </Col>
                        <Col  {...loginButtonColSettings} className={'loginButtonContainer'} >
                            <LoginButton
                                mini={xs} size={lg ? 'middle' : 'small'}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}



const menuColSettings: ColProps = {
    xs: {
        span: 3,
        order: 1
    },
    sm: {
        span: 3,
        order: 1
    },
    md: {
        span: 11
    },
    lg: {
        span: 11
    }
}
const logoColSettings: ColProps = {
    xs: {
        span: 3,
        order: 2
    },
    sm: {
        span: 1,
        order: 2
    },
    md: {
        span: 1
    },
    lg: {
        span: 1
    }
}
const thirdSettings: ColProps = {
    xs: {
        span: 18,
        order: 3
    },
    sm: {
        span: 18,
        order: 3
    },
    md: {
        span: 11
    },
    lg: {
        span: 11
    }
}

const searchBarColSettings: ColProps = {
    xs: {
        span: 17
    },
    sm: {
        span: 16
    },
    md: {
        span: 15
    },
    lg: {
        span: 16
    }
}
const someButtonColSettings: ColProps = {
    xs: {
        span: 0
    },
    sm: {
        span: 1,
    },
    md: {
        span: 1
    },
    lg: {
        span: 1
    }
}
const loginButtonColSettings: ColProps = {
    xs: {
        span: 4
    },
    sm: {
        span: 5
    },
    md: {
        span: 6
    },
    lg: {
        span: 6
    }
}


