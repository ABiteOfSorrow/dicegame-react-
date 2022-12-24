import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

// For generate random number of dice
function randomNumber(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    // 자식 요소의 state를 부모요소로 올려줌 - state lifting
    const [myNum, setMyNum] = useState(1);
    const [mySum, setMySum] = useState(0);
    const [myGameHistory, setMyGameHistory] = useState([]);
    const [otherNum, setOtherNum] = useState(1);
    const [otherSum, setOtherSum] = useState(0);
    const [otherGameHistory, setOtherGameHistory] = useState([]);
    

    let rollDice = () => {
        let myDiceNumber = randomNumber(6);
        let otherDiceNumber = randomNumber(6);
        setMyNum(myDiceNumber);
        setMySum(mySum + myDiceNumber);
        // console.log(myDiceNumber);
        setMyGameHistory([...myGameHistory, myDiceNumber]);
        setOtherNum(otherDiceNumber);
        setOtherSum(otherSum + otherDiceNumber);
        // console.log(myDiceNumber);
        setOtherGameHistory([...otherGameHistory, otherDiceNumber]);
    }
    
    let resetDice = () => {
        setMyNum(1);
        setMySum(0);
        setMyGameHistory([]);
        setOtherNum(1);
        setOtherSum(0);
        setOtherGameHistory([]);
    }

    return (
    <>
        <div>                
            <Button onClick={rollDice}>Lancer</Button>
            <Button onClick={resetDice}>réinitialiser</Button>
        </div>    
        <div>            
            <Board name="Moi" color="blue" num={myNum} sum={mySum} gameHistory={myGameHistory}/>
            <Board name="Toi" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
        </div>
    </>
    );
}

export default App;