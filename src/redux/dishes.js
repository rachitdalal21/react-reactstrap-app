import * as ActionTpyes from './ActionTypes';


// export const Dishes = (state= DISHES, action) => { // Now we do not need plain state of the DISHES. Instead will pass three parameter
export const Dishes = (state= {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTpyes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTpyes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTpyes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;

    }
}
