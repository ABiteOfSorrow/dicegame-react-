import Dice from './Dice';

function Board({name, color, gameHistory}) {
    let num = gameHistory[gameHistory.length-1] || 1;
    let sum = gameHistory.reduce((a, b) => a + b, 0);

    return (    
        <div>
            <h2>{name}</h2>
            <Dice color={color} num={num}/>
            <h2>Somme</h2>
            <p>{sum}</p>
            <h2>Record</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
}

export default Board;