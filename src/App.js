import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

// For generate random number of dice
function randomNumber(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    // 자식 요소의 state를 부모요소로 올려줌 - state lifting
    const [myGameHistory, setMyGameHistory] = useState([]);
    const [otherGameHistory, setOtherGameHistory] = useState([]);
    

    let rollDice = () => {
        let myDiceNumber = randomNumber(6);
        let otherDiceNumber = randomNumber(6);
        // console.log(myDiceNumber);
        setMyGameHistory([...myGameHistory, myDiceNumber]);
        // console.log(myDiceNumber);
        setOtherGameHistory([...otherGameHistory, otherDiceNumber]);
    }
    
    let resetDice = () => {
        setMyGameHistory([]);
        setOtherGameHistory([]);
    }

    return (
    <>
        <div>                
            <Button onClick={rollDice}>Lancer</Button>
            <Button onClick={resetDice}>réinitialiser</Button>
        </div>    
        <div>            
            <Board name="Moi" color="blue" gameHistory={myGameHistory}/>
            <Board name="Toi" color="red" gameHistory={otherGameHistory}/>
        </div>
    </>
    );
}

export default App;