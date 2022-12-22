import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function randomNumber(n) {
    return Math.ceil(Math.random() * n)
}


function App() {

    const [num, setNum] = useState(1);

    let rollDice = () => {
        let diceNumber = randomNumber(6)
        console.log(diceNumber)
        setNum(diceNumber);
    }
    
    let resetDice = () => {
        setNum(1)
    }

    return (    
        <div>
            <div>
                <Button onClick={rollDice}>Lancer</Button>
                <Button onClick={resetDice}>réinitialiser</Button>
            </div>
            <Dice color="blue" num={num}/>
        </div>
    )
}

export default App;