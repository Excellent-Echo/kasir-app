import React from 'react';
import { useSelector } from "react-redux";
import ActionFormOrder from "../redux/action/actionFormOrder";

const DisplayListItem = ({inputNamaBarang, inputQuantityBarang, inputHargaBarang}) => {
    const ListOrder = useSelector((state) => state.ListOrder.ListOrder)
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
                    <td>
                        Total
                    </td>
                </thead>
            
            {   
                ListOrder &&
                ListOrder.map((item, index)=>{
         
            return(   
                <>    
                <tbody>
                    <td key={index}>{index+1}</td>
                    <td>{inputNamaBarang}</td>
                    <td>{inputQuantityBarang}</td>
                    <td>{inputHargaBarang}</td>
                    <td>{inputQuantityBarang * inputHargaBarang}</td>
                </tbody>
                </>
            )
            })}
            </table>
        </div>
    )
}

export default DisplayListItem
