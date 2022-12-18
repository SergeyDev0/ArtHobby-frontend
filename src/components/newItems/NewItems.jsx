import React from 'react'
import HeaderNewItems from './HeaderNewItems';
import { CartContext } from '../../App';
import Item from './Item.jsx'; 

export default function Items() {
    const { onAddToCart, showProduct } = React.useContext(CartContext);
    // const [products, setProducts] = React.useState([]);
    const [newItems, setNewItems] = React.useState([]);

    const obj = {
            "name": "Новогодняя композиция",
            "price": "450",
            "fileName": "img/v23Y7aOK.webp",
            "type": "Композиция",
            "article": "v23Y7aOK",
            "material": "Керамика, древесина",
            "size": null
        }
     
    React.useEffect(() => {
        fetch('http://localhost:8080/filterByDate')
        .then((res) => {
            return res.json();
        })
        .then(json => {
            setNewItems(json);
        });
    
        async function saveData() {
            await fetch('http://localhost:8080/saveProduct', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            });
        }
    
        // saveData()
    }, []); 
    

    return (
         <div className="new-items">
             <HeaderNewItems />
             <ul className="slides">
                {newItems.map((item, index) => {
                    if(index < 10) {
                        return (
                            <Item
                            key={index}
                            img={item.fileName} 
                            alt={item.name} 
                            title={item.name}
                            price={item.price}
                            onPlus={(obj) => {onAddToCart(obj)}}
                            onProduct={(obj) => {showProduct(obj)}} />
                        )
                    }
                })}
             </ul>
         </div>
    );
}