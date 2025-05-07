
import styles from './FoodInput.module.css';
function FoodInput ({handleKeyDown}) {
    
    return (
        <>
        <input type="text" className={styles.input} 
        onKeyDown={handleKeyDown} placeholder="Enter Food Item here"/>
        </>
    )
}

export default FoodInput;