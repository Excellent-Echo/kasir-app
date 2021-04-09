import { SET_LIST_ORDER } from "../actionType/actionTypes"


const setListOrder = (nama,quantity,price)=>{
    return {
        type: SET_LIST_ORDER,
        payload: {
            nama: nama,
            quantity: quantity,
            price: price,
        },
    };
}

const listOrderActions = {
    setListOrder
}

export default listOrderActions;