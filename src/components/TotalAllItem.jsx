import React from 'react'

const TotalAllItem = ({ orderTotal }) => {
    let TotalAllItem = 0;
    TotalAllItem = orderTotal.reduce((total, {inputQuantityBarang, inputHargaBarang}) => 
    total + inputQuantityBarang * inputHargaBarang, TotalAllItem)
    return (
        <div>
            <b><p>Total Belanja: Rp {TotalAllItem}</p></b>
        </div>
    )
}

export default TotalAllItem
