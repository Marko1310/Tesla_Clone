// react
import React from 'react';

// Components
import Header from './components/Header/Header';
import Popmenu from './components/Header/Popmenu';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Popmenu />
    </div>
  );
}

export default App;
