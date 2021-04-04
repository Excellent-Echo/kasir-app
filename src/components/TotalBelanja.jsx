import React from "react";

import './OrderPage.css';

const TotalBelanja = ({ orderItems }) => {
    let totalBelanja = orderItems.reduce((total, {quantity, hargaBarang}) => 
    total + quantity * hargaBarang, 0)
    return (
        <div className="total-belanja">
            <h3>Total Belanja: Rp {totalBelanja}</h3>
        </div>
    )
}

export default TotalBelanja;