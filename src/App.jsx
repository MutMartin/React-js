import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.jsx';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
