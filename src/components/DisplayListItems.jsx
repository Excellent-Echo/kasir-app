import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TotalBelanja from "./TotalBelanja";

const DisplayListItems = () => {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    const classes = useStyles();

    const items = useSelector((state) => state.list);

    return (
        <>
            {items.length > 0 &&
                <div className="mt-5 mb-5">
                    <div>
                        <h5 className="text-center">Daftar Belanja</h5>
                    </div>
                    <TableContainer component={Paper} className="table">
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell align="right">Nama Barang</TableCell>
                                    <TableCell align="right">Harga Barang&nbsp;(Rp)</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Total Harga&nbsp;(Rp)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items &&
                                    items.map((val, index) => {
                                        return <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell align="right">{val.nama}</TableCell>
                                            <TableCell align="right">{Number(val.harga).toLocaleString()}</TableCell>
                                            <TableCell align="right">{val.quantity}</TableCell>
                                            <TableCell align="right">{(val.quantity * val.harga).toLocaleString()}</TableCell>
                                        </TableRow>
                                    })}
                                <TotalBelanja />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            }
        </>
    );
};

export default DisplayListItems;
