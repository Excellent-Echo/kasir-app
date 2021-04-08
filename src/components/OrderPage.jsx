import React,{useState, useEffect} from 'react'
import DisplayListItem from './DisplayListItem';
import FormOrder from './FormOrder'

const OrderPage = () => {
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        console.log(orderItems);
    }, [orderItems]);

    const handleAddItem = (inputNamaBarang, inputQuantityBarang, inputHargaBarang) => {
        const stateOrderItems = [
            ...orderItems,
            {
                inputNamaBarang, 
                inputQuantityBarang, 
                inputHargaBarang
            }
        ]
        setOrderItems(stateOrderItems);
    }
    return (
        <div>
            <FormOrder handleAddItem={handleAddItem}/>
            <DisplayListItem orderList={orderItems}/>
        </div>
    )
}

export default OrderPage
