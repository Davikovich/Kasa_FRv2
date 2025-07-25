// Import des images d’étoiles grises (vides) et rouges (pleines)
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

// Composant Rating reçoit une prop "rating" (nombre entre 0 et 5)
export default function Rating({ rating }) {

    return (
        <div>
            {
                // Crée un tableau de 5 éléments (0 à 4)
            [...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                
                // Affiche une étoile rouge si ratingValue <= rating, sinon grise
                return (
                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                )
            })}
        </div>
    )
}

