import {ACTION_FORM} from "../actionTypes/formActionTypes";

const initialState = {
    actionForm: [],
};

const FormReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_FORM:
            return {
                ...state,
                actionForm:[...state.actionForm, 
                            action.payload.namaBarang,
                            action.payload.quantityBarang,
                            action.payload.hargaBarang
                        ]
            }
        default:
            return state
    }
}

export default FormReducer;
