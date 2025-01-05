import { legacy_createStore } from 'redux';

const initialState = { clickCount: 0 };
export function reducer(state=initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { ...state, clickCount: state.clickCount + 1 }
        default:
            return state;
    }
}

export const store = legacy_createStore(reducer);