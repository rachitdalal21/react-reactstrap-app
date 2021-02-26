import {createStore } from 'redux'
import {Reducer, initialState} from "./reducer";

export const ConfigureStore = ( ) => {
    const store = createStore(
        Reducer,
        initialState
    );
    debugger;
    console.log(" store ", store);
    return store;
};