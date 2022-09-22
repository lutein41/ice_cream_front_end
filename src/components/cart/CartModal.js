import ReactDOM from 'react-dom';
import './CartModal.css'

const portal = document.getElementById('overlay');

function Backdrop(props){
    return (
        <div className="backdrop"></div>
    );
}

function ModalOverlay(props){
    return (
        <div className="cart-modal">
            <div> {props.children} </div>
        </div>
    );
}


function CartModal(props){

    return(
        <>  {ReactDOM.createPortal(<Backdrop/>, portal)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portal)}
        </>
        
    );
}
export default CartModal;