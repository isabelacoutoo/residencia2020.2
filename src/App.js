import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
//import { AppProvider } from './hooks/index';
import Routes from './routes/index';



function App() {
  return (
    <>
      {/* <AppProvider> */}
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      {/* </AppProvider> */}
    </>
  );
}

export default App;
