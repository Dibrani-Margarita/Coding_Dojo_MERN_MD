import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<ProductList />} path='/' default />
          <Route element={<ProductForm />} path='/new' />
          <Route element={<Detail/>} path="/new/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
