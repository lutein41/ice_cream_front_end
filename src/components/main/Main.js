
import './Main.css';
import Aside from './aside/Aside.js';
import MainContent from './mainContent/MainContent';
import {useState} from 'react';

function Main(props){


    const [filterList, setFilterList] = useState(undefined);

    function filterChange(filterList){

        if(!filterList){
            setFilterList(undefined);
        }else{
            setFilterList(filterList);
        }
    }

    return(
        <div className="content-container">
            <Aside filter={filterChange}></Aside>
            <MainContent filter={filterList}/>
        </div>
    );
}

export default Main;