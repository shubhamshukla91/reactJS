// import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem('state')) ||{
      languages: [
        { name: "Python", votes: 0 },
        { name: "Javascript", votes: 0 },
        { name: "java", votes: 0 },
        { name: "C++", votes: 0 },
        { name: "Kotlin", votes: 0 },
      ],
    };
  }
  setState(state) {
    window.localStorage.setItem("voteCount", JSON.stringify(state));
    super.setState(state);
  }

  vote(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    this.setState({ languages: newLanguages });
  }

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
        </div>
      </>
    );
  }
}
export default App;