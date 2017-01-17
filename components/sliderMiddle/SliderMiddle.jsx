import React, {Component} from 'react'
import {connect} from 'react-redux'
import Icons from 'react-uikit-icons'
import moment from 'moment'

import styles from './SliderMiddle.scss'
import {config} from './../../config'
import {getSliderSoonMovies} from './../../actions'

moment.locale('ru')

class SliderMiddle extends Component{
    constructor(props){
        super(props)

        this.state = {
            index: 0,
            movies: this.props.movies,
            selectedMonth: moment().format('M')
        }
    }

    getPoster(index){
        return {
            background: 'url(' + config.host + '/p/236x354/' +
                this.state.movies[index].poster.substr(0,2) +
                '/' + this.state.movies[index].poster.substr(2,2) +
                '/' +  this.state.movies[index].poster + ')',
            backgroundSize: 'cover'
        }
    }

    onClickMonth(e){
        e.persist()
        this.props.dispatch(getSliderSoonMovies('city1', moment(e.target.id.substr(5), 'MM'), (movies) => {
            this.setState({movies: movies, selectedMonth: moment(e.target.id.substr(5), 'M').format('M')})
        }))
    }

    render(){
        return (
            <div className = {styles.slider_container}>
                <div className = {styles.head}>
                    <div className = {styles.title}>
                        {this.props.title}
                    </div>
                    {this.props.showMonth ?
                        <div className = {styles.months}>
                            <button id = {'month' + moment().format('MM')}
                                    className = {styles.month + (this.state.selectedMonth == 1 ? ' ' + styles.month__checked : '')}
                                    onClick = {this.onClickMonth.bind(this)}>
                                {moment().format('MMMM')}
                            </button>
                            <button id = {'month' + moment().add(1, 'M').format('MM')}
                                    className = {styles.month + (this.state.selectedMonth == 2 ? ' ' + styles.month__checked : '')}
                                    onClick = {this.onClickMonth.bind(this)}>
                                {moment().add(1, 'M').format('MMMM')}
                            </button>
                            <button id = {'month' + moment().add(2, 'M').format('MM')}
                                    className = {styles.month + (this.state.selectedMonth == 3 ? ' ' + styles.month__checked : '')}
                                    onClick = {this.onClickMonth.bind(this)}>
                                {moment().add(2, 'M').format('MMMM')}
                            </button>
                            <button id = {'month' + moment().add(3, 'M').format('MM')}
                                    className = {styles.month + (this.state.selectedMonth == 4 ? ' ' + styles.month__checked : '')}
                                    onClick = {this.onClickMonth.bind(this)}>
                                {moment().add(3, 'M').format('MMMM')}
                            </button>
                        </div>
                    : ''}
                </div>
                <div className = {styles.slider}>
                    {this.state.movies.map((item, index) => {
                        if(index >= this.state.index && index <= this.state.index + 4){
                            return (
                                <div key = {item.title} className = {styles.item_container}>
                                    <div className = {styles.item} style = {this.getPoster(index)}/>
                                    <Icons className = {styles.icon} icon = 'plus-circle' size = 'large' />
                                </div>
                            )
                        }
                    })}
                    {this.state.index + 4 < this.state.movies.length ?
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
        movies_soon: state.app.movies_soon
    }
}

export default connect(select)(SliderMiddle)
