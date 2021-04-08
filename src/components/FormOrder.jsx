import React from 'react';

const FormOrder = ({setOrder, order, handleAddItem}) => {
    return (
        <div className="card shadow-lg p-5 mb-5">
            <form onSubmit={handleAddItem}>
                <div className="form-group">
                    <label htmlFor="namaBarang">Nama Barang</label>
                    <input type="text" name="namaBarang" id="namaBarang" className="form-control" onChange={e=>{setOrder({...order, nama:e.target.value})}} value={order.nama}/>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity Barang</label>
                    <input type="number" name="quantity" id="quantity" className="form-control" onChange={e=>{setOrder({...order, quantity:e.target.value})}} value={order.quantity}/>
                </div>
                <div className="form-group">
                    <label htmlFor="hargaBarang">Harga Barang</label>
                    <input type="number" name="hargaBarang" id="hargaBarang" className="form-control" onChange={e=>{setOrder({...order, harga:e.target.value})}} value={order.harga}/>
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" id="submit" className="form-control btn btn-primary" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default FormOrder
