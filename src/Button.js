const baseButtonStyle = {
    padding: '14px 27px',
    borderRadius: '30px',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '17px',        
}

const blueButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: 'rgba(0, 89, 255, 0.2)',
    border: 'solid 1px #7090ff',
    color: '#7090ff',
}

const redButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: 'rgba(255, 78, 78, 0.2)',
    border: 'solid 1px #ff4664',
    color: '#ff4664'
}

function Button({ children, onClick, color }) {

    let style = color === 'red' ? redButtonStyle : blueButtonStyle;

    return <button onClick={onClick} style={style}>{ children }</button>
}

export default Button;