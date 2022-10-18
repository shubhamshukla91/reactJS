// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("voteCount")) || {
      languages: [
        { name: "Python", votes: 0 },
        { name: "Javascript", votes: 0 },
        { name: "java", votes: 0 },
        { name: "C++", votes: 0 },
        { name: "Kotlin", votes: 0 },
      ],
    };
  }
  static getDerivedStateFromProps(props, state) {
    window.localStorage.setItem("voteCount", JSON.stringify(state));
    return null;
  }
  // setState(state) {
  //   window.localStorage.setItem('voteCount', JSON.stringify(state));
  //   super.setState(state);
  // }
  vote = (i) => {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    this.setState({ languages: newLanguages }); //this.setState({ languages: newLanguages.sort((a, b) => b.votes - a.votes)}); handle counter shift according to votecount.
  };
  componentDidMount() {
      let newLanguages1 = [...this.state.languages];
      this.setState({ languages: newLanguages1.sort((a, b) => b.votes - a.votes)});
  } //sorting votecount after refreshing the page for better handling of votes.
  
  clear(state) {
    window.localStorage.clear(state);
    this.setState({
      languages: [
        { name: "Javascript", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "Java", votes: 0 },
        { name: "C++", votes: 0 },
        { name: "Kotlin", votes: 0 },
      ],
    });
  }
  // componentDidUpdate() {
  //   document.getElementById("div1").innerHTML =
  //     "So, as of now, most voted language is "+ this.state.languages[0];
  //   return null;
  // }

  render() {
    return (
      <>
        <h1>Vote Your Language!</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            <div key={i} className="language">
              <div className="voteCount">{lang.votes}</div>
              <div className="languageName">{lang.name}</div>
              <div className="buttonVote">
                <button onClick={this.vote.bind(this, i)}>Click Here</button>
              </div>
            </div>
          ))}
          <div className="buttonClear">
            <button onClick={this.clear.bind(this)}>Clear All</button>
          </div>
        </div>
      </>
    );
  }
}
export default App;