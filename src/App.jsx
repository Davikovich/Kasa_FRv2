// Importe toutes les pages principales
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';

// Importe les outils de routing de React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Déclaration de toutes les routes de l'application
const router = createBrowserRouter([
	{
		path: "/Kasa",					 // Route d'accueil
		element: <Home />
	},
	{
		path: "/accomodation/:id",		// Page dynamique de logement
		element: <Accomodation />
	},
	{
		path: '/about',					// Page À propos
		element: <About />
	},
	{
		path: "*",						// Toute autre route = Error404
		element: <NotFound />
	},
]);

// Composant principal qui injecte le router
function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;