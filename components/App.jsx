import React, { Component } from 'react'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Icons from 'react-uikit-icons'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import SelectCity from './selectCity/selectCity.jsx'
import Footer from './footer/footer.jsx'
import { config } from './App.config'
import SignPopup from './signPopup/signPopup.jsx'
import LoginPopup from './loginPopup/loginPopup.jsx'
import styles from './App.scss'
import Tabs from './tabs/Tabs.jsx'
import Ads from './ads/Ads.jsx'
import Loader from './loader/Loader.jsx'
import {getCities, getSliderBig, getSliderRentMovies} from './../actions'
import SliderBig from './sliderBig/SliderBig.jsx'
import SliderMiddle from './sliderMiddle/SliderMiddle.jsx'

injectTapEventPlugin()

class App extends Component{
    constructor(props) {
        super(props)

        this.state = {
            selectCity: false,
            signPopup: false,
            loginPopup: false,
            visSliderBig: false,
            visSliderRentMovies: false
        }
    }

    componentWillMount(){
        this.props.dispatch(getSliderBig('city1', () => {
            this.setState({visSliderBig: true})
        }))

        this.props.dispatch(getSliderRentMovies('city1', (movies_rent) => {
            this.setState({visSliderRentMovies: true, movies_rent: movies_rent})
        }))
    }

    clickSelectCity() {
        if(this.state.selectCity){
            this.setState({selectCity: false})
        } else {
            this.props.dispatch(getCities(() =>{
                this.setState({selectCity: true})
            }));
        }
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

    onClickBody(e){
        if(this.state.selectCity){
            this.setState({
                selectCity: false
            })
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div onClick = {this.onClickBody.bind(this)}>
                    <div className = {styles.header}>
                        <div className = {styles.container}>
                            <div className = {styles.logo_container}>
                                <img className = {styles.logo}/>
                                <div className = {styles.title}>
                                    КИНОХОД
                                    <div className = {styles.city_container}>
                                        <img className = {styles.icon_arrow}/>
                                        <div id = 'city1' className = {styles.city}
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

                            <ReactCSSTransitionGroup
                                    transitionName = {{
                                        enter: styles.select_city__transition,
                                        enterActive: styles.select_city__transition__active,
                                        leave: styles.select_city__transition__leave,
                                        leaveActive: styles.select_city__transition__leave__active
                                    }}
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                                {
                                    this.state.selectCity ?
                                            <SelectCity />
                                    : ''
                                }
                            </ReactCSSTransitionGroup>

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
                    <Tabs/>
                    {this.state.visSliderBig ?
                        <SliderBig />
                    : ''}
                    {this.state.visSliderRentMovies ?
                        <SliderMiddle title = 'В прокате' movies = {this.state.movies_rent}/>
                    : ''}
                    <Ads/>
                    <Footer />
                    <Loader />
                </div>
            </MuiThemeProvider>
        )
    }
}

function select(state){
    return {

    }
}

export default connect(select)(App)
