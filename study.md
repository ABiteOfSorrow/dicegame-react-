// 다른 컴포넌트의 하위 요소로 사용될때 children을 주면 프롭이 아니라 값을 넣었을때 내용이 변경된다.
function Button({ children }) {
    return <button>{ children }</button>
}

export default Button;

import Button from './Button';
import Dice from './Dice';

function App() {
    return (    
        <div>
            <div>
            <Button>"Lancer"</Button>
            <Button>"Recommencer"</Button>
            </div>
            <Dice color="blue" num={1}/>
        </div>
    )
}

export default App;





2. Javascript
    1) Math.ceil - 올림 
        ex) 1.2 = 2
    2) Math.floor() - 내림
        ex) 1.6 = 1)
    3) Math.round() - 반올림
        ex) 1.4 = 1 / 1.6 = 2
    4) Math.random() = 0 ~ 1 미만의 랜덤한 수를 출력 (0 ~ 0.999999-----)
        ex) Math.random

    5) 활용
        ex) 1~6 까지의 랜덤 숫자 출력
        Math.ceil(Math.random() * n) 