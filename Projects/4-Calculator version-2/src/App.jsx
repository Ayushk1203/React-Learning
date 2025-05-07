import Display from "./components/Display";
import Buttons from "./components/Buttons";
import styles from './App.module.css';

function App() {
  
  return (
    <>
      <div className={styles.container}>
        <Display/>
        <Buttons/>
      </div>
    </>
  )
}

export default App;
