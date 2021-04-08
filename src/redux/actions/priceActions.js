import { GET_PRICE } from "../actionType/actionTypes"


const setPrice = (price)=> async dispatch =>{
    dispatch({
        type: GET_PRICE,
        payload: price,
    })
}

const priceActions = {
    setPrice
}

export default priceActions;