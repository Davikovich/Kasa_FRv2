// Composant Tag reçoit une prop "tag" à afficher
export default function Tag({tag}) {

  return (
    // Le tag est affiché dans un bouton stylisé
    <button>
        {tag}
    </button>
  )
}