import React from 'react'
import { Table, Container } from 'reactstrap'

import TableDisplayItems from './TableDisplayItems'
import TableTotalPrice from './TableTotalPrice'

const DisplayListItems = ({ orderItems }) => {
	return (
		<Container className="mt-5">
			<Table bordered>
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
				</thead>

				{orderItems.map((item, index) => (
					<TableDisplayItems item={item} index={index} />
				))}

				<TableTotalPrice orderItems={orderItems} />
			</Table>
		</Container>
	)
}

export default DisplayListItems
