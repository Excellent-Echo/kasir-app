import React from "react";
import { useSelector } from "react-redux";


const DisplayListItems = () => {
    const items = useSelector((state) => state.list);

    return (
        <div className="container">
            <table>
                {items.length > 0 &&
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama Barang</th>
                            <th>Harga (Rp)</th>
                            <th>Quantity</th>
                            <th>Total Harga (Rp)</th>
                        </tr>
                    </thead>
                }
                <tbody>
                    {items &&
                        items.map((val, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{val.nama}</td>
                                <td>{Number(val.harga).toLocaleString()}</td>
                                <td>{val.quantity}</td>
                                <td>{(val.quantity * val.harga).toLocaleString()}</td>
                            </tr>
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayListItems;
