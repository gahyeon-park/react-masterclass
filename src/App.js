import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;

// styled(Box): Box 컴포넌트의 모든 속성을 상속받는 Circle 컴포넌트 + 추가로 스타일을 더하면서 확장
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="dodgerblue" />
      <Circle bgColor="salmon" />
    </Father>
  )
}

export default App;
