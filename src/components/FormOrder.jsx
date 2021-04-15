import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormOrder = () => {
    const [namabarang, setNamabarang] = useState('')
    const [hargabarang, setHargabarang] = useState('')
    const [qtybarang, setQtybarang] = useState('')

    const changeNamabarang = (e) => {
        setNamabarang(e.target.value)
    }
    const changeHargabarang = (e) => {
        setHargabarang(e.target.value)
    }
    const changeQtybarang = (e) => {
        setQtybarang(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`Barang : ${namabarang}, Harga barang : ${hargabarang}, Qty : ${qtybarang}`)
    }


    return (
        <>
            {/* <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label>Nama Barang</label>
                <input
                type = "text"
                onChange = {e => changeNamabarang(e)}
                />
            </div>
            <div>
                <label>Harga Barang</label>
                <input
                type = "text"
                onChange = {e => changeHargabarang(e)}
                />
            </div>
            <div>
                <label>Qty Barang</label>
                <input
                type = "text"
                onChange = {e => changeQtybarang(e)}
                />
            </div>
            <button type="submit">Submit</button>
        </form> */}
            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group controlId="namabarang">
                    <Form.Label>Nama Barang</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="contoh: Apel" 
                    onChange = {e => changeNamabarang(e)}
                    />
                </Form.Group>

                <Form.Group controlId="hargabarang">
                    <Form.Label>Harga Barang</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="contoh: 12000" 
                    onChange = {e => changeHargabarang(e)}
                    />
                </Form.Group>

                <Form.Group controlId="qtybarang">
                    <Form.Label>Qty Barang</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="contoh: 5" 
                    onChange = {e => changeQtybarang(e)}
                    />
                </Form.Group>
                
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default FormOrder;