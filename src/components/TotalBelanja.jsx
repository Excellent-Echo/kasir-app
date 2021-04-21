import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const TotalBelanja = () => {
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    const classes = useStyles();

    const items = useSelector((state) => state.list);
    let sum = 0

    const total = () => {
        items.forEach(item => {
            let totalHarga = item.harga * item.quantity
            sum += totalHarga
        });
        return sum.toLocaleString();
    }

    return (
        <>
            {items.length > 0 &&
                <TableRow>
                    <TableCell align="right" colSpan={4} className="font-weight-bold">Total (Rp)</TableCell>
                    <TableCell align="right">{total()}</TableCell>
                </TableRow>
            }
        </>
    )
}

export default TotalBelanja;