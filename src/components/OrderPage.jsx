import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import './OrderPage.css';
import FormOrder from "./FormOrder";
import DisplayListItems from "./DisplayListItems";
import TotalBelanja from "./TotalBelanja";

const OrderPage = () => {
    const items = useSelector((state) => state.list);

    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <div className="container">
            <FormOrder
            />
            <DisplayListItems
            />
            <TotalBelanja
            />
        </div>
    );
};

export default OrderPage;
