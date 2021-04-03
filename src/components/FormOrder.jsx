import { useState } from 'react'

import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const FormOrder = ({ handleAddItem }) => {
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)

    const handleForm = (e) => {
        e.preventDefault()
        if (!item) return
        handleAddItem(item, quantity, price)
        setItem('')
        setQuantity(0)
        setPrice(0)
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
                        onChange={(e) => setItem(e.target.value)}
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
                                onChange={(e) => setQuantity(e.target.value)}
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
                                onChange={(e) => setPrice(e.target.value)}
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
