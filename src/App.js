import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

// For generate random number of dice
function randomNumber(n) {
    return Math.ceil(Math.random() * n);
}


function App() {

    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    let rollDice = () => {
        let diceNumber = randomNumber(6);
        setNum(diceNumber);
        setSum(sum + diceNumber);
        // console.log(diceNumber);
        setGameHistory([...gameHistory, diceNumber]);
    }
    
    let resetDice = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    }

    return (    
        <div>
            <div>                
                <Button onClick={rollDice}>Lancer</Button>
                <Button onClick={resetDice}>réinitialiser</Button>
            </div>
            <h2>Moi</h2>
            <Dice color="blue" num={num}/>
            <h2>Somme</h2>
            <p>{sum}</p>
            <h2>Record</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
}

export default App;