import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'

import styles from './SliderMiddle.scss'
import {config} from './../../config'

class SliderMiddle extends Component{
    constructor(props){
        super(props)

        this.state = {
            index: 0
        }
    }

    getPoster(index){
        return {
            background: 'url(' + config.host + '/p/236x354/' +
                this.props.movies[index].poster.substr(0,2) +
                '/' + this.props.movies[index].poster.substr(2,2) +
                '/' +  this.props.movies[index].poster + ')',
            backgroundSize: 'cover'
        }
    }

    render(){
        console.log(this.props.movies)
        return (
            <div className = {styles.slider_container}>
                <div className = {styles.title}>
                    {this.props.title}
                </div>
                <div className = {styles.slider}>
                    {this.props.movies.map((item, index) => {
                        if(index >= this.state.index && index <= this.state.index + 4){
                            return (
                                <div key = {item.title} className = {styles.item_container}>
                                    <div className = {styles.item} style = {this.getPoster(index)}/>
                                    <Icons className = {styles.icon} icon = 'plus-circle' size = 'large' />
                                </div>
                            )
                        }
                    })}
                    {this.state.index + 4 < this.props.movies.length ?
                        <div className = {styles.movie_next_container}>
                            <div className = {styles.movie_next} style = {this.getPoster(this.state.index + 5)}/>
                            <div className = {styles.icon_block}>
                                 <Icons className = {styles.icon} icon = "angle-right" size = "large" />
                             </div>
                        </div>
                    :''}
                </div>
            </div>
        )
    }
}

function select(state){
    return {

    }
}

export default connect(select)(SliderMiddle)
