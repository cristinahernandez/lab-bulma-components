import React from "react";
import logo from "./logo.svg";
import CoolButton from "./components/CoolButton.js";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Cool Button Component</h1>
        <div className="buttons-container">
          <CoolButton isSmall isDanger className="is-rounded my-class">
            Button 1
          </CoolButton>
          <CoolButton isSmall isSuccess>
            Button 2
          </CoolButton>
          <CoolButton isPrimary isLarge>
            Button 3
          </CoolButton>
          <CoolButton isWarning isMedium className="is-rounded">
            Button 4
          </CoolButton>
          <CoolButton isInfo className="is-outlined is-normal">
            Button 4
          </CoolButton>
        </div>
      </header>
    </div>
  );
}

export default App;
