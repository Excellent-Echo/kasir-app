import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


const FormOrder = () => {

    const SubmitButton = styled.button`
        cursor: pointer;
        background: transparent;
        font-size: 16px;
        border-radius: 5px;
        border: 3px solid #17C3B2;
        padding: 0.25em 0.50em;
        transition: 0.2s all ease-out;
        margin-top: 25px;
        color: #17C3B2;
        font-weight: bold;
        width: 100%;
    
        &:hover {
        background-color: #17C3B2;
        color: white;
        }
    `;

    return (
        <>
            <form>
                <div className="row">
                    <div class="col-md">
                        <label for="nmBrg" className="form-label">Item Name</label>
                        <input type="text" className="form-control" id="nmBrg" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div class="col-md-4">
                        <label for="nmBrg" className="form-label">Qty</label>
                        <input type="number" className="form-control" id="qtyBrg" />
                    </div>
                    <div class="col-md-8">
                        <label for="nmBrg" className="form-label">Price</label>
                        <input type="number" className="form-control" id="hrgBrg" />
                    </div>
                    <div className="col-md">
                        <SubmitButton>Submit</SubmitButton>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormOrder;
