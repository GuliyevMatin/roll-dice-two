import { Component } from "react";
import Players from "./Players";
import DiceHeader from "./DiceHeader";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      dice: ["one", "two", "three", "four", "five", "six"],
      playerUser: {
        playerUserScore: 0,
        playerUserDice: [],
      },
      playerComp: {
        playerCompScore: 0,
        playerCompDice: [],
      },
    };
  }
  clickedBtn() {
    this.setState({
      clicked: true,
    });

    setTimeout(() => {
      this.setState({
        clicked: false,
      });
    }, 1500);
  }
  playerUser() {
    let random = Math.floor(Math.random() * this.state.dice.length +1);
    console.log(random);
    let randomDice = this.state.dice[Math.floor(Math.random() * this.state.dice.length)];
    let randomDice2 =this.state.dice[Math.floor(Math.random() * this.state.dice.length)];
    this.setState({
      playerUser: { playerUserDice: [randomDice, randomDice2] },
    });
  }
  playerComp() {
    let randomDice =this.state.dice[Math.floor(Math.random() * this.state.dice.length)];
    let randomDice2 =this.state.dice[Math.floor(Math.random() * this.state.dice.length)];
    this.setState({
      playerComp: { playerCompDice: [randomDice, randomDice2] },
    });
  }

  render() {
    return (
      <div className="dice">
        <DiceHeader
          rollDice={() => {
            this.playerUser();
            this.playerComp();
            this.clickedBtn();
          }}
            clicked={this.state.clicked}
        />
        {/* {this.state.clicked && ( */}
          <div className="players">
            <Players
              playerName="Player User"
              dice={this.state.playerUser.playerUserDice}
              //   score = {this.state.playerUser.playerScore}
              clicked={this.state.clicked}
            />
            <Players
              playerName="Player Comp"
              dice={this.state.playerComp.playerCompDice}
              //   score = {this.state.playerComp.playerScore}
              clicked={this.state.clicked}
            />
          </div>
        {/* )} */}
      </div>
    );
  }
}

export default RollDice;
