import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Icons from 'react-uikit-icons'

import SelectCity from './selectCity/selectCity.jsx'
import Footer from './footer/footer.jsx'
import { config } from './App.config'
import SignPopup from './signPopup/signPopup.jsx'
import LoginPopup from './loginPopup/loginPopup.jsx'
import styles from './App.scss'
import Tabs from './tabs/Tabs.jsx'

injectTapEventPlugin()

export default class extends Component{
    constructor(props) {
        super(props)

        this.state = {
            selectCity: false,
            signPopup: false,
            loginPopup: false
        }
    }

    clickSelectCity() {
        this.state.selectCity ? this.setState({selectCity: false}) : this.setState({selectCity: true})
    }

    signPopup_open() {
        this.setState({signPopup: true})
    }

    signPopup_close(){
        this.setState({signPopup: false})
    }

    loginPopup_close() {
        this.setState({loginPopup: false})
    }

    onEnterLogin(){
        this.setState({signPopup: false, loginPopup: true})
    }

    onEnterReg(){
        this.setState({signPopup: true, loginPopup: false})
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className = {styles.header}>
                        <div className = {styles.container}>
                            <div className = {styles.logo_container}>
                                <img className = {styles.logo}/>
                                <div className = {styles.title}>
                                    КИНОХОД
                                    <div className = {styles.city_container}>
                                        <img className = {styles.icon_arrow}/>
                                        <div className = {styles.city}
                                             onClick = {this.clickSelectCity.bind(this)}>
                                            Москва
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className = {styles.right_container}>
                                <div className = {styles.gift_container}>
                                    <Icons icon = 'gift' size = 'large'/>
                                    <div className = {styles.gift_title}>
                                        Кино в подарок
                                    </div>
                                </div>
                                <div className = {styles.profile_container}>
                                    <button className = {styles.profile_unautorized} onClick={this.signPopup_open.bind(this)}>
                                        РЕГИСТРАЦИЯ
                                    </button>
                                </div>
                            </div>
                            {
                                this.state.selectCity ?
                                    <SelectCity />
                                : ''
                            }

                        </div>

                        <Dialog title = 'Твое кино начинается здесь'
                                open = {this.state.signPopup}
                                onRequestClose = {this.signPopup_close.bind(this)}
                                titleStyle = {config.styles.Dialog.title}
                                bodyStyle = {config.styles.Dialog.body}
                                contentStyle = {config.styles.Dialog.main}
                                overlayStyle = {config.styles.Dialog.overlay}
                                contentClassName = {styles.dialog_container}>

                                <SignPopup childProps = {{
                                    onEnterLogin: this.onEnterLogin.bind(this)
                                }}/>
                        </Dialog>

                        <Dialog title = 'Вход в Клуб Киноход'
                                open = {this.state.loginPopup}
                                onRequestClose = {this.loginPopup_close.bind(this)}
                                titleStyle = {config.styles.Dialog.title}
                                bodyStyle = {config.styles.Dialog.body}
                                contentStyle = {config.styles.Dialog.main}
                                overlayStyle = {config.styles.Dialog.overlay}
                                contentClassName = {styles.dialog_container}>

                                <LoginPopup childProps = {{
                                    onEnterReg: this.onEnterReg.bind(this)
                                }}/>
                        </Dialog>
                    </div>
                    <Tabs>
                    </Tabs>
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}
