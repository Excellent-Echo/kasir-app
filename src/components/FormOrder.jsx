import React from 'react';

const FormOrder = () => {
    return (
        <form>
            <div>
                <label>Name :</label>
                <input type="text" name="" id=""/>
            </div>
            <div>
                <label>Quantity :</label>
                <input type="number" name="" id=""/>
            </div>
            <div>
                <label>Price :</label>
                <input type="text" name="" id=""/>
            </div>
            <button type="submit">Order</button>
        </form>
    )
}

export default FormOrder;