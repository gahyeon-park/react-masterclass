import styled from 'styled-components';

// ※ App컴포넌트가 ThemeProvider 안에 있기 때문에 App 내 컴포넌트인 Title과 Wrapper 컴포넌트가 props로 theme 컬러들에 접근할 수 있다.
const Title = styled.h1`
  color: ${props => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>제목</Title>
    </Wrapper>
  )
}

export default App;