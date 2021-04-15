import React from 'react';
import OrderItem from './OrderItem';
import {useSelector} from 'react-redux';

const DisplayListItems = () => {
    const orderItem = useSelector(state => state.orderItem.orders);
    return (
        <div>
            {orderItem.map((item, index)=><OrderItem key={index} orderItem={item}/>)}
        </div>
    )
}

export default DisplayListItems
