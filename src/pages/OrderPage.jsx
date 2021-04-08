import React, {useState, useEffect} from 'react';
import FormOrder from '../components/FormOrder';
import DisplayListItems from '../components/DisplayListItems';

const OrderPage = () => {

    const [order, setOrder] = useState({});
    const [orderItems, setOrderItems] = useState([]);

    useEffect(()=>{
        console.log(orderItems);
    }, [orderItems]);



    const handleAddItem = (e)=>{
        e.preventDefault();
        setOrderItems([...orderItems, order]);
        setOrder({nama:"", harga:"", quantity:""});
    }



    return (
        <div className="container pt-5">
            <div className="row justify-content-md-between">
                <div className="col-12 col-md-6">
                    <h1 className="text-center">Input Order</h1>
                    <FormOrder setOrder={setOrder} order={order} handleAddItem={handleAddItem}/>
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">List Orders : </h1>
                    <DisplayListItems orderItem={orderItems}/>
                </div>
            </div>
        </div>
    )
}

export default OrderPage
