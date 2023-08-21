import React from "react";
import Die from "./components/Die";
import "./style.css"
import Confetti from "react-confetti";
import { nanoid } from "nanoid";

export default function App(){

    const [dice,setDice] = React.useState(allNewDice())
    const [won,setWon] = React.useState(false)

    React.useEffect(()=>{
        const isHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allValueSame = dice.every(die => die.value === firstValue)
        if( isHeld && allValueSame){
            setWon(true)
        }
    },[dice])

    function allNewDice(){
        const newDice =[]
        for(let i=0;i<10;i++){
            newDice.push({
                id:nanoid(),
                value:Math.ceil(Math.random() *6),
                isHeld:false
            });
        }
        return newDice;
    }

    function rollDice(){
        if(!won){

            setDice(oldDice => oldDice.map(die =>{
                return die.isHeld ?
                die :
                {
                    id:nanoid(),
                    value:Math.ceil(Math.random() *6),
                    isHeld:false
                }
            }))
        }else{
            setWon(false)
            setDice(allNewDice())
        }
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die=>{
            return die.id === id ? {...die, isHeld : !die.isHeld}:die
        }))
    }
    const diceElement = dice.map(die => <Die key ={die.id} value={die.value} isHeld={die.isHeld}  holdDice={()=>holdDice(die.id)}/>)

    return(
        <main>
            {won && <Confetti/>}
            <h1>Play With Me!!</h1>
            <div className="dice--container">
                {diceElement}
            </div>
            <button className="btn" onClick={rollDice} >{won ?"New Game" : "Roll"}</button>
        </main>
    )
}