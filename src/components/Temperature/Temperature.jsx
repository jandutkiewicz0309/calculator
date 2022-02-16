import React, { useState } from "react";

 function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const convert = (e) => {
    e.preventDefault();
    const formValid = !isNaN(+celsius);
    if (!formValid) {
      return;
    }
    setFahrenheit(+celsius * (9 / 5) + 32);
  };

  return (
    <div className="Temperature">
      <form onSubmit={convert}>
        <div>
          <h2>temperature calculator</h2>
          <p>temperature in celsius</p>
          <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        </div>
        <button type="submit">convert</button>
      </form>
      <div className="temp-value">
        {celsius}c is {fahrenheit}f
      </div>
    </div>
  );
}

export default App;