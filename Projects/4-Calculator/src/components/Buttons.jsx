import styles from "./Buttons.module.css";
const Buttons = ()=>{

    const buttonsName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','.'];
    return (
        <>
        <div className={styles.buttonsContainer}>
          {buttonsName.map(button => <button className={styles.Button}>{button}</button>)}
          
        </div>
        </>
    )
}

export default Buttons;