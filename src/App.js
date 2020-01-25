import React from 'react';
import './App.css';
import Routing from "./Containers/__Routing/Routing";
import CalculatorDisplay from "./Components/CalculatorDisplay";

function App() {
  return (
    <div className="App" >
      <CalculatorDisplay class="col-xs-9 col-md-7"/>
    </div>
  );
}

export default App;
