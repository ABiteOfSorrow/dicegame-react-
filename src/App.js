import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import "./App.css"
import diceLogo from './assets/logo.png'

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
    <div className="App">
        <div>
            <img className="App-logo" src={diceLogo} alt="Dice game logo" />
            <h1 className="App-title">Dice Game</h1>
        </div>
        <div>                
            <Button className="App-button" onClick={rollDice} color="blue">Lancer</Button>
            <Button className="App-button" onClick={resetDice} color="red">réinitialiser</Button>
        </div>    
        <div>            
            <Board name="Moi" color="blue" gameHistory={myGameHistory}/>
            <Board name="Toi" color="red" gameHistory={otherGameHistory}/>
        </div>
    </div>
    );
}

export default App;