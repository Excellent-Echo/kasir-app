import React,{useState, useEffect} from 'react'
import FormOrder from '../components/FormOrder'

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
        </div>
    )
}

export default OrderPage
