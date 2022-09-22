
import './Card.css';
import {useRef, useContext} from 'react';
import {cartContext} from '../../../context/cartItemContext.js';

function Card(props){

    const productRef = useRef(props.product);
    const cartContextData = useContext(cartContext);

    function addToCartHandler(e){
        cartContextData.addProduct(productRef.current);
    }

    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={props.product.image} className="card-img-top" alt="product image"></img>
            <div className="card-body">
                <h5 className="card-title">{props.product.flavor}</h5>
                <div className="add-to-cart"> <button className="btn btn-primary mt-2" onClick={addToCartHandler}>Add to Cart</button> </div>
            </div>
        </div>
    );
}

export default Card;