import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomeBanniere1() {
  return (
    <div>
      <Container className="">
        <Row>
          <Col md={1}></Col>
          <Col md={10} className="">
            {' '}
            <div className="banner1-home my-5 ">
              <p className="btn_rentree">Rentrée Academique 2022-2023</p>
              <p className="text">
                Les inscriptions sont ouvertes depuis le 1er Aout 2022 et se
                Poursuivent tous les jours ouvrables de 8 heures à 17 heures.
              </p>
              <p className="text">
                Les retraits de bulletins de fin d'année se font également du
                lundi au vendredi de 8 heures à 17 heures.
                <p className="btn_rentree"> Debut des Cours</p>
                <p className="btn_rentree">
                  <button>Lundi 03 Octobre 2022</button>
                </p>
                <p className="centrer_element">
                  {' '}
                  <button className="btn_resultat">
                    Resultats ISNT Bts 2022
                  </button>
                </p>
              </p>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
}
