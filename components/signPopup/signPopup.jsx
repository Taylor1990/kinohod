import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'

import styles from './signPopup.scss'
import {config} from './signPopup.config'
import SocialReg from './../socialReg/socialReg.jsx'

class SignPopup extends Component{
    constructor(props) {
        super(props)
    }

    registrate(){
        /.+@.+\..+/i.test(newValue)
    }

    render() {
        return (
            <div>
                <div className = {styles.container}>
                    <div className = {styles.socialReg}>
                        <SocialReg/>
                    </div>
                    <div className = {styles.sign_container}>
                        <div className = {styles.title}>
                            или зарегистрируйтесь
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
                        <TextField
                            floatingLabelText = 'Пароль еще раз...'
                            style = {config.styles.TextField.main}
                            underlineShow = {false}
                            type = "password"
                            className = {styles.repeat_password}
                            floatingLabelStyle = {config.styles.TextField.label}
                            inputStyle = {config.styles.TextField.input}
                            floatingLabelShrinkStyle = {config.styles.TextField.labelShrinked}
                        />

                        <button className = {styles.enter} onClick = {this.registrate.bind(this)}>
                            <div>ВСТУПИТЬ В КЛУБ</div>
                        </button>

                    </div>

                    <div className = {styles.login_container}>
                        Если вы уже зарегистрированы,&#160;
                        <span className = {styles.login_button}
                              onClick = {this.props.childProps.onEnterLogin}>
                            входите
                        </span>
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

export default connect(select)(SignPopup)
