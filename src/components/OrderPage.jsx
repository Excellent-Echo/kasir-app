import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import './OrderPage.css';
import kasirAction from "../redux/actions/kasirAction";
import FormOrder from "./FormOrder";
import DisplayListItems from "./DisplayListItems";
import TotalBelanja from "./TotalBelanja";

const OrderPage = () => {
    const item = useSelector((state) => state);

    useEffect(() => {
        console.log(item);
    }, [item]);

    return (
        <div className="container">
            <FormOrder
            // handleAddItem={handleAddItem}
            />
            {/* <DisplayListItems
            orderItems={orderItems}
            />
            <TotalBelanja
            orderItems={orderItems}
            /> */}
        </div>
    );
};

export default OrderPage;
