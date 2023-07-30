import '../Style/Accueil.css';

import React from 'react';
import AccueilCarouselEcole from '../Composants/Accueil/AccueilCarouselEcole';
import Container from 'react-bootstrap/Container';
import AccueilCourouselEtudiant from '../Composants/Accueil/AccueilCourouselEtudiant';
import AccueilEtudiantsTele from '../Composants/Accueil/AccueilEtudiantsTele';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { HouseDoorFill } from 'react-bootstrap-icons';

export default function Accueil() {
  return (
    <div>
      <div className="text-au-dessus-banniere">
        <div>Accueil</div>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">
              <HouseDoorFill color="#000" size={20} className=" mx-2" />
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Accueil</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <AccueilCarouselEcole />
      <Container className="my-5">
        <h4>Visite à KORHOGO de la filière TOURISME HOTELLERIE</h4>
        <hr />

        <div className="modif-text">
          La filière Tourisme Hôtellerie a effectué une visite dans le Poro .
          Cette visite touristique a démarré par les bénédictions de la
          Chefferie de Korhogo. Par la suite, a eu lieu uns visite de la
          Préfecture de Korhogo et des sites touristiques dont le fief des
          beurres de Karité de Petit-Paris. Enfin, une sortie sur waraniéné pour
          mettre aux étudiants de s’imprégner des valeurs culturelles de cette
          région. Pour rappel, Waraniéné est un village du nord de la Côte
          d’Ivoire, proche de la ville de Korhogo et qui est particulièrement
          réputé pour la qualité de ses tisserands. On y produit en particulier
          la toile qui servira aux peintres de Fakaha, village proche.
        </div>
      </Container>

      <AccueilCourouselEtudiant />
      <AccueilEtudiantsTele />
    </div>
  );
}
