import _ from 'lodash';

export default function(state, action){
    if(action.type){
        switch(action.type){
            case 'LOADING':
                loading(state, action);
                break;
            case 'LOADED':
                loaded(state, action);
                break;
            case 'SET_CITIES':
                setCities(state, action);
                break;
            case 'SET_SLIDERBIG':
                setSliderBig(state, action);
                break;
            case 'SET_SLIDERRENTMOVIES':
                setSliderRentMovies(state, action);
                break;
        }
    }

    state = _.extend({}, state);

    return state;
}

function loading(state, action) {
    state.loading = true;
}

function loaded(state, action) {
    state.loading = false;
}

function setCities(state, action){
    state.cities = action.data;
    action.callback();
}

function setSliderBig(state, action){
    state.movies_now = action.data;
    action.callback();
}

function setSliderRentMovies(state, action){
    state.movies_rent = action.data;
    action.callback(action.data);
}
