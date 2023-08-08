import styled, { keyframes } from 'styled-components';


const Father = styled.div`
  display: flex;
`;

// const BoxA = styled.div`
//   background-color: ${props => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// styled(Box): Box 컴포넌트의 모든 속성을 상속받는 Circle 컴포넌트 + 추가로 스타일을 더하면서 확장
// const Circle = styled(BoxA)`
//   border-radius: 50px;
// `;

// ※ styled 컴포넌트를 button 태그로 설정했지만, 
// 스타일 속성은 그대로 쓰되 태그만 다른 태그로 변경하길 원할 경우 <Btn as="a"></Btn> (Btn 컴포넌트 스타일을 <a>태그에 사용)와 같이 쓸 수 있다.
// const Btn = styled.button.attrs({ title: '새창' })`
//   color: white;
//   background-color: slateblue;
//   border: none;
//   padding: .5em 1em;
//   border-radius: .5em;
// `;

// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: skyblue;
// `;

const rotationAni = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }

  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  
  100% {
    transform: rotate(0deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 2rem;
  transition: font-size .3s;
`;

const BoxB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: darkkhaki;
  animation: ${rotationAni} 2s linear infinite;

  ${Emoji}:hover {
      font-size: 4rem;
    }
`;

function App() {
  return (
    <Father as="header">
      <BoxB>
        <Emoji as="p">&#128516;</Emoji>
      </BoxB>
      <Emoji>&#128150;</Emoji>
    </Father>
  )
}

export default App;
