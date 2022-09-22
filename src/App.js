
import './App.css';
import Header from './components/header/Header.js'; 
import Main from './components/main/Main.js'; 
import Cart from './components/cart/Cart.js';
import Checkout from './components/checkout/CheckOut.js';
import {useState}from 'react';
import {CartProvider} from './context/cartItemContext.js';

function App() {

  const [displayCart, setDisplayCart] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(false);

  function displayCartHandler(e){
    setDisplayCart( x => !x);
  }

  function displayCheckOutHandler(e){
    setDisplayCheckout( x=>!x);
  }

  return (
    <>
      <CartProvider> 
        {displayCart && <Cart displayCart={displayCartHandler} displayCheckout={displayCheckOutHandler}/>}
        {displayCheckout && <Checkout displayCheckout={displayCheckOutHandler}/>}
        <Header displayCart={displayCartHandler}></Header>
        <Main></Main>
      </CartProvider>
    </>
  );
}

export default App;
