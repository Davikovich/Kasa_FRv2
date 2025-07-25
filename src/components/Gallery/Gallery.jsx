// Import du fichier de style Sass spécifique à la galerie
import './gallery.scss'
// Import des données JSON locales (liste de logements)
import datas from '../../data/logements.json'
// Import du composant réutilisable Card
import Card from '../Card/Card'

// Déclaration du composant Gallery (pas de props, données locales)
export default function Gallery() {

    return (
        // Section principale contenant toutes les cartes de logement
        <main className='home_gallery'>
            {// On parcourt tous les logements du fichier JSON
            datas.map(data => {
                return (
                    // Pour chaque logement, on génère une Card
                    <Card
                        key={data.id} // clé unique pour React
                        id={data.id} // ID → lien vers la page logement
                        title={data.title} // Titre → affiché dans la carte
                        cover={data.cover} // Image → affichée dans la carte
                    />
                )
            })}
        </main>
    )
}