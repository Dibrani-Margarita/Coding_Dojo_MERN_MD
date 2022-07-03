import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Number from './components/Number';
import Color from './components/Color';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/:number/:text/:background" element={<Color />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
