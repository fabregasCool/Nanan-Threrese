import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function FormationResultats() {
  return (
    <div>
      <Container>
        <p className="table_title">
          TABLEAU RECAPITULATIF DE NOS RESULTATS DEPUIS L’OUVERTURE
        </p>
        <Table striped>
          <thead>
            <tr>
              <th>FILIERES ENSEIGNEES</th>
              <th>2019</th>
              <th>2020</th>
              <th>2021</th>
              <th>2022</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-success">
                Ressources Humaines et Communication (RHC)
              </td>
              <td>65,21 %</td>
              <td>51,61 %</td>
              <td>50 %</td>
              <td className="text-danger">65,85 %</td>
            </tr>
            <tr>
              <td className="text-success">Gestion Commerciale (GEC)</td>
              <td>58,33 %</td>
              <td>50 %</td>
              <td>Pas de candidats</td>
              <td className="text-danger">36,36 %</td>
            </tr>
            <tr>
              <td className="text-success">Logistique (LOG)</td>
              <td>88,23 %</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td className="text-danger">25 %</td>
            </tr>
            <tr>
              <td className="text-success">
                Finance Comptabilité et Gest. d’Entreprise (FCGE)
              </td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td className="text-danger">41,37 %</td>
            </tr>
            <tr>
              <td className="text-success">Communication Visuelle (CV)</td>
              <td>Pas de candidats</td>
              <td>40,90 %</td>
              <td>90,19 %</td>
              <td className="text-danger">80,95 %</td>
            </tr>
            <tr>
              <td className="text-success">Tourisme Hôtellerie (TH)</td>
              <td>Pas de candidats</td>
              <td>81,25 %</td>
              <td>77,55 %</td>
              <td className="text-danger">21,73 %</td>
            </tr>
            <tr>
              <td className="text-success">Assistanat de Direction (AD)</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td className="text-danger">31,25 %</td>
            </tr>
            <tr>
              <td className="text-success">Science de l’Information (SIN)</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td>64,28</td>
              <td className="text-danger">67,85 %</td>
            </tr>
            <tr>
              <td className="text-success">
                Informatique Développeur d’Application (IDA)
              </td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
              <td>Pas de candidats</td>
            </tr>
            <tr>
              <td className="">TAUX GENERAL DE REUSSITE</td>
              <td>71,42 %</td>
              <td>54,32 %</td>
              <td>73,37 %</td>
              <td className="text-success">49,18 %</td>
            </tr>
          </tbody>
        </Table>

        <Row className="py-3">
          <Col md={2}>
            <hr />
          </Col>
          <Col md={8} className="">
            <p className="filiere_title centrer_element text-success">
              À l'ISNT, NOUS TRAVAILLONS POUR VOTRE REUSSITE !!!
            </p>
          </Col>
          <Col md={2}>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
