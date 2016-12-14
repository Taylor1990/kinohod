import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getCities} from './../../actions'
import styles from './selectCity.scss'

class selectCity extends Component{
    constructor(props){
        super(props)

        this.state = {
            cities: this.props.dispatch(getCities())
        }
    }

    render () {
        return(
            <div className = {styles.select_city}>
                <button className = {styles.auto_select_city}>
                    ОПРЕДЕЛИТЬ АВТОМАТИЧЕСКИ
                </button>

                <div className = {styles.prime_city}>
                    <div>
                        Москва
                    </div>
                    <div>
                        Санкт-Петербург
                    </div>
                </div>
            </div>
        )
    }
}

function select(state){
    return {
        data: state.user
    }
}

export default connect(select)(selectCity)
