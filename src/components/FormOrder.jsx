import React from 'react';

const FormOrder = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="namaBarang">Nama Barang</label>
                    <input type="text" name="namaBarang" id="namaBarang" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity Barang</label>
                    <input type="number" name="quantity" id="quantity" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="hargaBarang">Harga Barang</label>
                    <input type="number" name="hargaBarang" id="hargaBarang" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" id="submit" className="form-control" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default FormOrder
