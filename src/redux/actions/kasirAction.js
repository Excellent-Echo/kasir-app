const addItem = (namaBarang, hargaBarang, quantity) => {
  return {
    type: "ADD_ITEM",
    payload: {
      nama: namaBarang,
      harga: hargaBarang,
      quantity: quantity,    
    },
  };
};

const kasirAction = {
  addItem,
};

export default kasirAction;
