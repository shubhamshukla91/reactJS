import React, { Component } from "react";
import Example from "./Example";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "001",
    };
  }
  

  static getDerivedStateFromProps(props, state) {
    console.log("shuklaaa:getDerivedStateFromProps:LifecycleB");
    return null;
  }

  componentDidMount() {
    console.log("shuklaaa:componentDidMount:LifecycleB");
  }
  
  render() {
    return <><h1>LifecycleB</h1>
    <Example></Example></>;
  }
}

export default LifecycleB;