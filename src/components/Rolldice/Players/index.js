import { Component } from "react";

class Players extends Component {
    render() {
        console.log(this.props);
        return (
        <div className="diceBody">  
            <h1>{this.props.playerName}</h1>
            <p>Dice : {!this.props.clicked ? this.props.score : "Loading..."}</p>
            <p>Score : {!this.props.clicked ? this.props.count : "Loading..."}</p>
            <p>Result :<span className={!this.props.clicked ? this.props.result === "Win" ? "text-success" : this.props.result === "Lose" ? "text-danger" : "text-warning" : ""}> {!this.props.clicked ? this.props.result : "Loading..."}</span></p>
            <div className="diceIcon">
                {this.props.dice.length === 0 && <i className="fa-solid fa-diamond"></i>}
                {this.props.dice.length === 0 && <i className="fa-solid fa-diamond"></i>}
                {this.props.dice.map((item, index) => {
                  
                    return <i key={index} className={`${!index && "fa-solid fa-diamond"} ${this.props.clicked ? "fa-solid fa-diamond" : `fas fa-dice-${item}`} ${this.props.clicked && "shake-slow shake-constant shake-constant--hover"}`}></i>
                })}
             
            </div>
        </div>
        );
    }
}


export default Players;