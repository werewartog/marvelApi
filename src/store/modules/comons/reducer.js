import { APPLICATION_LOADING } from '../typeAction';
import produce from 'immer'

const initialState = {
    loader: false
};

export const comons = (state = initialState, action) => {
    switch(action.type) {
        case APPLICATION_LOADING: {
            return { ...state, loader: action.payload.loading };
        }
        default: {
            return state;
        }
    }
}
