import React from 'react';
import './App.css';
import Clock  from "./components/Clock";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Clock />
    </div>
  );
}

export default App;
