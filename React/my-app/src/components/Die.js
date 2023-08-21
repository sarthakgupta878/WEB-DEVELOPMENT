import React from "react";

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "greenyellow":"white"
    }
    return(
        <div className="die--face" style={styles} onClick={props.holdDice}>
            <h1>{props.value}</h1>
        </div>
    )
}