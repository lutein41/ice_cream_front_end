import CartModal from './CartModal.js';
import './Cart.css';
import {cartContext} from '../../context/cartItemContext.js';
import {useContext} from 'react';

function Cart(props){

    const cartContextData = useContext(cartContext);

    // Calculate total price of products in a shopping cart
    let totalPrice = 0;
    for(let i=0; i < cartContextData.products.length; i++){
        totalPrice += (cartContextData.products[i].price * cartContextData.products[i].quantity);
       
    }

    function quantitySubmitHandler(e){

        e.preventDefault();
        let element = e.target.firstElementChild;
        let productId = element.dataset.productId;
        let product;
        for( let i =0; i<cartContextData.products.length; i++){
 
            if (cartContextData.products[i].id == productId){
                product = cartContextData.products[i];
            }
        }

       cartContextData.addProduct(product, parseInt(element.value));
    }

    function productRemoveHandler(e){

        let productId = e.target.dataset.productId;
        let product;
        for( let i =0; i<cartContextData.products.length; i++){
 
            if (cartContextData.products[i].id == productId){
                product = cartContextData.products[i];
            }
        }
        cartContextData.removeProduct(product);
    }

    const productList = cartContextData.products.map(product=>{
            return(
                <tr>
                    <td className="product data">{product.flavor}</td>
                    <td className="quantity data">
                        <form onSubmit={quantitySubmitHandler}>
                            <input type="number" max="9" min="1" data-product-id={`${product.id}`} className="cart-quantity" defaultValue={product.quantity}></input>
                            <button type="submit"> Update </button>
                        </form>
                    </td>
                    <td className="remove data">
                        <button type="button" data-product-id={`${product.id}`} onClick={productRemoveHandler}> Remove </button>
                    </td>
                    <td className="price data"> {product.price}</td>
                </tr>
            );
        })

    return(

        <CartModal>
            <h2> Your Shopping Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col" className="product data">Product</th>
                    <th scope="col" className="quantity data">Quantity</th>
                    <th scope="col" className="remove data">Remove</th>
                    <th scope="col" className="price data">Unit Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList}
                </tbody>
            </table>
            <div className="total-price"> 
                <h5> Total <span> ${totalPrice}</span></h5>
            </div>
            <button type="button" className="btn btn-primary mt-2 mx-2" onClick={props.displayCart}> Close </button>
            <button type="button" className="btn btn-primary mt-2" onClick={props.displayCheckout}> Check out </button>
        </CartModal>

    );
}

export default Cart;