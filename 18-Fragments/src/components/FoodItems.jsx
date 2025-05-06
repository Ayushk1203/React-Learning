import Item from './Item';

function foodItems ({items}){
    
    return (
        <>
        <ul className="list-group">
      {items.map(item => (<Item key={item} foodItem={item} handleBuyButton={()=>console.log(`${item} bought`)} />) )}
    </ul>
        </>
    )
}

export default foodItems;