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
    const params = {
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
    const params = {
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

export function getSliderSoonMovies(city, date, callback){
    const params = {
        params: {
            apikey: config.apikey,
            sort: 'showcount',
            filter: 'soon',
            date: date.format('DDMMYYYY'),
            city: city.substr(4)
        }
    };

    return (dispatch) => {
        dispatch(loading());

        request
            .get('/movies', params)
            .then((res) => {
                dispatch(loaded());
                dispatch(setSliderSoonMovies(res.data, callback));
            });
    };
}

export function getSliderRentMovies(city, callback){
    const params = {
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

export function getComedyMovies(callback){
    const params = {
        params: {
            apikey: config.apikey,
            sort: 'showcount'
        }
    };

    return (dispatch) => {
        dispatch(getIdGenre('комедия', (id) => {
            params.params.genre = id;
            dispatch(loading());

            request
                .get('/movies', params)
                .then((res) => {
                    dispatch(loaded());
                    dispatch(setComedyMovies(res.data, callback));
                });
        }));
    };
}

export function getFamilyMovies(callback){
    const params = {
        params: {
            apikey: config.apikey
        }
    };

    return (dispatch) => {
        dispatch(getIdGenre('семейный', (id) => {
            params.params.genre = id;
            dispatch(loading());

            request
                .get('/movies', params)
                .then((res) => {
                    dispatch(loaded());
                    dispatch(setFamilyMovies(res.data, callback));
                });
        }));
    };
}

export function getIdGenre(genre, callback){
    function findIdGenre(genre, genres, callback){
        callback(genres.find((elem) => {
            return elem[1] === genre ? true : false;
        })[0]);
    }

    return (dispatch, getState) => {
        const state = getState();

        if(state.app.genres === undefined){
            const params = {
                params: {
                    apikey: config.apikey
                }
            };

            dispatch(loading());

            request
                .get('/genres', params)
                .then((res) => {
                    dispatch(loaded());

                    dispatch(setGenres(res.data));
                    findIdGenre(genre, res.data, callback);
                });
        } else {
            findIdGenre(genre, state.app.genres, callback);
        }
    };
}

export function getDetectiveMovies(callback){
    const params = {
        params: {
            apikey: config.apikey
        }
    };

    return (dispatch) => {
        dispatch(getIdGenre('детектив', (id) => {
            params.params.genre = id;
            dispatch(loading());

            request
                .get('/movies', params)
                .then((res) => {
                    dispatch(loaded());
                    dispatch(setDetectiveMovies(res.data, callback));
                });
        }));
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

export function setSliderSoonMovies(data, callback){
    return {type: 'SET_SLIDERSOONMOVIES', data, callback};
}

export function setGenres(data){
    return {type: 'SET_GENRES', data};
}

export function setComedyMovies(data, callback){
    return {type: 'SET_COMEDYMOVIES', data, callback};
}

export function setFamilyMovies(data, callback){
    return {type: 'SET_FAMILYMOVIES', data, callback};
}

export function setDetectiveMovies(data, callback){
    return {type: 'SET_DETECTIVEMOVIES', data, callback};
}
