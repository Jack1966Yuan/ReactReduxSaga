import { FETCH_POSTS, NEW_POST, RECEIVE_POST_DATA, RECEIVE_NEW_POST } from '../actions/type';

const initialState = {
    items: [],
    item: {}
}

export default (state=initialState, {type, data}) => {
    switch(type) {
        case RECEIVE_POST_DATA:
            return {
                ...state,
                items: data
            }
        case RECEIVE_NEW_POST:
            return {
                ...state,
                item: data
            }       
        default:
            return state;
    }
}

/*
export default function(state = initialState, action) {
     switch(action.type) {
         case FETCH_POSTS:
           return {
               ...state,
               items: action.payload
           }
         case NEW_POST:
           return {
               ...state,
               item: action.payload
           }
         default:
            return state;
     }
}
*/