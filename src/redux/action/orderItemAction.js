const setOrderItems = (order) => {
  return {
    type: "SET_ORDER_ITEMS",
    payload: order,
  };
};

const setOrderName = (name) => {
  return {
    type: "SET_ORDER_NAME",
    payload: name,
  };
};

const setOrderQuantity = (quantity) => {
  return {
    type: "SET_ORDER_QUANTITY",
    payload: quantity,
  };
};
const setOrderHarga = (harga) => {
  return {
    type: "SET_ORDER_HARGA",
    payload: harga,
  };
};

const orderItemAction = {
  setOrderItems,
  setOrderName,
  setOrderQuantity,
  setOrderHarga,
};

export default orderItemAction;
