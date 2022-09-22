import Card from '../productCard/Card.js'
import {useEffect, useState} from 'react';
import './MainContent.css';



function MainContent(props){

    const [products, setProducts] = useState([]);
    const [showMore, setShowMore] = useState(6);

    useEffect(()=> {
        async function fetchProducts(){
            const response = await fetch('https://lutein41.pythonanywhere.com/api/product/');
            const data = await response.json();
            
            const loadedProducts = [];

            for(const index in data){
                loadedProducts.push({
                    id: data[index]['id'],
                    flavor: data[index]['flavor'],
                    price: data[index]['price'],
                    image: 'https://lutein41.pythonanywhere.com' + data[index]['image'] ,
                    stockQuantity: data[index]['quantity'],
                    glutenFree: data[index]['glueten_free'],
                    lactoseFree: data[index]['lactose_free'],
                    nonDairy: data[index]['non_dairy']
                })
            }
            setProducts(loadedProducts);
        };
        fetchProducts();
    }, []);

    let showProducts;

    const filteredProductList = [];
    if (props.filter){
 
        for(let i=0; i<products.length; i++){
            let matchAllCategories = 0;
            for(const key in props.filter){
                if (props.filter[key] === products[i][key]){
                    
                    matchAllCategories++;
                    if (matchAllCategories === 3){
                        filteredProductList.push(products[i]);
                    }
                }else{
                    break;
                }
            }
        }
        showProducts = filteredProductList.slice(0,showMore);
    }else{
        showProducts = products.slice(0,showMore);
    }

    const productList = showProducts.map(x=>
        <Card key={x.id} product={x}/>
    )

  
    function showMoreHandler(e){
        if (showMore+3 > products.length){
            alert("no more products to be displayed");
        }
        setShowMore(x=>x+3);
    }

    return(
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 m-3">
                 {productList}
            </div>
            <div className="show-more">
                <button type="button" className="btn btn-success showmore" onClick={showMoreHandler}> Show More </button>
            </div>
        </div>
    );
}

export default MainContent;
