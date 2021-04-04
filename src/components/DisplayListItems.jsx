import React from "react";


const DisplayListItems = ({ orderItems }) => {

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Barang</th>
                        <th>Harga</th>
                        <th>Quantity</th>
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
                        </tr>
                    </tbody>
                    )
                })}
            </table>
        </div>
    );
};

export default DisplayListItems;
