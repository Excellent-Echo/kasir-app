import React,{useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import DisplayListItem from './DisplayListItem';
import FormOrder from './FormOrder'
import TotalAllItem from './TotalAllItem';

const OrderPage = () => {
    // const [orderItems, setOrderItems] = useState([]);

    // useEffect(() => {
    //     console.log(orderItems);
    // }, [orderItems]);

    // const handleAddItem = (inputNamaBarang, inputQuantityBarang, inputHargaBarang) => {
    //     const stateOrderItems = [
    //         ...orderItems,
    //         {
    //             inputNamaBarang, 
    //             inputQuantityBarang, 
    //             inputHargaBarang
    //         }
    //     ]
    //     setOrderItems(stateOrderItems);

    const store = useSelector((state) => state)
    useEffect (()=>{
        console.log(store);
    }, [store])

        // if((!Number(inputQuantityBarang))||(!Number(inputHargaBarang))){
        //     alert('Quantity barang atau Nama barang harus berupa number')
        // }
        // if(!inputHargaBarang){
        //     alert('Nama barang harus diisi')
        // }
    return (
        <div>
            <FormOrder />
            <DisplayListItem />
            <TotalAllItem />
        </div>
    )
}

export default OrderPage
