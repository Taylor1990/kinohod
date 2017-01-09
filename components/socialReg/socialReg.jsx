import React, {Component} from 'react'
import {connect} from 'react-redux'

import styles from './socialReg.scss'

class SocialReg extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className = {styles.social_container}>
                <div className = {styles.title}>
                    Войдите через социальную сеть:
                </div>
                <button className = {styles.fb}>
                    <div>FACEBOOK</div>
                </button>
                <button className = {styles.vk}>
                    <div>ВКОНТАКТЕ</div>
                </button>
                <button className = {styles.ok}>
                    <div>ОДНОКЛАССНИКИ</div>
                </button>
            </div>
        )
    }
}

function select(state){
    data: state.user
}

export default connect(select)(SocialReg)
