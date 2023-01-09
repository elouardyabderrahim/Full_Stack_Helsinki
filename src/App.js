import { useState } from "react";
/*const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);
const App = () => {
  const [counter, setCounter] = useState(0);
  //setTimeout(() => setCounter(counter + 1), 1000);
  //console.log("rundering ...", counter);
  const [color, setColor] = useState("#000");
  // const [background, setBackground] = useState(color);

  useEffect(() => {
    if (counter % 5 === 0 && counter !== 0) {
      setColor(randomColor);
    }
  }, [counter]);
  const clicked = () => {
    console.log("clicked...");
    setCounter((prev) => prev + 5);
    console.log("counte", counter);
  };
  const reset = () => {
    setColor("#fff");
    setCounter(0);
  };
  return (
    <div style={{ background: color }}>
      <button onClick={reset}> reset</button>
      <button onClick={clicked}>click</button>
      <p>{counter}</p>
      //{ {counter != 0 && counter % 5 === 0 && <p> this is .... </p>} }
    </div>
  );
};*/
/*
const App = () => {

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const dicrease = () => {
    setCounter(counter - 1);
  };

  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <Button onClick={increase} text="plus" />
      <Button onClick={dicrease} text="minus" />
      <Button onClick={setToZero} text="zero" />
      <Display counter={counter} />
    </div>
  );
};

//const Display = (props) => {
// return <div>{props.counter}</div>;
//};

const Display = ({ counter }) => <div>{counter}</div>;

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;*/
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}> left </button>
      <button onClick={() => setRight(right + 1)}> right </button>
      {right}
    </div>
  );
};

export default App;
