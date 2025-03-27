import "./App.css";
import { useState } from "react";

function App() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputSurnameValue, setInputSurnameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");

  return (
    <main>
      <section>
        <form>
          <input
            type="text"
            value={inputNameValue}
            onChange={(event) => {
              setInputNameValue(event.target.value);
              console.log(inputNameValue);
            }}
          />
          <input
            type="text"
            value={inputSurnameValue}
            onChange={(event) => {
              setInputSurnameValue(event.target.value);
              console.log(inputSurnameValue);
            }}
          />

          <input
            type="text"
            value={inputEmailValue}
            onChange={(event) => {
              setInputEmailValue(event.target.value);
              console.log(inputEmailValue);
            }}
          />
          <p>Vorname: {inputNameValue}</p>
          <p>Nachname: {inputSurnameValue}</p>
          <p>Email: {inputEmailValue}</p>
        </form>
      </section>
    </main>
  );
}

export default App;
