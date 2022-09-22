
import {createContext, createcontext, useState, useReducer} from 'react';

const cartContext = createContext();

function CartProvider(props){

    const [productList, setProductList] = useState([]);


    function addProduct(product, quantity=1){


        if(productList.includes(product)){
            let index = productList.indexOf(product);
            let myList = [...productList];
            myList[index]['quantity'] = quantity;
            setProductList(x=>myList);
        }else{
            product['quantity'] = quantity
            setProductList(x=>[...x, product]);
        }
    }

    function removeProduct(product){
  
        let index = productList.indexOf(product);
        let myList = [...productList];
        myList.splice(index,1);
        setProductList(x=>myList);
    }

    const cartData ={
        products: productList,
        addProduct: addProduct,
        removeProduct: removeProduct
    }


    return(
        <cartContext.Provider value={cartData} > {props.children} </cartContext.Provider>
    );
}

export {cartContext, CartProvider};