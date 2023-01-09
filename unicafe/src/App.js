import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
    console.log("good", good);
  };
  const addNeutral = () => {
    setNeutral(neutral + 1);
    console.log("neutral", neutral);
  };
  const addBad = () => {
    setBad(bad + 1);
    console.log("bad", bad);
  };

  return (
    <>
      <h1>GIVE FEEDBACK</h1>
      <div>
        <Button onClick={addGood} text="good"></Button>
        <Button onClick={addNeutral} text="neutral"></Button>
        <Button onClick={addBad} text="bad"></Button>
      </div>

      <h1>statics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad:{bad}</p>
    </>
  );
};
export default App;
