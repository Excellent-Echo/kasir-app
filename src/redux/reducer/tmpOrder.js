const initialState = {};

const tmpOrder = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_NAME":
      return {
        ...state,
        name: action.payload,
      };
      break;
    case "SET_ORDER_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };
      break;
    case "SET_ORDER_HARGA":
      return {
        ...state,
        harga: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default tmpOrder;
