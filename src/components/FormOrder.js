import React, { useState } from "react";

// sweet alert
import Swal from "sweetalert2";

function FormOrder({ handleAddItem }) {
  const [barang, setBarang] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [harga, setHarga] = useState(0);

  // handle form
  const handleForm = (e) => {
    e.preventDefault();
    if (barang === "") {
      Swal.fire(`Barang tidak boleh kosong`);
    } else if (quantity === 0) {
      Swal.fire(`quantity tidak boleh kosong`);
    } else if (harga === 0) {
      Swal.fire(`harga tidak boleh kosong`);
    } else {
      handleAddItem(barang, quantity, harga);
      setBarang("");
      setQuantity(0);
      setHarga(0);
      //   console.log("ini barang", barang);
      //   console.log("ini quantity", quantity);
      //   console.log("ini harga", harga);
    }
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Input nama barang : </label>
        <br />
        <input
          className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
          type="text"
          name="barang"
          placeholder="Input Barang"
          value={barang}
          onChange={(e) => setBarang(e.target.value)}
        />
        <br />
        <br />
        <label>Input quantity barang : </label>
        <br />
        <input
          className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <br />
        <label>Input harga barang : </label>
        <br />
        <input
          className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-red-300"
          type="number"
          name="harga"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
        <br />
        <br />
        <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">
          Pesan
        </button>
      </form>
    </div>
  );
}

export default FormOrder;
