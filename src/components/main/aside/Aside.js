import './Aside.css';

function Aside(props){

    function filterHandler(e){
        e.preventDefault();
        let childrenElement = e.target.querySelectorAll(".filter");

        const filterList = {
            nonDairy: childrenElement[0].checked,
            glutenFree: childrenElement[1].checked,
            lactoseFree: childrenElement[2].checked,
        }

        props.filter(filterList);
    }

    function clearFilterHandler(e){
        let childrenElement = document.querySelectorAll(".filter");
        for(let i=0; i<childrenElement.length; i++){
            childrenElement[i].checked = "";
        }
        props.filter(undefined);
    }

    return(
        <div className="aside-container">
            <h4 id="filter"> FILTER BY: </h4>
            <hr/>
            <div id="categories"> CATEGORIES </div>
            <form onSubmit={filterHandler}>
                <input type="checkbox" name="dairy" id="non-dairy" className="form-check-input me-2 mb-3 filter"/>
                <label htmlFor="non-dairy" className="aside-label"> Non-Dairy </label><br/>
                <input type="checkbox" name="gluten" id="gluten-free" className="form-check-input me-2 mb-3 filter"/>
                <label htmlFor="non-dairy" className="aside-label"> Gluten Free </label><br/>
                <input type="checkbox" name="lactose"id="lactose-free" className="form-check-input me-2 mb-3 filter"/>
                <label htmlFor="non-dairy" className="aside-label"> Lactose Free </label><br/>
                <button className="btn btn-primary mx-2 mt-3" type="submit"> Apply </button>
                <button className="btn btn-primary mx-2 mt-3" type="button" onClick={clearFilterHandler}>Clear All</button>
            </form>
        </div>
    );
}

export default Aside;