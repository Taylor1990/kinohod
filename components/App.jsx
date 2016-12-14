import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import SelectCity from './selectCity/selectCity.jsx'
import { config } from './App.config'
import SignPopup from './signPopup/signPopup.jsx'
import styles from './App.scss'

injectTapEventPlugin()

export default class extends Component{
    constructor(props) {
        super(props)

        this.state = {
            selectCity: false,
            check_in: false
        }
    }

    clickSelectCity() {
        this.state.selectCity ? this.setState({selectCity: false}) : this.setState({selectCity: true})
    }

    openCheck_in() {
        this.setState({check_in: true})
    }

    closeCheck_in(){
        this.setState({check_in: false})
    }

    render() {
        return (
            <MuiThemeProvider>
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
                                <img className = {styles.gift_icon}/>
                                <div className = {styles.gift_title}>
                                    Кино в подарок
                                </div>
                            </div>
                            <div className = {styles.profile_container}>
                                <button className = {styles.profile_unautorized} onClick={this.openCheck_in.bind(this)}>
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
                            open = {this.state.check_in}
                            onRequestClose = {this.closeCheck_in.bind(this)}
                            titleStyle = {config.styles.Dialog.title}
                            bodyStyle = {config.styles.Dialog.body}
                            contentStyle = {config.styles.Dialog.main}
                            overlayStyle = {config.styles.Dialog.overlay}
                            contentClassName = {styles.dialog_container}>
                        <SignPopup />
                    </Dialog>
                </div>
            </MuiThemeProvider>
        )
    }
}
