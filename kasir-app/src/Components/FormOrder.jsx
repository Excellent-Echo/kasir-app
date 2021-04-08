import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'


function FormOrder() {
    return (
        <div>
            
            <Container>
                <Row>

            <Form  >
                <Form.Group >
                    <Form.Label>Item</Form.Label>
                    <Form.Control type="text" placeholder="input item" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Total</Form.Label>
                    <Form.Control type="number" placeholder="input total item" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="input" placeholder="input price" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
                </Row>
            </Container>



        </div>
    )
}

export default FormOrder
