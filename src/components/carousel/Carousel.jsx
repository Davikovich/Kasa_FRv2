import './carousel.scss'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState, useEffect } from 'react'

export default function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  // Met à jour isDesktop en temps réel selon la largeur
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
    )
  }

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className='carousel'
    >
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
