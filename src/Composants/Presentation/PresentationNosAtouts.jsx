import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function PresentationNosAtouts() {
  return (
    <div>
      <Container>
        <p className="atout_title">ACCESSIBILITE</p>
        <hr />
        <p className="atout_desc mb-5">
          Situé en plein cœur du plateau, tous les moyens de transport en commun
          passent soit devant l’Institut, soit à moins 200 mètres.
        </p>

        <p className="atout_title">INFRASTRUCTURES ET ÉQUIPEMENTS DE QUALITÉ</p>
        <hr />
        <p className="atout_desc mb-5">
          Salles de cours spacieuses et bien aérées – Salles multimédias
          équipées d’ordinateurs de dernière génération – Restaurant.
        </p>

        <p className="atout_title">ASPECTS PEDAGOGIQUES</p>
        <hr />
        <p className="atout_desc mb-5">
          Enseignants expérimentés et qualifiés – Diversité des offres de
          formation.
        </p>

        <p className="atout_title">OPPORTUNITÉS POUR LES ÉTUDIANTS</p>
        <hr />
        <p className="atout_desc mb-5">
          Accompagnement pour la recherche de stages – Accompagnement pour
          l’insertion professionnelle.
        </p>
      </Container>

      <Container className="py-5">
        <Row className="mb-5">
          <Col md={3} className="centrer-element">
            <div className="zero">00</div>
            <div className="text-zero">days</div>
          </Col>
          <Col md={3} className="centrer-element">
            <div className="zero">00</div>
            <div className="text-zero">hours</div>
          </Col>
          <Col md={3} className="centrer-element">
            <div className="zero">00</div>
            <div className="text-zero">minutes</div>
          </Col>
          <Col md={3} className="centrer-element">
            <div className="zero">00</div>
            <div className="text-zero">seconds</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
