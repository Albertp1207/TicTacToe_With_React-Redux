import React, { Component } from 'react';
import './App.css';
import Board from  "./components/Board"
import PopUpWinner from "./components/PopUpWinner";
import { connect } from 'react-redux';
import {resetSquareArray} from "./actionCreators/actions"
import WinnersHistory from "./components/WinnersHistory";

class App extends Component {
  playAgain = ()=>{
    this.props.resetSquareArray()
  }
  render() {
    console.log(this.props.winner)

    return (
      <div className="App">
        {this.props.winner ? <PopUpWinner winner={this.props.winner} playAgain={this.playAgain} />:null}
        <Board />
        <WinnersHistory />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    winner:state.setWinner
  }
}
const mapDispatchToProps = dispatch=>{
  return {
      resetSquareArray:()=>dispatch(resetSquareArray())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
