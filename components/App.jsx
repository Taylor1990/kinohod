import React, { Component } from 'react'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Icons from 'react-uikit-icons'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import moment from 'moment'

import SelectCity from './selectCity/selectCity.jsx'
import Footer from './footer/footer.jsx'
import { config } from './App.config'
import SignPopup from './signPopup/signPopup.jsx'
import LoginPopup from './loginPopup/loginPopup.jsx'
import styles from './App.scss'
import Tabs from './tabs/Tabs.jsx'
import Ads from './ads/Ads.jsx'
import Loader from './loader/Loader.jsx'
import {getCities, getSliderBig, getSliderRentMovies, getSliderSoonMovies, getComedyMovies, getFamilyMovies, getDetectiveMovies} from './../actions'
import SliderBig from './sliderBig/SliderBig.jsx'
import SliderMiddle from './sliderMiddle/SliderMiddle.jsx'
import SliderSmall from './sliderSmall/SliderSmall.jsx'

injectTapEventPlugin()

class App extends Component{
    constructor(props) {
        super(props)

        this.state = {
            selectCity: false,
            signPopup: false,
            loginPopup: false,
            visSliderBig: false,
            visSliderRentMovies: false,
            visSliderSoonMovies: false,
            visSliderComedyMovies: false,
            visSliderFamilyMovies: false,
            visSliderDetectiveMovies: false
        }
    }

    componentWillMount(){
        this.props.dispatch(getSliderBig('city1', () => {
            this.setState({visSliderBig: true})
        }))

        this.props.dispatch(getSliderRentMovies('city1', (movies_rent) => {
            this.setState({visSliderRentMovies: true, movies_rent: movies_rent})
        }))

        this.props.dispatch(getSliderSoonMovies('city1', moment(), (movies_soon) => {
            this.setState({visSliderSoonMovies: true, movies_soon: movies_soon})
        }))

        this.props.dispatch(getComedyMovies((movies_comedy) => {
            this.setState({visSliderComedyMovies: true, movies_comedy: movies_comedy})
        }))

        this.props.dispatch(getFamilyMovies((movies_family) => {
            this.setState({visSliderFamilyMovies: true, movies_family: movies_family})
        }))

        this.props.dispatch(getDetectiveMovies((movies_detective) => {
            this.setState({visSliderDetectiveMovies: true, movies_detective: movies_detective})
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
                        <div className = {styles.trailers_container}>
                            <SliderBig />
                        </div>
                    : ''}
                    {this.state.visSliderRentMovies ?
                        <div className = {styles.movies_rent}>
                            <SliderMiddle title = 'В прокате' movies = {this.state.movies_rent}/>
                        </div>
                    : ''}
                    {this.state.visSliderSoonMovies ?
                        <div className = {styles.movies_soon}>
                            <SliderMiddle title = 'Скоро' movies = {this.state.movies_soon} showMonth = {true}/>
                        </div>
                    : ''}
                    <Ads/>
                    {this.state.visSliderComedyMovies ?
                        <div className = {styles.comedy_movies}>
                            <SliderSmall title = 'Комедии' movies = {this.state.movies_comedy} />
                        </div>
                    : ''}

                    {this.state.visSliderFamilyMovies ?
                        <div className = {styles.family_movies}>
                            <SliderSmall title = 'Семейное кино' movies = {this.state.movies_family} />
                        </div>
                    : ''}

                    {this.state.visSliderDetectiveMovies ?
                        <div className = {styles.detective_movies}>
                            <SliderSmall title = 'Детективы' movies = {this.state.movies_detective} />
                        </div>
                    : ''}
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
