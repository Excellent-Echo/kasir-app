import React, { useState } from "react";
import { useDispatch } from "react-redux";
import kasirAction from "../redux/actions/kasirAction";
import styled from "styled-components";

import './FormOrder.css';

const FormOrder = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [hargaBarang, setHargaBarang] = useState("");
    const [quantity, setQuantity] = useState("");

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();

        if (!Number(hargaBarang)) {
            alert("Input harga barang salah")
        } else if (!Number(quantity)) {
            alert("Input quantity salah")
        } else {
            dispatch(kasirAction.addItem(namaBarang, hargaBarang, quantity));
        }

        setNamaBarang("");
        setHargaBarang("");
        setQuantity("");
    }

    return (
        <form onSubmit={handleForm}>
            <div className="nama-barang">
                <label>Nama Barang</label>
                <input
                    type="text"
                    className="namaBarang"
                    value={namaBarang}
                    onChange={(e) => setNamaBarang(e.target.value)}
                />
            </div>
            <div className="harga-barang">
                <label>Harga Barang</label>
                <input
                    type="text"
                    className="hargaBarang"
                    value={hargaBarang}
                    onChange={(e) => setHargaBarang(e.target.value)}

                />
            </div>
            <div className="qty-barang">
                <label>Quantity</label>
                <input
                    type="text"
                    id="qtyBarang"
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
