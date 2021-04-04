import React from "react";


const DisplayListItems = ({ orderItems }) => {

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Barang</th>
                        <th>Harga (Rp)</th>
                        <th>Quantity</th>
                        <th>Total Harga (Rp)</th>
                    </tr>
                </thead>
                {orderItems.map((item, index) => {
                    return (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.namaBarang}</td>
                            <td>{item.hargaBarang}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.hargaBarang}</td>
                        </tr>
                    </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayListItems;
