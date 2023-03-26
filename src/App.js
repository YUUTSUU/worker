// import logo from "./logo.svg";
// import { useEffect } from "react";
import { useEffect } from "react";
import "./App.css";
// import worker from "./prime.worker.js";
// import { useEffect } from "react";
import { useWorker } from "./useWorkerHook";

function App() {
  // let myWorker = new Worker(new URL("./worker.js", import.meta.url));
  // myWorker.postMessage("start");
  const { res, run } = useWorker();

  function ex(k) {
    return k * Math.random();
  }

  useEffect(() => {
    console.log("res", res);
  }, [res]);

  return (
    <div className="App">
      <button onClick={() => run(ex, 10)}>Click</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
