import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
