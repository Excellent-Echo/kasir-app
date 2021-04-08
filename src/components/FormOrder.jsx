import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import kasirAction from "../redux/actions/kasirAction";
import styled from "styled-components";

import './FormOrder.css';

const FormOrder = () => {
    const [namaBarang, setNamaBarang] = useState("");
    const [hargaBarang, setHargaBarang] = useState("");
    const [quantity, setQuantity] = useState("");

    const item = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();

        dispatch(kasirAction.addItem(namaBarang, hargaBarang, quantity));

        // if (!item.nama) {
        //     alert("Nama Barang tidak boleh kosong");
        //     return;
        // } else if (!Number(item.harga) || !Number(item.quantity)) {
        //     alert("Tipe data Harga Barang dan Quantity salah")
        // }

        // handleAddItem(item.nama, item.harga, item.quantity);

        setNamaBarang("");
        setHargaBarang("");
        setQuantity("");
    }

    // const handleForm = (e) => {
    //     e.preventDefault();

    //     if (!namaBarang || !Number(hargaBarang) || !Number(quantity)) {
    //         alert("Nama Barang tidak boleh kosong/Tipe data Harga Barang dan Quantity salah")
    //         return;
    //     }

    //     handleAddItem(namaBarang, hargaBarang, quantity);

    //     setNamaBarang("");
    //     setHargaBarang("");
    //     setQuantity("");
    // }


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
