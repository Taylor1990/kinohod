import React, {Component} from 'react'
import {connect} from 'react-redux'
import Slider from 'react-slick'
import Icons from 'react-uikit-icons'

import styles from './SliderBig.scss'
import {config} from './../../config'
import ButtonArrow from './../buttonArrow/ButtonArrow.jsx'

class SliderBig extends Component{
    constructor(props){
        super(props)
    }

    getPoster(item){
        return {
            background: 'url(' + config.host + '/p/236x354/' +
                item.poster.substr(0,2) +
                '/' + item.poster.substr(2,2) +
                '/' +  item.poster + ') 0 0 / cover'
        }
    }

    getTrailerPreview(item){

        return {
            background: 'url(' + config.host + '/p/970x354/' +
                item.trailers[0].preview.name.substr(0,2) +
                '/' + item.trailers[0].preview.name.substr(2,2) +
                '/' + item.trailers[0].preview.name + ') 0 0 / cover',
        }
    }

    render(){
        const settings = {
            accessibility: true,
            className : styles.sliderBig_container,
            adaptiveHeight: false,
            arrows: true,
            autoplay: false,
            dots: false,
            draggable: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            nextArrow: <ButtonArrow dir = "right"/>,
            prevArrow: <ButtonArrow dir = "left"/>,
            centerMode: true,
            centerPadding: '30px 0 50px',
            infinity: true
        }

        return(
            <div>
                <Slider {...settings} ref = {(c) => this.slider = c}>
                    {this.props.movies.map((item) => {
                        if(item.trailers !== null){
                            return (
                                <div className = {styles.slide} key = {item.title}>
                                    <div className = {styles.poster_container}>
                                        <div className = {styles.poster}
                                             style = {this.getPoster(item)} />
                                        <div className = {styles.icon_container}>
                                             <Icons className = {styles.icon} icon = 'plus' size = 'large' />
                                        </div>
                                    </div>
                                    <div className = {styles.trailer_container}>
                                        <div className = {styles.trailer_preview}
                                             style = {this.getTrailerPreview(item)} />
                                         <Icons className = {styles.icon} icon = 'play-circle' size = 'large' />
                                         <div className = {styles.title_container}>
                                             <div className = {styles.title}>{item.title}</div>
                                             <div className = {styles.description}>Эксклюзивный трейлер (дублированный)</div>
                                         </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </Slider>
            </div>
        )
    }
}

function select(state){
    return {
        movies: state.app.movies_now
    }
}

export default connect(select)(SliderBig)
