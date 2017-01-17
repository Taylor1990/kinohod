import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'

import styles from './SliderSmall.scss'
import {config} from './../../config'

class SliderSmall extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }
    }

    getPoster(index, height){
        return {
            background: 'url(' + config.host + '/p/236x158/' +
                this.props.movies[index].poster.substr(0,2) +
                '/' + this.props.movies[index].poster.substr(2,2) +
                '/' +  this.props.movies[index].poster + ') 0 ' + (height !== undefined ? height : '25%'),
            backgroundSize: 'cover'
        }
    }

    render(){
        return(
            <div className = {styles.slider_container}>
                <div className = {styles.title}>
                    {this.props.title}
                </div>
                <div className = {styles.sliders}>
                    {this.props.movies.map((item, index) => {
                        if(index >= this.state.index && index <= this.state.index + 4){
                            return (
                                <div className = {styles.slider} key = {item.title}>
                                    <div className = {styles.poster} style = {this.getPoster(index)}/>
                                    <div className = {styles.icon_container}>
                                        <Icons icon = 'plus' size = 'large' className = {styles.icon}/>
                                    </div>
                                    <div className = {styles.poster_blur} style = {this.getPoster(index, '49%')}/>
                                    <div className = {styles.title_container}>
                                        <div className = {styles.title}>
                                            {item.title}
                                        </div>
                                        <div className = {styles.country}>
                                            {item.countries[0]}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

function select(state){
    return {

    }
}

export default connect(select)(SliderSmall)
