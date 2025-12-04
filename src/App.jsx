import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.jsx';
import About from './components/About/About.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path='/About' element={<About />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/producto/:itemId' element={<ItemDetailContainer />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
