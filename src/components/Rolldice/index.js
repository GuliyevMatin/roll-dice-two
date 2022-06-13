import { Component } from "react";
import Players from "./Players";
import DiceHeader from "./DiceHeader";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      dice: ["one", "two", "three", "four", "five", "six"],
      playerUserCount: 0,
      playerCompCount: 0,
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
      this.resultCount();
      this.setState({
        clicked: false,
        
      });
    }, 1500);

  }
  playerUser() {
    let randomUserCount = Math.floor(Math.random() * this.state.dice.length);
    let randomUserCount2 = Math.floor(Math.random() * this.state.dice.length);
    let randomDice = this.state.dice[randomUserCount];
    let randomDice2 =this.state.dice[randomUserCount2];
    this.setState({
      playerUser: { playerUserDice: [randomDice, randomDice2],playerUserScore:(randomUserCount + 1) + (randomUserCount2 + 1), playerUserCount : this.state.playerUser.playerUserCount },
    });
    
  }
  playerComp() {
    let randomCompCount = Math.floor(Math.random() * this.state.dice.length);
    let randomCompCount2 = Math.floor(Math.random() * this.state.dice.length);
    let randomDice =this.state.dice[randomCompCount];
    let randomDice2 =this.state.dice[randomCompCount2];
    this.setState({
      playerComp: { playerCompDice: [randomDice, randomDice2],playerCompScore:(randomCompCount + 1) + (randomCompCount2 + 1), playerCompCount : this.state.playerComp.playerCompCount },
    });
  
  }

  resultCount (){
    if(this.state.playerUser.playerUserScore > this.state.playerComp.playerCompScore){
       this.setState({  playerUserCount : this.state.playerUserCount + 1 } );
    }
    else if(this.state.playerUser.playerUserScore < this.state.playerComp.playerCompScore){
      this.setState({  playerCompCount : this.state.playerCompCount + 1 } );
    }
  }

  render() {
    return (
      <div className="dice">
        <DiceHeader
          rollDice={ () => {
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
              clicked={this.state.clicked}
              score = {this.state.playerUser.playerUserScore}
              result = {this.state.playerUser.playerUserScore > this.state.playerComp.playerCompScore ? "Win" : this.state.playerUser.playerUserScore === this.state.playerComp.playerCompScore ? "Draw" : "Lose"}
              count = {this.state.playerUserCount}
            />
            <Players
              playerName="Player Comp"
              dice={this.state.playerComp.playerCompDice}
              clicked={this.state.clicked}
              score = {this.state.playerComp.playerCompScore}
              result = {this.state.playerUser.playerUserScore < this.state.playerComp.playerCompScore ? "Win" : this.state.playerUser.playerUserScore === this.state.playerComp.playerCompScore ? "Draw" : "Lose"}
              count = {this.state.playerCompCount}
            />
          </div>
        {/* )} */}
      </div>
    );
  }
}

export default RollDice;
