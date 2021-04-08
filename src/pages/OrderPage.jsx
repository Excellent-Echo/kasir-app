import React, {useState} from 'react';
import FormOrder from '../components/FormOrder';

const OrderPage = () => {

    const [order, setOrder] = useState({});
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(order);
        setOrder({nama:"", harga:"", quantity:""});
    }

    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <FormOrder setOrder={setOrder} order={order} handleForm={handleForm}/>
                </div>
            </div>
        </div>
    )
}

export default OrderPage
