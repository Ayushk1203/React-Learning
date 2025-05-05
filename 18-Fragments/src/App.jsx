import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  
  let foodItems = ['Dal','Green Vegetables', 'Roti', 'Salad', 'Milk','Butter'];
  //let foodItems = [];

  //Conditional Rendering :- {foodItems.length === 0 ? <h3>I am still hungry</h3>:null} used below
  // Logical Operators :- {foodItems.length === 0 && <h3>I am still hungry</h3>} can be used instead of above
  return (
  <>
    <h1>Healthy Food</h1>
    <FoodItems items={foodItems}/>
    <ErrorMessage items={foodItems}/>

      
    
</>
  )
};

export default App;
