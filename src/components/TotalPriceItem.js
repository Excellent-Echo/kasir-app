import React from "react";

function TotalPriceItem({ orderItems }) {
  let nominalTotalHarga = orderItems.reduce(
    (total, { harga, quantity }) => total + harga * quantity,
    0
  );

  return (
    <div className="bg-gray-200">
      <hr />
      <h1 className="text-xl">Total Item Price</h1>
      <h1>{nominalTotalHarga}</h1>
    </div>
  );
}

export default TotalPriceItem;
