import { useState } from "react";
import "./App.css";
import { Cyborg } from "react-kawaii";

const MOODS = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];

function App() {
  const [mood, setMood] = useState("happy");

  const randomizeMood = () => {
    const randomIndex = Math.floor(Math.random() * MOODS.length);
    setMood(MOODS[randomIndex]);
  };
  return (
    <>
      <div className="App">
        <Cyborg size={240} mood={mood} color="#FDA7DC" />
        <button onClick={randomizeMood}>Surpriiiiiise</button>
      </div>
    </>
  );
}

export default App;
