import React from "react";

import './FormOrder.css';

class FormOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            harga: "",
            quantity: "",
        };
    }

    handleForm = (e) => {
        e.preventDefault();

        if (!Number(this.state.harga) || !Number(this.state.quantity)) {
            alert("Quantity dan harga barang harus number");
        }
        console.log({
            nama: this.state.nama,
            harga: this.state.harga,
            quantity: this.state.quantity
        });

        e.target.reset();
        this.setState({
            nama: "",
            harga: "",
            quantity: "",
        })
    }

    handleInputNama = (e) => {
        this.setState({
            nama: e.target.value,
        })
    }

    handleInputHarga = (e) => {
        this.setState({
            harga: e.target.value,
        })
    }

    handleInputQty = (e) => {
        this.setState({
            quantity: e.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleForm}>
                <div className="nama-barang">
                    <label htmlFor="namaBarang" className="nama-barang">
                        Nama Barang
                    </label>
                    <input
                        type="text"
                        id="namaBarang"
                        name="nama"
                        value={this.state.nama}
                        onChange={this.handleInputNama}
                    />
                </div>
                <div className="harga-barang">
                    <label htmlFor="hargaBarang" className="nama-barang">
                        Harga Barang
                    </label>
                    <input
                        type="text"
                        id="hargaBarang"
                        name="harga"
                        value={this.state.harga}
                        onChange={this.handleInputHarga}

                    />
                </div>
                <div className="qty-barang">
                    <label htmlFor="qtyBarang" className="qty-barang">
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="qtyBarang"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleInputQty}
                    />
                </div>
                <div className="button-submit">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
};

export default FormOrder;
