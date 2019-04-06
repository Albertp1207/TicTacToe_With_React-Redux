import React,{Component} from "react";
import {connect} from "react-redux";

class winnersHistory extends Component {
    render(){
        let arr = this.props.winners.map((el,i)=>{
            return <li key={i}> {i+1}. {el}</li>;
        })

        return(
            <div id="winnersHistory">
                <div id="winnersArr">
                    <ul>
                        {arr}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {winners:state.addWinner}
}
export default connect(mapStateToProps)(winnersHistory);