import './App.css';
import FunctionalTimer from './Component/Timer';
import Colors from './Component/Colors';
import { Background } from './Component/Background';
import React from 'react';

export const context = React.createContext(null);

function App() {
  const [flag, setFlag] = React.useState(false);

  return (
    <context.Provider value={{flag, setFlag}}>
      <div
        className="App"
        style={{ backgroundColor: flag ? "black" : "gray" }}
      >
        <header className="App-header">
          <p>ini ceritanya screen time</p>
          <h1>SCREEN TIME</h1>
          <FunctionalTimer start={1} />
          Kalo ini ceritanya warna buttonnya ganti klo dipencet
          <Colors />
          <p>ini ganti background</p>
          <Background />
        </header>
      </div>
    </context.Provider>
  );
}

export default App;
