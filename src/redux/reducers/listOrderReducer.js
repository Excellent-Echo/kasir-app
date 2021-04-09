import {SET_LIST_ORDER} from '../actionType/actionTypes';

const initialState = {
    listOrder: []
}

const listOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_ORDER:
            return {
                ...state,
                listOrder: [...state.listOrder, action.payload]
            }
        default: return state
    }
}

export default listOrderReducer;