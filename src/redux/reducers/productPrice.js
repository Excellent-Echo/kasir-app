import {GET_PRICE} from '../actionType/actionTypes';

const initialState = {
    productPrice: '',
}

const productPrice = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRICE:
            return {
                productPrice: action.payload,
            }
        default: return state
    }
}

export default productPrice;