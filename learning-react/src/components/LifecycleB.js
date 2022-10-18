import React, { Component } from "react";
import Example from "./Example";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shubham shukla",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Shubhamm:getDerivedStateFromProps:B");
    return null;
  }

  componentDidMount() {
    console.log("Shubhamm:componentDidMount:B");
  }

  render() {
    return (
      <>
        <h1>lifecycleB</h1>
        <Example></Example>
      </>
    );
  }
}

export default LifecycleB;