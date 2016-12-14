import axios from 'axios';
import {config} from './config';

const request = axios.create({
    baseURL: config.server,
    withCredentials: true,
    auth: config.auth
});

export function getCities(){
    return (dispatch) => {
        dispatch(loading());

        request
            .get('/cities.json')
            .then((req) => {
                console.log(req);
            });
    };
}

export function loading(){
    return {type: 'LOADING'};
}
