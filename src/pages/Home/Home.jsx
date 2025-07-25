//style homme
import './home.scss'

// composants importés Header/Banner/Gallery/Footer
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />  {/* // Affiche image + texte “Chez vous, partout et ailleurs” */}
			<Gallery /> {/* // Affiche toutes les cartes de logements */}
			<Footer />
		</div>
	)
}