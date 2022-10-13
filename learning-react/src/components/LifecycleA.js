import React, { Component } from "react";

import Clock from "./Clock";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shubham shukla",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Shubhamm:getDerivedStateFromProps:A");
    return null;
  }

  componentDidMount() {
    console.log("Shubhamm:componentDidMount:A");
  }

  render() {
    return (
      <h1>
        lifecycleA
        <Clock></Clock>
      </h1>
    );
  }
}

export default LifecycleA;