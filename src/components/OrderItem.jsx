import React from 'react'

const OrderItem = ({orderItem}) => {
    return (
        <div>
            <div className="card shadow p-3 mb-3">
            <span className="d-block">Nama Barang : {orderItem.nama}</span>
            <span className="d-block">Quantity Barang : {orderItem.quantity}</span>
            <span className="d-block">Harga Barang : {orderItem.harga}</span>
        </div>
        </div>
    )
}

export default OrderItem
