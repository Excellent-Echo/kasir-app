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
            <h3>Total Harga : {item.quantity * item.harga}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayListItems;
