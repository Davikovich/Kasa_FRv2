import './home.scss'
import Header from '../../components/Header/Header'
import Banner from '../../components/banner/Banner'
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