import React from 'react'
import m from './App.module.scss'
import {Listing} from "./components/listing/Listing";
import {Sidebar} from "./components/sidebar/Sidebar";
import {HeaderComponent} from "./components/header/Header";


function App() {
    return (
        <div className={m.app_body}>
            <div className={m.header}>
                <HeaderComponent/>
            </div>
            <div className={m.body}>
                <div className={m.content__wrapper}>
                    <Listing/>
                    <Sidebar/>
                </div>

            </div>
        </div>
    )
}

export default App;
