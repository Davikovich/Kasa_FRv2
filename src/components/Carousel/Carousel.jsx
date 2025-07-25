//styles
import './carousel.scss'

//fléches droite et gauche
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'

// Import des hooks React
import { useState, useEffect } from 'react'

// Déclaration du composant Carousel avec la prop "imageSlider" (tableau d’images)
export default function Carousel({ imageSlider }) {
  // État pour suivre l’index de l’image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0)
  // État pour savoir si l'écran est desktop (utile pour afficher le compteur)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  // Met à jour isDesktop en temps réel selon la largeur
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)
     // Nettoyage de l’événement quand le composant est démonté
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Fonction pour passer à l’image suivante (circulaire)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
    )
  }
// Fonction pour passer à l’image précédente (circulaire)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
    )
  }

  // Rendu du composant
  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className='carousel'
    >
       {/* Affiche les flèches et compteur uniquement s’il y a plusieurs images */}
      {imageSlider.length > 1 && (
        <>
          <img
            className='carousel_arrow carousel_arrow_right'
            src={ArrowRight}
            alt='Image suivante'
            onClick={nextSlide}
          />
          <img
            className='carousel_arrow carousel_arrow_left'
            src={ArrowLeft}
            alt='Image précédente'
            onClick={prevSlide}
          />
          {/* Affiche le compteur "1 / 5" seulement sur desktop */}
          {isDesktop && (
            <p className='slideCount'>
              {currentIndex + 1} / {imageSlider.length}
            </p>
          )}
        </>
      )}
    </section>
  )
}
