import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import {useState} from 'react';
function App() {
  
  let [foodItems,setFoodValue] = useState([]);
  
  
  const handleKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFoodValue = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems,newFoodValue];
      setFoodValue(newFoodItems);
    }
    console.log(event.target.value);
  } 
  
  //let foodItems = ['Dal', 'Salad', 'Green Vegetables'];

  //let foodItems = [];

  //Conditional Rendering :- {foodItems.length === 0 ? <h3>I am still hungry</h3>:null} used below
  // Logical Operators :- {foodItems.length === 0 && <h3>I am still hungry</h3>} can be used instead of above
  return (
    
  <>
    <Container>
      <center><h1>Healthy Food</h1></center>
      <FoodInput handleKeyDown={handleKeyDown}/>
      
      <FoodItems items={foodItems}/>
      <ErrorMessage items={foodItems}/>
    </Container>

</>
  )
};

export default App;
