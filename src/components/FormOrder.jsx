import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import nameActions from '../redux/actions/nameActions'
import priceActions from '../redux/actions/priceActions';
import quantityActions from '../redux/actions/quantityActions';
import listOrderActions from '../redux/actions/listOrderActions';

const FormOrder = () => {

    const dispatch = useDispatch();
    const name = useSelector((state)=> state.productNames.productName);
    const quantity = useSelector((state)=> state.productQuantities.productQuantity);
    const price = useSelector((state)=> state.productPrices.productPrice);
    

    const handleFormOrder = (name,quantity,price) =>{
        dispatch(listOrderActions.setListOrder(name,quantity,price));
        //console.log(orderList)
    }

    

    return (
        <form onSubmit={handleFormOrder(name,quantity,price)}> 
            <div>
                <label>Name :</label>
                <input 
                type="text" 
                onChange={(e) => dispatch(nameActions.setName(e.target.value))}
                value={name}
                />
            </div>
            <div>
                <label>Quantity :</label>
                <input
                type="text" 
                onChange={(e) => dispatch(quantityActions.setQuantity(e.target.value))}
                value={quantity}
                />
            </div>
            <div>
                <label>Price :</label>
                <input
                type="text" 
                onChange={(e) => dispatch(priceActions.setPrice(e.target.value))}
                value={price}
                />
            </div>
            <button type="submit">Order</button>
        </form>
    )
}

export default FormOrder;