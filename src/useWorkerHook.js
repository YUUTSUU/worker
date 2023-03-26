import React from "react";

function handler(fn) {
  onmessage = (event) => {
    postMessage(fn(event.data));
  };
}

function useWorker() {
  const [res, setRes] = React.useState(null);
  const [err, setErr] = React.useState(null);

  const run = (func, val) => {
    const blob = new Blob([`(${handler})(${func})`]);
    const path = URL.createObjectURL(blob);
    const worker = new Worker(path);

    worker.onmessage = (event) => {
      setRes(event.data);
      worker.terminate();
    };

    worker.onerror = (error) => {
      setErr(error.message);
      worker.terminate();
    };

    worker.postMessage(val);
  };

  return { res, err, run };
}

export { useWorker };
