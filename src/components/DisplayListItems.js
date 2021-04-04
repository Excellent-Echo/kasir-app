import React from "react";

function DisplayListItems({ orderItems }) {
  return (
    <div>
      <p>Display Items</p>
      <div>
        {orderItems.map((item, index) => (
          <div key={index}>
            <p>Barang : {item.barang}</p>
            <p>Harga : {item.harga}</p>
            <p>Kuantitas : {item.quantity}</p>
            <p>Total Harga : {item.quantity * item.harga}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayListItems;
