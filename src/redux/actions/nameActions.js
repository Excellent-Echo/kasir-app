import { GET_NAME } from "../actionType/actionTypes"


const setName = (name)=> async dispatch =>{
    dispatch({
        type: GET_NAME,
        payload: name,
    })
}

const nameActions = {
    setName
}

export default nameActions;