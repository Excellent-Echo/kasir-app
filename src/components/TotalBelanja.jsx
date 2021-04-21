import React from "react";
import { useSelector } from "react-redux";

import './OrderPage.css';

const TotalBelanja = () => {
    const items = useSelector((state) => state.list);
    let sum = 0

    const total = () => {
        items.forEach(item => {
            let totalHarga = item.harga * item.quantity
            sum += totalHarga
        });
        return sum.toLocaleString();
    }

    return (
        <>
            {items.length > 0 &&
                <div className="total-belanja">
                    <h3>Total Belanja: Rp {total()}</h3>
                </div>
            }
        </>
    )
}

export default TotalBelanja;