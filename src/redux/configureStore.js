import {createStore, combineReducers } from 'redux'
import { Reducer} from "./reducer";
// import {initialState} from "./reducer"; THIS IS NOT NEEDED AS REDUCES HAS BEEN SPLITTED INTO MULTIPLE REDUCERS
import {Dishes} from "./dishes";
import {Leaders} from "./leader";
import {Promotions} from "./promotions";
import {Comments} from "./comments";


export const ConfigureStore = ( ) => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            dishes: Dishes
        }),
        // THE BELOW TWO PART IS NOT NEEDED. INITIAL STATE IS NOW IN EACH REDUCER WITH INITIAL STATE
        // HERE WE ARE COMBINING ALL THE INDIVIDUAL REDUCERS USING combineReducers Functions
        // Reducer,
        // initialState
    );
    debugger;
    console.log(" store ", store);
    return store;
};
