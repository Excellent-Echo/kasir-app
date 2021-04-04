import React, { useState, useEffect } from "react";

// components
import FormOrder from "./FormOrder";
import DisplayListItems from "./DisplayListItems";
import TotalPriceItem from "./TotalPriceItem";

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    console.log("ini orderItems", orderItems);
  }, [orderItems]);

  const handleAddItem = (barang, quantity, harga) => {
    let orderBarangBaru = [...orderItems, { barang, quantity, harga }];
    setOrderItems(orderBarangBaru);
  };

  return (
    <div>
      <FormOrder handleAddItem={handleAddItem} />
      <DisplayListItems orderItems={orderItems} />
      <TotalPriceItem orderItems={orderItems} />
    </div>
  );
}

export default OrderPage;
