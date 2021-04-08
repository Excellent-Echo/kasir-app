import { GET_LIST_ORDER } from "../actionType/actionTypes"


const setListOrder = (nama,quantity,price)=> async dispatch =>{
    dispatch({
        type: GET_LIST_ORDER,
        payload: {
            nama: nama,
            quantity: quantity,
            price: price,
        },
    })
}

const listOrderActions = {
    setListOrder
}

export default listOrderActions;