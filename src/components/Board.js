import React, { Component } from 'react';
import Square from "./Square"
import {clickSquare,resetSquareArray,addWinner} from "../actionCreators/actions"
import { connect } from 'react-redux';

const winCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  
class Board extends Component {

    state = {
        winner: null
    }
    clickSquare = (ev)=>{
        const id = ev.target.getAttribute("squareid");
        console.log("CLICk")
        if(!id) return
        if(this.props.squareArr[id]) {
            alert("NOOO")// clickel  mi qani...
            return;
        }
        this.props.onClick(ev)
        // alert(t);
    }
    componentDidUpdate(){
        
        let winner = this.checkWin()
        if(winner) {
            this.props.addWinner(winner);
        }
    }
    checkWin =() =>{
        const squares = this.props.squareArr;
        let isWinner = null;
        winCombs.forEach(row=>{
            let [x,y,z] = row;
            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
                // alert("WINNDER IS "+ squares[x])
                isWinner =  squares[x];
            }
        })
        return isWinner
    }
    render(){
        return (
            <div onClick={this.clickSquare}  id="board">
                <div className ="boardRow">
                    <Square squareid = {0} value={this.props.squareArr[0]} />
                    <Square squareid = {1} value={this.props.squareArr[1]} />
                    <Square squareid = {2} value={this.props.squareArr[2]} />
                </div>
                <div className ="boardRow">
                    <Square squareid = {3} value={this.props.squareArr[3]} />
                    <Square squareid = {4} value={this.props.squareArr[4]} />
                    <Square squareid = {5} value={this.props.squareArr[5]} />
                </div>
                <div className ="boardRow">
                    <Square squareid = {6} value={this.props.squareArr[6]} />
                    <Square squareid = {7} value={this.props.squareArr[7]} />
                    <Square squareid = {8} value={this.props.squareArr[8]} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {squareArr:state.squareArr}
}
const mapDispatchToProps = dispatch=>{
    return {
        onClick: ev=>{
            dispatch(clickSquare(ev.target.getAttribute("squareid")))
        },
        resetSquareArray:()=>dispatch(resetSquareArray()),
        addWinner: (winner)=>dispatch(addWinner(winner))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);


// again skselu hnaravorutyun(0yacum@ grvat e ), verjin haxtox@ cuyc ta et etancqum, history haxtoxneri ...