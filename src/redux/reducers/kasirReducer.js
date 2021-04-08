const initState = {
  nama: "",
  harga: 0,
  quantity: 0,
};

const kasirReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        nama: action.payload.nama,
        harga: action.payload.harga,
        quantity: action.payload.quantity,
      };
    default:
      return state;
  }
}

export default kasirReducer;