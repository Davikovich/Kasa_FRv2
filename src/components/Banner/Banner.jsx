
// On importe les styles associés au composant Banner
import './banner.scss'

// Hook fourni par React Router pour accéder à l’URL actuelle
import { useLocation } from 'react-router-dom';
// Hooks React pour gérer un état local et des effets de bord
import { useEffect, useState } from 'react';



export default function Banner() {

	// État local qui permet de savoir si on est sur la page "/about"
	const [aboutPage, setAboutPage] = useState(false);
	// Récupère la localisation courante (URL) de la page
	const location = useLocation();
	
	// À chaque fois que le chemin de l'URL change, on met à jour "aboutPage"
	useEffect(() => {
  setAboutPage(location.pathname === '/about');
}, [location.pathname]); // Le tableau de dépendances garantit que l'effet s’exécute à chaque changement d’URL


	// Rendu JSX du composant
	return (
		// On change la classe CSS selon la page (about ou pas)
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			 {/* Si on n’est PAS sur la page about, on affiche le slogan */}
			{!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
		</section>
	)
}