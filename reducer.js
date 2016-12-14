import _ from 'lodash';

export default function(state, action){
    if(action.type){
        switch(action.type){
            case 'LOADING':
                loading(state, action);
                break;
        }
    }

    state = _.extend({}, state);

    return state;
}

function loading(state, action) {
    state.loading = true;
}
