const initialState = [];

const orderItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_ITEMS":
      return [...state, action.payload.orders];
    default:
      return state;
  }
};

export default orderItemReducer;
