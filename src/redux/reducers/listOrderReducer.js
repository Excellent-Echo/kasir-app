import {GET_LIST_ORDER} from '../actionType/actionTypes';

const initialState = {
    listOrder: '',
}

const listOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_ORDER:
            return {
                listOrder: action.payload,
            }
        default: return state
    }
}

export default listOrderReducer;