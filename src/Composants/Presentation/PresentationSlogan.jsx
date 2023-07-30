import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Img1 from '../../Images/CarouselEcole3.png';
import Img2 from '../../Images/Presentationimg.jpg';
import { Lightbulb } from 'react-bootstrap-icons';

export default function PresentationSlogan() {
  return (
    <div>
      <Container className="py-5 g-1">
        {' '}
        {/* Premiere Card */}
        <Row className="">
          <Col md={5} className="">
            <Card className="border-0">
              <Card.Body>
                <Card.Title>Notre slogan</Card.Title>
                <div className="card-text">
                  <p>
                    {' '}
                    <span className="gras">
                      L’Institut Supérieur Nanan Thérèse
                    </span>{' '}
                    est une Grande Ecole d’enseignement supérieur privé créée en{' '}
                    <span className="gras">août 2015 </span> par
                    <span className="gras">Monsieur COULIBALY Tidjane.</span>
                  </p>

                  <p>
                    {' '}
                    L’ISNT est agréé par l’Etat de Côte d’Ivoire sous le n°
                    490/MESRS/DGESE/Kkj du 29 décembre 2015.Il est autorisé à
                    former dans neuf (9) filières BTS et bientôt dans des
                    filières post BTS (Licence et Master). L’ISNT a pour
                    ambition d’offrir, sur le territoire ivoirien, les
                    meilleures opportunités de formations aux jeunes ivoiriens
                    et africains ; dans des conditions de sécurité et de
                    confort, à l’image des Grandes Ecoles occidentales.
                  </p>
                  <p>
                    {' '}
                    L’ISNT, souhaite à son humble niveau apporter sa
                    contribution à l’édification de la Côte d’Ivoire émergente.
                    L’ISNT a commencé ses premiers cours en septembre 2016 à
                    Cocody-Angré.
                  </p>

                  <p>
                    Les formations données concernaient exclusivement les
                    étudiants en premières année de Brevet de Technicien
                    Supérieur (BTS) dans trois (3) filières :
                  </p>
                  <ul>
                    <li>
                      Finance Comptabilité et Gestion des Entreprises (FCGE) ;
                    </li>
                    <li>Ressources Humaines et Communication (RHC) ;</li>
                    <li>Informatique Développeur d’Application (IDA).</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={7} className=" ">
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={Img1}
                alt="Image"
                className="img-min"
              />
            </Card>
          </Col>
        </Row>
        {/* Deuxième Card */}
        <Row className="">
          <Col md={6} className=" ">
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={Img2}
                alt="Image"
                className="img-min"
              />
            </Card>
          </Col>
          <Col md={6} className="">
            <Card className="border-0">
              <Card.Body>
                <div className="card-text">
                  <p>
                    Au terme de l’année académique 2016 – 2017,
                    <span className="gras">98 %</span> des étudiants ont été
                    déclarés admis en classe supérieure. En Octobre 2017, l’ISNT
                    est délocalisé au Plateau dans un local plus spacieux et
                    plus adapté afin de permettre aux étudiants d’être dans les
                    meilleures conditions d’études.
                  </p>

                  <p>
                    Pour l’année académique 2017-2018, L’Institut Supérieur
                    Nanan Thérèse a fonctionné avec les filières de formation
                    <span className="gras">
                      Finance Comptabilité et Gestion des Entreprises (FCGE),
                      Ressources Humaines et Communication (RHC), Informatique
                      Développeur d’Application (IDA), Logistique (LOG).
                    </span>
                  </p>
                  <p>
                    Aujourd’hui, l’ISNT a l’agrément pour former dans
                    <span className="gras">neuf (9) </span>filières BTS dont{' '}
                    <span className="gras">
                      Assistanat de Direction (AD) – Communication Visuelle (CV)
                      – Finance Comptabilité et Gestion des Entreprises (FCGE) –
                      Gestion Commerciale (GEC) – Informatique Développeur
                      d’Application (IDA) – Logistique (LOG) – Ressources
                      Humaines et Communication (RHC) – Sciences de
                      l’Information (SI) – Tourisme Hôtellerie (TH).
                    </span>
                  </p>
                  <p>
                    L’Institut a pour ambition d’ouvrir bientôt les filières
                    post-BTS afin de répondre aux attentes des parents et des
                    étudiants.
                  </p>
                  <p>
                    La Direction des Etudes est assurée par{' '}
                    <span className="gras">Monsieur DOUKOURE Issoumaila.</span>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Tete */}
        <div className="texte">
          À l'ISNT, NOUS TRAVAILLONS POUR VOTRE REUSSITE !
        </div>
        {/* Partie de l'ampoule */}
        <p className="py-2 centrer-element">
          <button className="btn-ampoule">
            <Lightbulb color="#3be" size={50} className=" mx-2" />
          </button>
        </p>
        <p className=" centrer-element texte">NOS ATOUTS</p>
        <p className="centrer-element">
          {' '}
          <button className="btn-trait"></button>
        </p>
      </Container>
    </div>
  );
}
