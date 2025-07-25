# 🏠 Kasa - Application de location immobilière en React

Projet réalisé dans le cadre du parcours Développeur Front-End OpenClassrooms.  
Cette application présente les logements de la plateforme Kasa avec une navigation fluide, des composants modulaires, des animations CSS, et une interface responsive.

---

## 🚀 Lancer le projet en local

### Prérequis

- Node.js >= 18.x recommandé
- Un terminal (VS Code, Bash, etc.)

### Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/Davikovich/Kasa_FRv2.git
cd Kasa_FRv2
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. L'application sera accessible à l'adresse :  
`http://localhost:5173`

---

## 📁 Structure du projet

```
src/
├── components/       # Composants réutilisables (Carousel, Rating, etc.)
├── pages/            # Pages principales (Home, About, Accomodation, NotFound)
├── data/             # Données JSON locales
├── sass/           # Fichiers SCSS
└── App.jsx           # Point d’entrée de l’application
```

---

## 🔧 Technologies utilisées

- ⚛️ React 18 avec Vite
- 🎨 Sass (SCSS)
- 🧭 React Router DOM
- 🧩 Composants modulaires
- 💫 Animations CSS
- ✅ Accessibilité (alt, aria, etc.)

---

## 📚 Fonctionnalités principales

- Navigation entre les pages : Accueil, À propos, Détail du logement
- Affichage dynamique avec `useParams` et filtrage des données
- Slider d'images avec navigation circulaire
- Composants Collapse animés
- Notation visuelle avec étoiles
- Gestion des erreurs (page 404)

---

## 👨‍💻 Auteur

David Mendes  
[Portfolio / LinkedIn si souhaité]

---

