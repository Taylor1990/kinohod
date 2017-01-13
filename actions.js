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

export function loading(){
    return {type: 'LOADING'};
}

export function loaded(){
    return {type: 'LOADED'};
}

export function setCities(data, callback){
    return {type: 'SET_CITIES', data, callback};
}
