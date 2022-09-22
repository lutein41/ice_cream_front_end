import CheckOutModal from './CheckOutModal.js';
import {cartContext} from '../../context/cartItemContext.js';
import {useContext, useState, useRef} from 'react';
import './CheckOut.css';



function Checkout(props){

    const cartContextData = useContext(cartContext);
    const [isValid, setValidation] = useState(true);
    const [orderSummary, setOrderSummary] = useState(undefined);
    let errorMessage = useRef();

    async function orderSubmit(data){
        let response = await fetch('https://lutein41.pythonanywhere.com/api/order/',{
            method: 'POST',
            body: data,
        });

        let returned_data = await response.json();
        returned_data = JSON.parse(returned_data);

        let productList=[];

        for( let i=0; i < returned_data['products'].length; i++){
            productList.push(returned_data['products'][i]['name']);
            productList.push(returned_data['products'][i]['quantity']);
        }

        let finalList = productList.map(x=>{
            return(
                <span> {x} </span>
            );
        })

        const orderSummaryRender = (
            <div className="order-summary">
                <h2> Thank You! </h2>
                <p> order number : {returned_data["order_number"]}</p>
                <p> order Date : {returned_data["order_date"]}</p>
                <p> products: {finalList}</p>
                <button type="button" class="btn btn-primary mt-2 mx-2" onClick={props.displayCheckout}> Ok </button>
            </div>
        );
        setOrderSummary(orderSummaryRender);
    }


    function orderFormHanlder(e){
        e.preventDefault();
        let data = new FormData(e.target);
        let productIdList = [];
        let productQuantityList = [];
        for(let i=0; i <cartContextData.products.length; i++){
            productIdList.push(cartContextData.products[i].id);
            productQuantityList.push(cartContextData.products[i].quantity)
        }
        data.append('id', productIdList);
        data.append('quantity', productQuantityList);
        if(isValid){
            orderSubmit(data);
        }
    }

    function addressValidation(e){
        let data = e.target.value;
        
        data = data.charCodeAt(0);

        if (data < 48 || data > 57){
            setValidation(x=>false);
            errorMessage.current = "invalid street address";
        }else{
            setValidation(x=>true);
        }
    }

    function zipcodeValidation(e){
        let data = e.target.value;
        if(data.length != 5){
            setValidation(x=>false);
            errorMessage.current = "zip code must be 5 digits";
        }else{
            setValidation(x=>true);
        }
    }

    function phoneNumberValidation(e){
        let data = e.target.value;

        if(data.length != 10){
            setValidation(x=>false);
            errorMessage.current = "invalid phone number!!! Make sure enter area code";
        }
        else{
            setValidation(x=>true);
        }
    }

    return(
        <CheckOutModal>
            <h3> Please Fill Out This Order Form </h3>
            {isValid || <div style={{color: 'red', fontSize: '1.5rem', border: '2px dashed blue'}}>{'Error: ' + errorMessage.current}</div>}
            <form onSubmit={orderFormHanlder} id="order-form">
                <div class="form-group mt-5">
                    <label htmlFor="order-address">Address</label>
                    <input type="text" name="address" onBlur={addressValidation} className="form-control w-50 mb-4" id="order-address" aria-describedby="emailHelp" placeholder="Enter street address"/>
                </div>
                <div class="form-group">
                    <label htmlFor="order-city">City</label>
                    <input type="text" name="city" class="form-control w-50 mb-4" id="order-city" required/>
                </div>
                <div class="form-group">
                    <label htmlFor="order-zipcode">zipcode</label>
                    <input type="number" name="zip_code" onBlur={zipcodeValidation} className="form-control w-25 mb-4" required placeholder="5 digits zip code" id="order-zipcode"/>
                </div>
                <div class="form-group">
                    <label htmlFor="order-phonenumber">Phone Number</label>
                    <input type="number" name="phone_number" onBlur={phoneNumberValidation} className="form-control w-25 mb-4" id="order-phonenumber" required/>
                </div>
                <button type="button" className="btn btn-primary mt-2 mx-2" onClick={props.displayCheckout}> Cancel </button>
                <button type="submit" className="btn btn-primary mt-2">Submit Order</button>
            </form>
            {orderSummary}
        </CheckOutModal>

    );
}

export default Checkout;