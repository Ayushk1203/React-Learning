import styles from "./Item.module.css";

function Item ({foodItem, handleBuyButton}){
    
    

    return (
        <>
        <li key={foodItem} className="list-group-item">{foodItem}
             <button className={styles.delete} onClick={handleBuyButton}>Buy</button></li>
        </>
    )
}

export default Item;