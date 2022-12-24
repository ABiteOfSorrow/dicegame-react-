import Dice from './Dice';

function Board({name, color, num, sum, gameHistory}) {

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