import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';
import './App.css'
const App = () => {
  const[tours,setTours]=useState(data);
function removetour(id){
  const newTours = tours.filter(tour => tour.id!==id);
  setTours(newTours);
}

if (tours.length===0){
  return(
  <div className="refresh">
    <h2 className="noTours">No Tours Left</h2>
    <button className="RefreshBtn" onClick={()=>{setTours(data)}}>
      refresh
    </button>

  </div>
);}
  return(
  <div>
    <Tours tours={tours} removetour={removetour}></Tours>
  </div>);
};

export default App;
