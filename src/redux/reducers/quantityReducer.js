import {GET_QUANTITY} from '../actionType/actionTypes';

const initialState = {
    productQuantity: '',
}

const quantityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUANTITY:
            return {
                productQuantity: action.payload,
            }
        default: return state
    }
}

export default quantityReducer;
