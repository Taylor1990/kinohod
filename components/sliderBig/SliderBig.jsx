import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'

import {config} from './../../config'
import styles from './SliderBig.scss'

class SliderBig extends Component{
    constructor(props){
        super(props)

        this.state = {
            index: 0
        }
    }

    getPoster(index){
        return {
            background: 'url(' + config.host + '/p/236x354/' +
                this.props.movies_now[index].poster.substr(0,2) +
                '/' + this.props.movies_now[index].poster.substr(2,2) +
                '/' +  this.props.movies_now[index].poster + ')',
            backgroundSize: 'cover'
        }
    }

    getTrailerPreview(index){
        return {
            background: 'url(' + config.host + '/p/970x354/' +
                this.props.movies_now[index].trailers[0].preview.name.substr(0,2) +
                '/' + this.props.movies_now[index].trailers[0].preview.name.substr(2,2) +
                '/' +  this.props.movies_now[index].trailers[0].preview.name + ')',
            backgroundSize : 'cover'
        }
    }

    getNextTrailer(index){
        if(index < this.props.movies_now.length){
            return {
                background: 'url(' + config.host + '/p/970x354/' +
                    this.props.movies_now[index + 1].poster.substr(0,2) +
                    '/' + this.props.movies_now[index + 1].poster.substr(2,2) +
                    '/' + this.props.movies_now[index + 1].poster + ')',
                backgroundSize: 'cover'
            }
        }
    }

    render(){
        return(
            <div className = {styles.sliderBig_container}>
                <div className = {styles.poster_container}>
                    <div className = {styles.poster}
                         style = {this.getPoster(this.state.index)} />
                    <Icons className = {styles.icon} icon = 'plus-circle' size = 'large' />

                </div>
                <div className = {styles.trailer_container}>
                    <div className = {styles.trailer_preview}
                         style = {this.getTrailerPreview(this.state.index)} />
                     <Icons className = {styles.icon} icon = 'play-circle' size = 'large' />
                     <div className = {styles.title_container}>
                         <div className = {styles.title}>{this.props.movies_now[this.state.index].title}</div>
                         <div className = {styles.description}>Эксклюзивный трейлер (дублированный)</div>
                     </div>
                </div>
                <div className = {styles.trailer_next_container}>
                    <div className = {styles.trailer_next}
                         style = {this.getNextTrailer(this.state.index)}/>
                    <div className = {styles.icon_block}>
                         <Icons className = {styles.icon} icon = "angle-right" size = "large" />
                     </div>
                </div>
            </div>
        )
    }
}

function select(state){
    return {
        movies_now: state.app.movies_now
    }
}

export default connect(select)(SliderBig)
