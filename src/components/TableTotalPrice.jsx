const TableTotalPrice = ({ orderItems }) => {
    let totalPrice = orderItems.reduce((sum, { quantity, price }) => sum + price * quantity, 0)
    return (
        <tr>
            <th colSpan="4">Total Price</th>
            <td>{totalPrice}</td>
        </tr>
    )
}

export default TableTotalPrice
