import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [pendingInc, setPendingInc] = useState(0);


  const handleIncClk = () => setPendingInc((prev) => prev + 1);

  const handleDecClk = () => {
    if (count > 0) {
      return setCount((prevCounter) => prevCounter - 1);
    }
    return window.alert("Cant go below zero!");
  };

  useEffect(() => {
    let interval;
    if (pendingInc > 0) {
      interval = setInterval(() => {
        setCount((prevCounter) => prevCounter + 1);
        setPendingInc((prevPending) => prevPending - 1);
      }, 300);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [pendingInc]);

  
  const handleResetClk = () => {
    setCount(0);
    setPendingInc(0);
    return window.alert("Reset to zero!");
  };

  return (
    <div className="App">
      <p style={{ fontSize: '2rem' }}>{count}</p>

      <button onClick={handleDecClk}>Decrement (-)</button>
      <button onClick={handleResetClk}>Reset</button>
      <button onClick={handleIncClk}>Increment (+)</button>
    </div>
  );
}

export default App;