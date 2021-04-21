import React, { useState } from "react";
import { useDispatch } from "react-redux";
import kasirAction from "../redux/actions/kasirAction";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const FormOrder = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

    const classes = useStyles();

    const [namaBarang, setNamaBarang] = useState("");
    const [hargaBarang, setHargaBarang] = useState("");
    const [quantity, setQuantity] = useState("");

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();

        if (!Number(hargaBarang)) {
            alert("Input harga barang salah")
        } else if (!Number(quantity)) {
            alert("Input quantity salah")
        } else {
            dispatch(kasirAction.addItem(namaBarang, hargaBarang, quantity));
        }

        setNamaBarang("");
        setHargaBarang("");
        setQuantity("");
    }

    return (
        <>
            <form onSubmit={handleForm} className={classes.root} noValidate autoComplete="off">
                <div className="mt-5 d-flex flex-column align-items-center">
                    <TextField
                        id="outlined-input"
                        label="Nama Barang"
                        variant="outlined"
                        value={namaBarang}
                        onChange={(e) => setNamaBarang(e.target.value)}
                    />
                    <TextField
                        id="outlined-input"
                        label="Harga Barang"
                        variant="outlined"
                        value={hargaBarang}
                        onChange={(e) => setHargaBarang(e.target.value)}
                    />
                    <TextField
                        id="outlined-input"
                        label="Quantity"
                        variant="outlined"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Button type="submit" value="Submit" variant="contained">Submit</Button>
                </div>
            </form>
        </>
    );
};

export default FormOrder;
