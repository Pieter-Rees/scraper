import React from "react";
import worker_script from "./src/Worker.js";
import "./App.css";

class MyClass extends React.Component {
  constructor() {
    super();

    this.state = { clickCount: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.worker = new Worker(worker_script);
    this.worker.onmessage = ev => {
      console.log("got data back from worker");
      console.log(ev);
    };
  }

  handleClick() {
    console.log("Posting message");
    this.worker.postMessage("Button clicked");
  }

  render() {
    return (
      <div>
        myClass test
        <button onClick={this.handleClick}>Click to trigger worker</button>
      </div>
    );
  }
}

export default MyClass;
