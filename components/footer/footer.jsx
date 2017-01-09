import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'

import styles from './footer.scss'

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className = {styles.footer}>
                <div className = {styles.refs_container}>
                    <div className = {styles.refs_left}>
                        <div className = {styles.refs_top}>
                            <div>
                                Возврат билетов
                            </div>
                            <div>
                                Активировать сертификат
                            </div>
                            <div>
                                Подарки
                            </div>
                            <div>
                                Помощь
                            </div>
                        </div>
                        <div className = {styles.refs_bottom}>
                        <div>
                            Условия использования сайта
                        </div>
                        <div>
                            Условия покупки билетов
                        </div>
                        <div>
                            Политика конфидециальности
                        </div>
                    </div>
                    </div>
                    <div className = {styles.refs_social}>
                        <div className = {styles.facebook}/>
                        <div className = {styles.twitter}/>
                        <div className = {styles.vk}/>
                        <div className = {styles.ok}/>
                        <div className = {styles.instagram}/>
                    </div>
                </div>
                <div className = {styles.bottom_container}>
                    <div className = {styles.top}>
                        <div className = {styles.subscribe}>
                            <input type = "text" placeholder = 'Подпишитесь на рассылку'/>
                        </div>
                        <button className = {styles.button}>
                            ПОДПИСАТЬСЯ
                        </button>
                        <div className = {styles.apps}>
                            <div className = {styles.app_store}>
                                <Icons className = {styles.icon} size = 'large' icon = 'mobile'/>
                                <div className = {styles.title}>
                                    Скачать в
                                    <div>App Store</div>
                                </div>
                            </div>
                            <div className = {styles.google_play}>
                                <div className = {styles.icon}/>
                                <div className = {styles.title}>
                                    Скачать в
                                    <div>Google Play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {styles.bottom}>
                    	&#169; 2011-2016 Kinohod.ru. Все права защищены. Дизайн - Monographic.
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

export default connect(select)(Footer)
