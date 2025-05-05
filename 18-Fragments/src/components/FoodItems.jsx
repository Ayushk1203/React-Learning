import Item from './Item';

function foodItems ({items}){
    return (
        <>
        <ul className="list-group">
      {items.map(item => (<Item foodItem={item}/>) )}
    </ul>
        </>
    )
}

export default foodItems;