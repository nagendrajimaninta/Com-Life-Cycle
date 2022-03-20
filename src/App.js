import React, { Component } from "react";
import "./styles.css";
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toTimeString()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ currentTime: new Date().toTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>The Time is :{new Date().toLocaleTimeString()}</h2>
        <h2> Date()</h2>
        <h2></h2>
      </div>
    );
  }
}
export default function App() {
  return (
    <div className="App">
      <LifeCycle />
      <h4>Life Cycle Methods</h4>
      <h2>Magic Happe Hear ,Let's Wait and see</h2>
    </div>
  );
}
