// Import des styles CSS du menu de navigation
import './navbar.scss'
// Import de Link pour naviguer entre pages, et useLocation pour détecter la route active
import { Link, useLocation } from 'react-router-dom';


// Déclaration du composant Navbar
export default function Navbar() {
  // Hook React Router qui donne la route actuelle (utile pour styliser l'onglet actif)
  const location = useLocation();

  return (
    // Élément sémantique <nav> pour la navigation principale du site
    <nav className='nav'>
      <ul className='nav_list'>
         {/* Lien vers la page d'accueil ("/Kasa") */}
        <li className={location.pathname === '/Kasa' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to='/Kasa'>Accueil</Link>
        </li>
         {/* Lien vers la page À propos ("/about/A Propos") */}
        <li className={location.pathname === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to='/about'>A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
