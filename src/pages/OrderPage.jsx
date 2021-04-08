import React, {useState, useEffect} from 'react';
import FormOrder from '../components/FormOrder';

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
            <div className="row justify-content-center">
                <div className="col-6">
                    <FormOrder setOrder={setOrder} order={order} handleAddItem={handleAddItem}/>
                </div>
            </div>
        </div>
    )
}

export default OrderPage
