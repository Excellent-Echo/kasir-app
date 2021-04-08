import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import actionFormOrder from "../redux/action/actionFormOrder";

const FormOrder = () => {
    const [inputNamaBarang, setNamaBarang] = useState("");
    const [inputQuantityBarang, setQuantityBarang] = useState("");
    const [inputHargaBarang, setHargaBarang] = useState("");

    const dispatch = useDispatch();

    const handleFormOrder = (e) =>{
        e.preventDefault();

        
        // handleAddItem(inputNamaBarang, inputQuantityBarang, inputHargaBarang);

        dispatch(actionFormOrder.addItem(inputNamaBarang, inputQuantityBarang, inputHargaBarang));

        e.target.reset();
            setNamaBarang("");
            setQuantityBarang("");
            setHargaBarang("");
    }
    return (
        <div>
            <form onSubmit={handleFormOrder}>
                <label htmlFor="">Nama Barang : </label>
                    <input 
                    type="text"
                    id="name"
                    name="namabarang"
                    value={inputNamaBarang}
                    onChange={(e) => setNamaBarang(e.target.value)}
                    />
                    <br/>
                <label htmlFor="">Quantity Barang : </label>
                <input 
                    type="text"
                    id="quantity"
                    name="quantityBarang"
                    value={inputQuantityBarang}
                    onChange={(e) => setQuantityBarang(e.target.value)}
                    />
                    <br/>
                <label htmlFor="">Harga Barang : </label>
                <input 
                    type="text"
                    id="name"
                    name="hargaBarang"
                    value={inputHargaBarang}
                    onChange={(e) => setHargaBarang(e.target.value)}
                    />
                    <br/>

                    <input type="submit" />
            </form>
        </div>
    )
}

export default FormOrder;