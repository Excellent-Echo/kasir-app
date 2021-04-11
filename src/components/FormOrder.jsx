import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const FormOrder = () => {

    const [nameOrder, setNameOrder] = useState("")
    const [priceOrder, setPriceOrder] = useState("")
    const [quantity, setQuantity] = useState("")


    const handleForm = (e) => {
        // e.preventDefault();

        // if(!nameOrder || !priceOrder || !quantity) {
        //     alert(`Input Your Order first!`)
        // }
        
        console.log(nameOrder)
        setNameOrder("")
        setPriceOrder("")
        setQuantity("")

    }

    return (
        <div className="container">
        <h2 style={{marginTop: "30px"}}>Kasir Apps</h2>
        <Form>
            <Form.Group controlId="order">
                <Form.Label>Input Your Order</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Order" onChange={(e) => setNameOrder(e.target.value)}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Quantity" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Button onClick={handleForm()} variant="primary" type="submit">
                Submit
            </Button>
        </Form>

           
      </div>
    )
}

export default FormOrder;