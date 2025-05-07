import styles from "./Item.module.css";

function Item ({foodItem, bought, handleBuyButton}){
    

    return (
        <>
        <li key={foodItem} className={`list-group-item ${bought && "active"} `}>{foodItem}
             <button className={`${styles.delete} `} onClick={handleBuyButton}>Buy</button></li>
        </>
    )
}

export default Item;