import { ACTION_FORM } from "../actionTypes/formActionTypes"

const addItem = (inputNamaBarang, inputQuantityBarang, inputHargaBarang) =>{
    return {
        type: ACTION_FORM,
        payload: {
            namaBarang: inputNamaBarang,
            quantityBarang: inputQuantityBarang,
            hargaBarang: inputHargaBarang
        },
    };
};
// const resetFormList = () => {
//     return {
//       type: RESET_FORM_LIST,
//     };
//   };

const actionFormOrder = {
    addItem
}

export default actionFormOrder;