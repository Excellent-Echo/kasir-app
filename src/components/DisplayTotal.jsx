import React from 'react'

const DisplayTotal = ({orderItems}) => {
    const arrTotalHarga = orderItems.map((item)=>item.harga * item.quantity);
    const totalHarga = arrTotalHarga.reduce((total, harga)=>total + harga);
    return (
        <div className="card shadow-lg p-5 mb-5">
            <h2>Total yang harus dibayar :</h2>
            <h2 className="font-weight-bold">Rp. {totalHarga} ,-</h2>
        </div>
    )
}

export default DisplayTotal
