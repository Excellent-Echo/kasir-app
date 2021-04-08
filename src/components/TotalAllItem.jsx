import React from 'react'

const TotalAllItem = ({ orderTotal }) => {
    let TotalAllItem = 0;
    TotalAllItem = orderTotal.reduce((total, {inputQuantityBarang, inputHargaBarang}) => 
    total + inputQuantityBarang * inputHargaBarang, TotalAllItem)
    return (
        <div className="total-belanja">
            <h3>Total Belanja: Rp {TotalAllItem}</h3>
        </div>
    )
}

export default TotalAllItem
