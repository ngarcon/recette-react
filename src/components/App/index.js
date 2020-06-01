// == Import React
import React from 'react';

// == Import Components
import Header from '../Header'; 
import Ingredients from '../Ingredients'; 
import Instructions from '../Instructions'; 
import './styles.css';

// Import data 
import data from '../../data/recipe'; 

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header title={data.title}  author={data.author} difficulty= {data.difficulty} img={data.thumbnail}/>
      <Ingredients ingredients={data.ingredients}/>
      <Instructions instructions={data.instructions}/>
    </div>
  );
};

// == Export
export default App;
