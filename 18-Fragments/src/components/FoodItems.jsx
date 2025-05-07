import Item from './Item';
import {useState} from 'react';

function FoodItems ({items}){
    
    let [activeFoodItem,setFoodItem] = useState([]);

    const handleBuyButton = (event,item) =>{
        let activefooditem = [...activeFoodItem,item];
        setFoodItem(activefooditem);
    }

    return (
        <>
        <ul className="list-group">
      {items.map(item => (<Item key={item}
      bought={activeFoodItem.includes(item)} 
      foodItem={item} 
      handleBuyButton={(event)=>handleBuyButton(event,item)} />) )}
    </ul>
        </>
    )
}

export default FoodItems;