const setOrderItems = (order) => {
  return {
    type: "SET_ORDER_ITEMS",
    payload: {
      orders: order,
    },
  };
};

const orderItemAction = {
  setOrderItems,
};

export default orderItemAction;
