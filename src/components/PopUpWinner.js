import React from "react";

export default (props)=>(
    <div id="popUpWinner">
        <div id="popMain">
            <div>
                <h3>WINNER IS {props.winner}</h3>
                <button onClick={props.playAgain}>play again !!!</button>
            </div>
        </div>
    </div>
)