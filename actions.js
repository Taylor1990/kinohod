import axios from 'axios';
import {config} from './config';
import _ from 'lodash';

const request = axios.create({
    baseURL: config.server,
    headers: {
        'Content-Type': 'application/json'
    }
});

export function getCities(callback){
    var params = {
        params: {
            apikey: config.apikey
        }
    };

    return (dispatch) => {
        dispatch(loading());

        request
            .get('/cities', params)
            .then((res) => {
                dispatch(loaded());
                dispatch(setCities(res.data, callback));
            });
    };
}

export function getSliderBig(city, callback){
    var params = {
        params: {
            apikey: config.apikey,
            sort: 'showcount',
            city: city.substr(4)
        }
    };

    return (dispatch) => {
        dispatch(loading());

        request
            .get('/movies', params)
            .then((res) => {
                dispatch(loaded());
                dispatch(setSliderBig(res.data, callback));
            });
    };
}

export function getSliderRentMovies(city, callback){
    var params = {
        params: {
            apikey: config.apikey,
            sort: 'showcount',
            city: city.substr(4)
        }
    };

    return (dispatch) => {
        dispatch(loading());

        request
            .get('/movies', params)
            .then((res) => {
                dispatch(loaded());
                dispatch(setSliderRentMovies(res.data, callback));
            });
    };
}

export function loading(){
    return {type: 'LOADING'};
}

export function loaded(){
    return {type: 'LOADED'};
}

export function setCities(data, callback){
    return {type: 'SET_CITIES', data, callback};
}

export function setSliderBig(data, callback){
    return {type: 'SET_SLIDERBIG', data, callback};
}

export function setSliderRentMovies(data, callback){
    return {type: 'SET_SLIDERRENTMOVIES', data, callback};
}
