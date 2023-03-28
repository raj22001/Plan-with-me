import React, { useState } from "react";
import data from "./data";
import Tours from "./Components/Tours";

const App = () => { 

  const [tours , setTours] = useState(data)
  //console.log(useState)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours); 
  }

  if(tours.length === 0){
    return (
      <div className="refesh">
        <h2>No Tour left</h2>
        <button className="btn-white" onClick={ () => {
          setTours(data)
        }}>
          Refresh
        </button>
      </div>
    );
  }

  return(
    <div className="App">
      <Tours tours ={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
