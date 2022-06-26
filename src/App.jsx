import React from 'react';
import MyProvider from './MyContext/MyProvider';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Router />
      </MyProvider>
    </div>
  );
}

export default App;
