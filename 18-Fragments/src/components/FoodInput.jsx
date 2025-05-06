
import styles from './FoodInput.module.css';
function FoodInput ({handleonchange}) {
    
    return (
        <>
        <input type="text" className={styles.input} 
        onChange={handleonchange} placeholder="Enter Food Item here"/>
        </>
    )
}

export default FoodInput;