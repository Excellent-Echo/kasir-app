import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import itemActions from '../redux/actions/itemActions'

const FormOrder = ({ handleAddItem }) => {
	const dispatch = useDispatch()
	const item = useSelector((state) => state.items.item)
	const price = useSelector((state) => state.items.price)
	const quantity = useSelector((state) => state.items.quantity)

	const handleForm = (e) => {
		e.preventDefault()
		if (!item) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Mohon masukkan nama item'
			})
		} else {
			handleAddItem(item, quantity, price)
			setItem('')
			setQuantity(0)
			setPrice(0)
		}
	}

	return (
		<Container className="mt-3">
			<Form onSubmit={handleForm}>
				<FormGroup>
					<Label for="item">Item</Label>
					<Input
						type="text"
						name="inputItem"
						id="inputItem"
						placeholder="item name"
						onChange={(e) => dispatch(itemActions.setItem(e.target.value))}
						value={item}
					/>
				</FormGroup>

				<Row>
					<Col>
						<FormGroup>
							<Label for="quantity">Quantity</Label>
							<Input
								type="number"
								name="inputQuantity"
								id="inputQuantity"
								placeholder="quantity"
								min="1"
								onChange={(e) => dispatch(itemActions.setQuantity(e.target.value))}
								value={quantity}
							/>
						</FormGroup>
					</Col>

					<Col>
						<FormGroup>
							<Label for="item">Price</Label>
							<Input
								type="number"
								name="inputPrice"
								id="inputPrice"
								placeholder="price"
								min="1"
								onChange={(e) => dispatch(itemActions.setPrice(e.target.value))}
								value={price}
							/>
						</FormGroup>
					</Col>
				</Row>

				<Button>Submit</Button>
			</Form>
		</Container>
	)
}

export default FormOrder
