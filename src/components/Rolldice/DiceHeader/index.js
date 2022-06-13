import { Component } from "react";

class DiceHeader extends Component{
    render() {
        return (
            <div className="diceHeader">
                <h1 className="text-center">Dice Game</h1>
                <button disabled={this.props.clicked && true} onClick={this.props.rollDice} className="btn d-block mx-auto btn-primary">{this.props.clicked ? "Rolling" :"Go Roll"}</button>
            </div>
        )
    }
}

export default DiceHeader;