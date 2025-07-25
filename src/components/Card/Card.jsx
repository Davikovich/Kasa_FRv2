import './card.scss'
// Import du composant Link pour naviguer sans recharger la page (React Router)
import { Link } from 'react-router-dom'

// Déclaration du composant fonctionnel Card avec déstructuration des props : id, title, cover
export default function Card({id, title, cover}) {

	return (
		// Le composant Link permet de créer un lien vers la fiche du logement correspondant à l’id
		<Link to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={"Kasa -" + title} />
			<h3>{title}</h3>	
		</Link>
	)
}