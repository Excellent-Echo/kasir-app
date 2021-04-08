import React from 'react';
import OrderItem from './OrderItem';

const DisplayListItems = ({orderItem}) => {
    return (
        <div>
            {orderItem.map((item, index)=><OrderItem key={index} orderItem={item}/>)}
        </div>
    )
}

export default DisplayListItems
