import React from 'react';
import Navbar from './components/Navbar';
import CanvasModel from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <main className="app">
        <Home />
        <CanvasModel />
        <Customizer />
      </main>
    </>
  );
}

export default App;
