import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ImgAD from '../../Images/Formation/imgformationAD.jpg';
import ImgFCGE from '../../Images/Formation/imgformationFCGE.jpg';
import ImgIDA from '../../Images/Formation/imgformationIDA.jpg';
import ImgTH from '../../Images/Formation/imgformationTH.jpg';
import ImgCV from '../../Images/Formation/imgformationCV.jpg';
import ImgSI from '../../Images/Formation/imgformationSI.jpg';
import ImgRHC from '../../Images/Formation/imgformationRHC.jpg';
import ImgGEC from '../../Images/Formation/imgformationGEC.jpg';
import ImgLOG from '../../Images/Formation/imgformationLOG.jpg';

export default function FormationNosFilieres() {
  return (
    <div>
      <Container>
        {/* FILIERE AD */}
        <Row>
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE AD</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={4} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgAD} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous le recours précieux du patron dans
                    l’organisation et la gestion de l’entreprise, notre
                    formation en Assistanat de Direction (AD) est taillée sur
                    mesure .
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Assistant de Direction – Assistant RH – Secrétaire
                  de Direction.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE FCGE */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE AD</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={4} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgFCGE} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous un technicien rompu à la gestion et à la
                    comptabilité, choississez Finance Comptabilité et Gestion
                    d’Entreprises (FCGE).
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Assistant Comptable – Assistant Controleur de
                  Gestion – Chef de service approvisionnement – Assistant de
                  Gestion des PME/PMI – Administrateur des Ventes – Assistant
                  Directeur financier- Chef Comptable – Collaborateur dans les
                  cabinets d’expertise comptable.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE IDA */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE IDA</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={4} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgIDA} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous un créateur de solutions numériques optez
                    pour Informatique Développeur d’Applications (IDA).
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Analyste programmeur – Développeur – Webmaster –
                  Webdesigner – Expert en référencement – Traffic Manager –
                  Spécialiste du cloud computing – Informaticien – Chef de
                  projet web technique – etc..
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE TH */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE TH</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={4} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgTH} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous un acteur clé d’une industrie touristique
                    performante, nous vous conseillons le Tourisme Hôtellerie
                    (TH).
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Chef de produit touristique – Conseiller voyages –
                  Data analyst – Receptionniste d’hôtel – Guide conférencier –
                  Guide touristique – Animateur – Steward/hôtesse de l’air –
                  Yield/revenue manager.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE CV */}
        <Row>
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE CV</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={4} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgCV} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous le spécialiste de la conception graphique
                    et de la communication publicitaire, ne cherchez plus !
                    Orientez-vous vers la Communication Visuelle (CV) .
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Chargé de communication – Infographiste de presse
                  – Chef de projet multimédia – Concepteur multimédia – Data
                  visualist – Designer graphique – Digital designer – Technicien
                  PAO – Créateur d’Identité visuelle – Graphiste illustrateur.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE SI */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE SI</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={3} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgSI} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={9} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous l’organisateur principal de la mémoire
                    documentaire (physique et numérique) de l’entreprise, optez
                    pour les Sciences de l’Information (SI).
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Documentaliste – Archiviste – Technicien de
                  communication -Gestionnaire de centre de documentation –
                  Bibliothécaire – Médiathécaire – -Cyberthécaire – etc….
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE RHC */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE RHC</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={3} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgRHC} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={9} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous un gestionnaire des ressources humaines
                    qui sait allier intérêt de l’entreprise et bien être du
                    personnel,nous vous recommandons les Ressources Humaines et
                    Communication (RHC).
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Assistant RH – Gestionnaire de paie – Responsable
                  de formation – Chargé de recrutement – Directeur des
                  ressources humaines, etc…
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE GEC */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE GEC</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={3} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgGEC} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={9} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous un commercial au flair aiguisé et très
                    bon vendeur, inscrivez-vous en Gestion Commerciale (GEC) .
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Agent commercial – Chargé d’affaires – Directeur
                  commercial – Responsable de vente – Ingénieur commercial, etc…
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FILIERE LOG */}
        <Row className="py-3">
          <Col md={5}>
            <hr />
          </Col>
          <Col md={2} className="">
            <p className="filiere_title centrer_element">FILIERE LOG</p>
          </Col>
          <Col md={5}>
            <hr />
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={3} className="">
            <Card className="">
              <Card.Img variant="top" src={ImgLOG} alt="Image" className="" />
            </Card>
          </Col>

          <Col md={9} className="">
            <Card className="border-0">
              <Card.Body>
                <p className="fs-4 text_bg_vert">
                  <mark>
                    {' '}
                    Pour faire de vous un technicien rompu aux techniques de
                    stockage, du déplacement et de l’acheminement des matières
                    et des produits, nous vous proposons la Logistique (LOG)
                    avec des taux de réussite de 85 % en 2018 et 88,23 % en
                    2019.
                  </mark>
                </p>
                <p className="text_debouche">
                  Débouchés : Affréteur – Agent de routage – Agent de transit –
                  Agent logisticien – Emballeur professionnel – Magasinier ou
                  agent de distribution – Responsable d’entrepôt – Responsable
                  d’exploitatation – Etc…..
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

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
