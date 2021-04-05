import React, { useState, useEffect } from 'react'
import FormOrder from './FormOrder'
import DisplayListItems from './DisplayListItems'

const OrderPage = () => {
	const [orderItems, setOrderItems] = useState([])

	const handleAddItem = (item, quantity, price) => {
		const newItem = [...orderItems, { item, quantity, price }]
		setOrderItems(newItem)
	}

	useEffect(() => {
		console.log(orderItems)
	}, [orderItems])

	return (
		<div>
			<FormOrder handleAddItem={handleAddItem} />
			<DisplayListItems orderItems={orderItems} />
		</div>
	)
}

export default OrderPage
