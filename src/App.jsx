import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
