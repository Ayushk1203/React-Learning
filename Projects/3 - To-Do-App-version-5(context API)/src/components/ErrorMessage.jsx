import styles from './ErrorMessage.module.css';
import { toDoItemsContext } from '../store/to-Do-Items-store';
import {useContext} from 'react';
const ErrorMessage = () =>{

    const {toDoItems} = useContext(toDoItemsContext); 

    return (
        <>
        {toDoItems.length === 0 && <div className={styles.em}>Enjoy your day</div>}
        </>
    )
}

export default ErrorMessage;