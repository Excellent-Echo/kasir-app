import React, { useState, useEffect } from "react";

import './OrderPage.css';

import FormOrder from "./FormOrder";
import DisplayListItems from "./DisplayListItems";

const OrderPage = () => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        console.log(orderItems);
    }, [orderItems]);

    const handleAddItem = (namaBarang, hargaBarang, quantity) => {
        const newOrderItems = [
            ...orderItems,
            {
                namaBarang,
                hargaBarang,
                quantity
            }
        ]
        setOrderItems(newOrderItems);
    }

    return (
        <div className="root">
            <FormOrder
                handleAddItem={handleAddItem}
            />
            <DisplayListItems 
                orderItems={orderItems}
            />
        </div>
    );
};

export default OrderPage;
