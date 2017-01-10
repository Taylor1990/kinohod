import React, {Component} from 'react'
import {connect} from 'react-redux'

import styles from './Tabs.scss'
import Search from './../search/Search.jsx'

class Tabs extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className = {styles.tabs_container}>
                <div className = {styles.tabs}>
                    <div className = {styles.cinema}>
                        Кинотеатры
                    </div>
                    <div className = {styles.movies}>
                        Фильмы
                    </div>
                </div>

                <div className = {styles.search}>
                    <Search/>
                </div>
            </div>
        )
    }
}

function select(state){
    return {
        data : state.user
    }
}

export default connect(select)(Tabs)
