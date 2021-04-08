import {GET_NAME} from '../actionType/actionTypes'

const initialState = {
    productName:"",
}

const productNameReducer = (state = initialState, action)=>{
    switch(action.type){

        case GET_NAME:
            return {
                productName:action.payload
            }
        default :
            return state
    }
}

export default productNameReducer;