//styles
import './collapse.scss'
//fléches collapse
import arrow from '../../assets/arrow.png';
// Hook d’état local fourni par React
import { useState } from 'react';

// Composant Collapse reçoit deux props : un titre, et un contenu
export default function Collapse({title, content}) {

    // État local pour savoir si le bloc est ouvert (true) ou fermé (false)
    const [toggle, setToggle] = useState(false);

    // Rendu du composant
    return (
        <>
            <div className="collapse" >
                {/* Titre cliquable : inverse l’état toggle à chaque clic */}
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                     {/* Flèche tournée vers le haut si toggle=true, vers le bas sinon */}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>

                {/* Contenu affiché ou masqué selon toggle */}
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
    
                    {// Si le contenu est un tableau, on l'affiche ligne par ligne
                    Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) 
                     // Sinon on affiche directement le contenu
                    : content
                    }
                </div> 
            </div>
        </>
    )
}