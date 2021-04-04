import React, { useState } from "react";

import './FormOrder.css';

const FormOrder = ({handleAddItem}) => {
    const [namaBarang, setNamaBarang] = useState("");
    const [hargaBarang, setHargaBarang] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        if (!namaBarang || !Number(hargaBarang) || !Number(quantity)) {
            alert("Nama Barang tidak boleh kosong/Tipe data Harga Barang dan Quantity salah")
            return;
        }
        
        handleAddItem(namaBarang, hargaBarang, quantity);

        setNamaBarang("");
        setHargaBarang("");
        setQuantity("");
    }

    return (
        <form onSubmit={handleForm}>
            <div className="nama-barang">
                <label htmlFor="namaBarang" className="nama-barang">
                    Nama Barang
                    </label>
                <input
                    type="text"
                    id="namaBarang"
                    name="nama"
                    value={namaBarang}
                    onChange={(e) => setNamaBarang(e.target.value)}
                />
            </div>
            <div className="harga-barang">
                <label htmlFor="hargaBarang" className="nama-barang">
                    Harga Barang
                    </label>
                <input
                    type="text"
                    id="hargaBarang"
                    name="harga"
                    value={hargaBarang}
                    onChange={(e) => setHargaBarang(e.target.value)}

                />
            </div>
            <div className="qty-barang">
                <label htmlFor="qtyBarang" className="qty-barang">
                    Quantity
                    </label>
                <input
                    type="text"
                    id="qtyBarang"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div className="button-submit">
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default FormOrder;
