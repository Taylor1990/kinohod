import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'

import styles from './loginPopup.scss'
import {config} from './loginPopup.config'
import SocialReg from './../socialReg/socialReg.jsx'

class LoginPopup extends Component{
    constructor(props){
        super(props)
    }

    login(){

    }

    render(){
        return (
            <div className = {styles.container}>
                <div className = {styles.socialReg}>
                    <SocialReg />
                </div>

                <div className = {styles.login_container}>
                    <div className = {styles.title}>
                        или с помощью пароля
                    </div>

                    <TextField
                        floatingLabelText = 'E-mail'
                        style = {config.styles.TextField.main}
                        underlineShow = {false}
                        floatingLabelStyle = {config.styles.TextField.label}
                        className = {styles.email}
                        inputStyle = {config.styles.TextField.input}
                        floatingLabelShrinkStyle = {config.styles.TextField.labelShrinked}
                    />

                    <TextField
                        floatingLabelText = 'Пароль'
                        style = {config.styles.TextField.main}
                        underlineShow = {false}
                        type = "password"
                        className = {styles.password}
                        floatingLabelStyle = {config.styles.TextField.label}
                        inputStyle = {config.styles.TextField.input}
                        floatingLabelShrinkStyle = {config.styles.TextField.labelShrinked}
                    />

                <button className = {styles.enter} onClick = {this.login.bind(this)}>
                        <div>ВОЙТИ</div>
                    </button>
                </div>

                <div className = {styles.reg_container}>
                    Если вы еще не в Клубе,&#160;
                    <span className = {styles.reg_button}
                          onClick = {this.props.childProps.onEnterReg}>
                        регистрируйтесь
                    </span>
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

export default connect(select)(LoginPopup)
