import {COMMENTS} from "../shared/comments";
import * as ActionTypes from './ActionTypes';


export const Comments = (state= COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();

            // Here we are not mutating the original state instead we are concatenating the state with the new
            // comment and returning the new state. Concat is not modifying the existing state instead it return a
            // new copy of the state.
            return state.concat(comment);
        default:
            return state;

    }
}
