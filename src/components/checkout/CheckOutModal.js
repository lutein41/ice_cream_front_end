import ReactDOM from 'react-dom';
import './CheckOutModal.css';

const portal = document.getElementById('overlay');

function Backdrop(props){
    return (
        <div className="backdrop"></div>
    );
}

function ModalOverlay(props){
    return (
        <div className="checkout-modal">
            <div clssName="modal-content"> {props.children} </div>
        </div>
    );
}


function CheckOutModal(props){

    return(
        <>  
            {ReactDOM.createPortal(<Backdrop/>, portal)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portal)}
        </>
        
    );
}
export default CheckOutModal;