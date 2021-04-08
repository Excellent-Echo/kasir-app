import React from 'react'

const DisplayListItem = ({orderList}) => {
    return (
        <div>
            <table>
                <thead>
                    <td>
                        No
                    </td>
                    <td>
                        Nama Barang
                    </td>
                    <td>
                        Quantity Barang
                    </td>
                    <td>
                        Harga Barang
                    </td>
                </thead>
            </table>
            {orderList.map((item, index)=>{
            return(         
                <tbody>
                    <td>{index+1}</td>
                    <td>{item.inputNamaBarang}</td>
                    <td>{item.inputQuantityBarang}</td>
                    <td>{item.inputHargaBarang}</td>
                </tbody>
            )
            })}
        </div>
    )
}

export default DisplayListItem
