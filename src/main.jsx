// Importe React et ReactDOM pour initialiser l'application
import React from 'react';
import ReactDOM from 'react-dom/client';
// Importe le composant principal de l'application
import App from './App';

// Crée une racine React dans la div avec l'id "root" (voir index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rend l'application React à l'intérieur de <React.StrictMode> (aide au debug en dev)
root.render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
);