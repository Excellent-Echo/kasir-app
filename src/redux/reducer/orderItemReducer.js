const initialState = {
  orders: [
    {
      name: "",
      quantity: 0,
      harga: 0,
    },
  ],
};

const orderItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_ITEMS":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderItemReducer;
