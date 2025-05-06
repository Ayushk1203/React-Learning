import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {
  
  let foodItems = ['Dal','Green Vegetables', 'Roti', 'Salad', 'Milk','Butter'];
  const handleonchange = (e) =>{
    console.log(e.target.value);
}
  //let foodItems = [];

  //Conditional Rendering :- {foodItems.length === 0 ? <h3>I am still hungry</h3>:null} used below
  // Logical Operators :- {foodItems.length === 0 && <h3>I am still hungry</h3>} can be used instead of above
  return (
    
  <>
    <Container>
      <center><h1>Healthy Food</h1></center>
      <FoodInput handleonchange={handleonchange}/>
      <FoodItems items={foodItems}/>
      <ErrorMessage items={foodItems}/>
    </Container>
      
    
</>
  )
};

export default App;
