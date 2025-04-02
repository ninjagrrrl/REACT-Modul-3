import { useState } from "react";
import "./App.css";


function App() {
  const [color, setColor] = useState("day");

  const changeColor = () => {};

  return (
    <div className="container">
      <h1>Day</h1>
      <button onClick={}>Change to Night</button>
    </div>
  );
}

export default App;
