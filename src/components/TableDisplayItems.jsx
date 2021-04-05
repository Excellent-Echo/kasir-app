import React from 'react'

const TableDisplayItems = ({ item, index }) => {
	return (
		<tbody>
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{item.item}</td>
				<td>{item.quantity}</td>
				<td>{item.price}</td>
				<td>{item.quantity * item.price}</td>
			</tr>
		</tbody>
	)
}

export default TableDisplayItems
