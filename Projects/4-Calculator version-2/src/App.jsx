import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from './App.module.css';
import {useState} from 'react';

function App() {
  
  let [displayValue,setDisplayValue] = useState("");
  
  const onButtonClick = (buttonText)=>{
    

    if(buttonText === 'C'){
      setDisplayValue("");
    }else if(buttonText === '='){
      const result = eval(displayValue);
      setDisplayValue(result);
    }else{
      let displayval = displayValue + buttonText;
      setDisplayValue(displayval);
    }

  }

  return (
    <>
      <div className={styles.container}>
        <Display displayValue = {displayValue}/>
        <Buttons buttonClicked={onButtonClick}/>
      </div>
    </>
  )
}

export default App;
