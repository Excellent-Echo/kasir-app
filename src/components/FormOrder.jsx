import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import orderItemAction from '../redux/action/orderItemAction';


const FormOrder = () => {
    const dispatch = useDispatch();
    const orderItems = useSelector((state)=>state.tmpOrder);

    const handleAddItem = (e)=>{
        e.preventDefault();
        dispatch(orderItemAction.setOrderItems(orderItems));
    }
    
    return (
        <div className="card shadow-lg p-5 mb-5">
            <form onSubmit={handleAddItem}>
                <div className="form-group">
                    <label htmlFor="namaBarang">Nama Barang</label>
                    <input type="text" name="namaBarang" id="namaBarang" className="form-control" onChange={e=>dispatch(orderItemAction.setOrderName(e.target.value))} value={orderItems.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity Barang</label>
                    <input type="number" name="quantity" id="quantity" className="form-control" onChange={e=>dispatch(orderItemAction.setOrderQuantity(e.target.value))} value={orderItems.quantity}/>
                </div>
                <div className="form-group">
                    <label htmlFor="hargaBarang">Harga Barang</label>
                    <input type="number" name="hargaBarang" id="hargaBarang" className="form-control" onChange={e=>dispatch(orderItemAction.setOrderHarga(e.target.value))} value={orderItems.harga}/>
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" id="submit" className="form-control btn btn-primary" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default FormOrder
