import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './selectCity.scss'

class selectCity extends Component{
    constructor(props){
        super(props)
    }

    convertCities(){
        let i = 0
        let cities_array = new Array(new Array())
        let count = 0;
        for(let j = 0; j < this.props.cities.length; j++){
            cities_array[i].push(this.props.cities[j]);
            count++;

            if(count == 16){
                i++;
                count = 0;
                cities_array[i] = [];
            }
        }
        return cities_array
    }

    render () {
        const cities_arr = this.convertCities()
        let i = 0,
            letter = this.props.cities[0].name.charAt(0),
            flag = true

        return(
            <div className = {styles.select_city}>
                <button className = {styles.auto_select_city}>
                    ОПРЕДЕЛИТЬ АВТОМАТИЧЕСКИ
                </button>

                <div className = {styles.prime_city}>
                    <div id = {'city' + this.props.cities.find((item) => {
                            return item.name === "Москва" ? true : false
                        }).id}>
                        Москва
                    </div>
                    <div id = {'city' + this.props.cities.find((item) => {
                            return item.name === "Санкт-Петербург" ? true : false
                        }).id}>
                        Санкт-Петербург
                    </div>
                </div>

                <div className = {styles.cities}>
                    {cities_arr.map((item) => {
                        return (
                            <div className = {styles.column} key = {'column' + i++}>
                                {item.map((item) => {
                                    if((item.name.charAt(0) === letter && flag) || (item.name.charAt(0) !== letter)){
                                        flag = false
                                        letter = item.name.charAt(0)

                                        return (
                                            <div key = {item.id} className = {styles.city_with_letter}>
                                                <div className = {styles.letter}>{letter}</div>
                                                <div id = {'city' + item.id} className = {styles.city}>{item.name}</div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className = {styles.city_without_letter}  key = {item.id}>
                                                <div id = {'city' + item.id} className = {styles.city}>{item.name}</div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

function select(state){
    return {
        cities: state.app.cities
    }
}

export default connect(select)(selectCity)
