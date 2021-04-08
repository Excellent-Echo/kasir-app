import React from 'react';
import {  useSelector } from "react-redux";

const TotalAllItem = ({ total, inputQuantityBarang, inputHargaBarang }) => {
    const totalAllItem  = useSelector((state) => state.totalAllItem.totalAllItem)
    let TotalAllItem = 0;
    TotalAllItem = totalAllItem.reduce((total, {inputQuantityBarang, inputHargaBarang}) => 
    total + inputQuantityBarang * inputHargaBarang, TotalAllItem)
    return (
        <div>
            <b><p>Total All Item: {TotalAllItem}</p></b>
        </div>
    )
}

export default TotalAllItem;