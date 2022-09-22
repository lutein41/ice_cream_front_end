import NavItem from './NavItem.js'

function Header(props){

    return(
        <>
            <header>
                 <NavItem displayCart={props.displayCart}></NavItem>
            </header>
        </>
    );
}

export default Header;