import React from "react";

function TotalPriceItem({ orderItems }) {
  let nominalTotalHarga = orderItems.reduce(
    (total, { harga, quantity }) => total + harga * quantity,
    0
  );

  return (
    <div>
      <h1>Total Item Price</h1>
      <h1>{nominalTotalHarga}</h1>
    </div>
  );
}

export default TotalPriceItem;
