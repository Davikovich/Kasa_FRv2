// Import des styles CSS du header
import './header.scss'
//logo principal
import Logo from '../../assets/logo.png'
// import composant navbar (barre de navigation)
import Navbar from '../Navbar/Navbar'

// Déclaration du composant Header
export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			
			{/* Composant de navigation (liens vers Accueil et À propos) */}
			<Navbar />
		</header>
	)
}