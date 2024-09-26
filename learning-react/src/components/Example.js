import React, { Component } from "react";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 5000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite color was " + prevState.favoritecolor;
    return null;
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite color is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        <div id="div1"></div>
      </div>
    );
  }
}
export default Example;