import { GET_QUANTITY } from "../actionType/actionTypes"


const setQuantity = (quantity)=> async dispatch =>{
    dispatch({
        type: GET_QUANTITY,
        payload: quantity,
    })
}

const quantityActions = {
    setQuantity
}

export default quantityActions;