import * as ActionTypes from './ActionTypes'
import {DISHES} from "../shared/dishes";
import {baseUrl} from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => {
    const test = {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
    return test;
};


export const fetchDishes = ( ) => (dispatch)  =>  {
    dispatch(dishesLoading(true));


    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000)

    return fetch(baseUrl+'dishes')
        .then((response) => response.json())
        .then((dishes) => {
            console.log(dishes)
            dispatch(addDishes(dishes));
        });
};

export const dishesLoading = () => {
    return {
        type: ActionTypes.DISHES_LOADING
    }
};

export const dishesFailed = ( errormess ) => {
    return {
        type: ActionTypes.DISHES_FAILED,
        payload: errormess
    }
};

export const addDishes = ( dishes ) => {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    }
}

export const fetchComments = (dispatch) => {
    return fetch( baseUrl + 'comments')
        .then( response => response.json())
        .then( comments => {
            dispatch(addComment(comments))
        })
}

export const commentsFailed = ( errmess ) =>( {
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

