import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Menu from './Composants/Menu';
import Footer from './Composants/Footer';

// import './App.css';
import Accueil from './Pages/Accueil';
import Presentation from './Pages/Presentation';
import Formation from './Pages/Formation';
import FicheRenseignement from './Pages/FicheRenseignement';
import SituationGeographique from './Pages/SituationGeographique';
import Home from './Pages/Home';

//Fonction Layout
const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/Accueil',
        element: <Accueil />,
      },
      {
        path: '/presentation',
        element: <Presentation />,
      },
      {
        path: '/formation',
        element: <Formation />,
      },
      {
        path: '/fiche_renseignement',
        element: <FicheRenseignement />,
      },
      {
        path: '/situation_geo',
        element: <SituationGeographique />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="">
      <div className="">
        {/* <div className="container">: On peut mettre la classe "container afin de centrer toutes nos pages" */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
