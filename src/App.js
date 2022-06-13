import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import RollDice from "./components/Rolldice";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <RollDice/>
      </div>
    );
  }
}


export default App;
