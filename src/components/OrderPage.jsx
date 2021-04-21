import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import FormOrder from "./FormOrder";
import DisplayListItems from "./DisplayListItems";
import logo from "../assets/cashier-app.png"
import GlobalStyles from "../styles/globalStyle";


const OrderPage = () => {
    const items = useSelector((state) => state.list);

    useEffect(() => {
        console.log(items);
    }, [items]);

    return (
        <>
        <GlobalStyles />
        <div className="container">
            <div className="row">
                <img src={logo} alt="logo" className="img-fluid mt-5 w-50 mx-auto"/>
            </div>
            <FormOrder
            />
            <DisplayListItems
            />
        </div>
        </>
    );
};

export default OrderPage;
