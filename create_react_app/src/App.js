import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import A from "./pages/A";
import B from "./pages/B";
import DerivedStateDemo from "./pages/derivedStateDemo";

function App() {
  const [textA, setTextA] = useState("我是A的文本");
  const [textB, setTextB] = useState("我是B的文本");

  const [count, setCount] = useState(10);

  const [array, setArray] = useState([1, 2, {}])
  const mapper = {
    A: setTextA,
    B: setTextB,
  };
  const onClick = (e) => {
    mapper[e](`${e}文本被修改了`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {
          const newArray = array.slice()
          newArray[2].filters = [{c:'1'}]
          // newArray.push('3')
          // setArray(newArray)
        }}>change array</button>

        <button
          onClick={() => {
            onClick("A");
          }}
        >
          change A
        </button>
        <button
          onClick={() => {
            onClick("B");
          }}
        >
          change B
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          change B count
        </button>

        <A text={textA} />
        <B text={textB} count={count} />
        <DerivedStateDemo array={array} text={textA} />
      </header>
    </div>
  );
}

export default App;
