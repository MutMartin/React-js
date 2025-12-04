import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (

      <nav className="barra">
        <Link to="/">Incio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
  );
}
export default NavBar;