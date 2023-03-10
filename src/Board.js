import Dice from './Dice';
import './App.css';

function Board({name, color, gameHistory}) {
    let num = gameHistory[gameHistory.length-1] || 1;
    let sum = gameHistory.reduce((a, b) => a + b, 0);

    return (    
        <div className="Board App-board">
            <h2 className="Board-heading">{name}</h2>
            <Dice color={color} num={num}/>
            <h2 className="Board-heading">Somme</h2>
            <p>{sum}</p>
            <h2 className="Board-heading">Record</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
}

export default Board;