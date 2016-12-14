import React, {Component} from 'react'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'

import styles from './signPopup.scss'
import {config} from './signPopup.config'

class SignPopup extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className = {styles.container}>
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
                            className = {styles.password}
                            floatingLabelStyle = {config.styles.TextField.label}
                            inputStyle = {config.styles.TextField.input}
                            floatingLabelShrinkStyle = {config.styles.TextField.labelShrinked}
                        />
                        <TextField
                            floatingLabelText = 'Пароль еще раз...'
                            style = {config.styles.TextField.main}
                            underlineShow = {false}
                            className = {styles.repeat_password}
                            floatingLabelStyle = {config.styles.TextField.label}
                            inputStyle = {config.styles.TextField.input}
                            floatingLabelShrinkStyle = {config.styles.TextField.labelShrinked}
                        />

                        <button className = {styles.enter}>
                            <div>ВСТУПИТЬ В КЛУБ</div>
                        </button>

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
