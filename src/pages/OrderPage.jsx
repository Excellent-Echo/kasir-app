import React from 'react';
import FormOrder from '../components/FormOrder';
import DisplayListItems from '../components/DisplayListItems';
import DisplayTotal from '../components/DisplayTotal';

const OrderPage = () => {

    return (
        <div className="container pt-5">
            <div className="row justify-content-md-between">
                <div className="col-12 col-md-6">
                    <h1 className="text-center">Input Order</h1>
                    <FormOrder/>
                    <DisplayTotal/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">List Orders : </h1>
                    <DisplayListItems/>
                </div>
            </div>
        </div>
    )
}

export default OrderPage
