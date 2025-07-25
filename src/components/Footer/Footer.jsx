// Import des styles CSS associés au pied de page
import './footer.scss'
// Import du logo blanc utilisé dans le footer
import logo from '../../assets/logo_footer.png'

// Déclaration du composant fonctionnel Footer
export default function Footer() {
	return (
		// Élément <footer> sémantique pour le bas de page
		<footer className='footer'>
			{/* Logo de l’entreprise en version sombre/blanche pour le fond noir */}
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			{/* Texte légal en bas de page */}
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
