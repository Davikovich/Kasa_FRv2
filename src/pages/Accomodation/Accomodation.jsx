
import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/logements.json'
import Header from "../../components/Header/Header";
import Slider from "../../components/Carousel/Carousel"
import Footer from "../../components/Footer/Footer";
import Collapse from '../../components/Collapse/Collapse';
import NotFound from '../NotFound/NotFound';
import Tag from '../../components/Tag/Tag';
import Rating from '../../components/Rating/Rating';

export default function Accomodation() {

	const [imageSlider, setImageSlider] = useState([]); // images pour le carousel

	const { id } = useParams(); // récupère l'id dans l'URL
	// Cherche le logement correspondant à l'id
	const dataCurrentAccomodation = datas.find(data => data.id === id);
	// Si trouvé, met à jour les images pour le carousel
	useEffect(() => {
		if (dataCurrentAccomodation) {
			setImageSlider(dataCurrentAccomodation.pictures);
		}
	}, [id, dataCurrentAccomodation]);
	// Si aucun logement trouvé → page 404
	if (!dataCurrentAccomodation) {
		return <NotFound />;
	}
	// Extraction de certaines données pour affichage plus clair
	const name = dataCurrentAccomodation.host.name.split(' ');
	const rating = dataCurrentAccomodation.rating;
	const description = dataCurrentAccomodation.description;
	const equipments = dataCurrentAccomodation.equipments;

	return (
		<div className='accomodation_wrapper'>
			<Header />
			<Slider imageSlider={imageSlider} /> {/* Carousel avec les photos */}
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation.title}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div>
							{dataCurrentAccomodation.tags.map((tag, index) => 
								<Tag key={index} tag={tag}/>
							)}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation.host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
							<Rating rating={rating} />
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description}/>
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
