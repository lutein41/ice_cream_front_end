import './NavItem.css';
import CartIcon from '../cart/CartIcon';
import {useContext} from 'react';
import {cartContext} from '../../context/cartItemContext.js'

function NavItem(props){

    const cartContextData = useContext(cartContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="https://www.google.com">Ryan's Ice Cream</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">All Products</a></li>
                                <li><a className="dropdown-item" href="/#">Gluten-Free</a></li>
                                <li><a className="dropdown-item" href="/#">Non-Dairy</a></li>
                                <li><a className="dropdown-item" href="/#">Lactose-Free</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Recipes
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">Our Story</a></li>
                                <li><a className="dropdown-item" href="/#">Out Ingridients</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button type="button badge rounded-pill bg-light" className="btn btn-secondary" onClick={props.displayCart}>
                        <span> <CartIcon/> </span>
                        Cart:  <span className="badge bg-secondary"> {cartContextData.products.length} </span>
                    </button>
                </div>
            </div>
        </nav>  
    );
}

export default NavItem;