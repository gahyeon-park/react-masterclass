import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App2 from './App2';

// ※ dark/light 모드 간 전환이 일어나므로 darkTheme, lightTheme은 동일한 이름의 property들을 가지고 있어야 한다.
const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const lightTheme = {
  backgroundColor: "whitesmoke",
  textColor: "#111"
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// ※ App이 ThemeProvider 안에 있기 때문에 App 내 컴포넌트들이 theme 컬러들에 접근할 수 있다.
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App2 />
    </ThemeProvider>
  </React.StrictMode>
);

