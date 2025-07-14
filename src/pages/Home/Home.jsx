import './Home.scss'
import Header from '../../components/header/Header'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}