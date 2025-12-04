import { Link } from 'react-router-dom';
import './About.css';   

function About() {
  return (
  
    <div className="About">
      <h2>Sobre Nosotros</h2>
      <p>Esta es una pagina que trata de vender articulos para mascotas varias, sin discriminar</p>
      <Link to="/">Volver</Link>
    </div>
    
  );
}
export default About;