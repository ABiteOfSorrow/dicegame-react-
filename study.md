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
        n = 6
        Math.ceil(Math.random() * n) 


T1. 배열이나 객체같은 참조형 state를 사용할때는 메소드나 할당연산자가 아니라 새로운 값을 만들어서 변경해야 함. 
    - 참조형의 경우 원래 주소값을 가리키기 때문에 리액트에서 변경됬다고 판단하지 않아 렌더링이 이루어지지 않기 때문