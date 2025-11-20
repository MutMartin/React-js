import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
