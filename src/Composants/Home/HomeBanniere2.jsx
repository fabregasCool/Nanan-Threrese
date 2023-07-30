import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Img1 from '../../Images/homeimg1.jpg';
import Img2 from '../../Images/homeimg2.jpg';
import Img3 from '../../Images/homeimg3.jpg';
import {
  ArrowRightSquareFill,
  Check2Circle,
  PersonBoundingBox,
} from 'react-bootstrap-icons';

export default function HomeBanniere2() {
  return (
    <div>
      <Container className="">
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            {' '}
            <div className="banner2-home my-5 ">
              <Row className="pt-3">
                <Col md={2}></Col>
                <Col md={8}>
                  {' '}
                  <Card.Img
                    variant="top"
                    src={Img1}
                    alt="Image"
                    className="my-4"
                  />
                </Col>
                <Col md={2}></Col>
              </Row>

              <p className="text_banner2 me-3">
                <dt>
                  <li className="ms-5">
                    Communication Visuelle (CV) :34 admis sur 42 soit 80,95%
                  </li>
                  <li className="ms-5">
                    Science de l'information (SIN) :19 admis sur 28 soit 67,85%
                  </li>
                  <li className="ms-5">
                    Ressources Humaines et Communication (RHC) :54 admis sur 82
                    soit 65,85%
                  </li>
                  <li className="ms-5">
                    Finances Comptabilité et Gestion d'entreprise(FCGE) :12
                    admis sur 29 soit 41,37%
                  </li>
                  <li className="ms-5">
                    Gestion Commerciale(GEC) :4 admis sur 11 soit 36,36%
                  </li>
                  <li className="ms-5">
                    Assistanat de Direction (AD) :5 admis sur 16 soit 31,25%
                  </li>
                  <li className="ms-5">
                    Logistique (LOG) :07 admis sur 28 soit 25%
                  </li>
                  <li className="ms-5">
                    Tourisme Hotellerie(CV) :15 admis sur 69 soit 21,73%
                  </li>
                </dt>
              </p>

              <Row className="pt-3">
                <Col md={2}></Col>
                <Col md={8}>
                  {' '}
                  <Card.Img variant="top" src={Img2} alt="Image" className="" />
                </Col>
                <Col md={2}></Col>
              </Row>

              <Row>
                {' '}
                <Col md={6}>
                  <p className="ms-3 fs-4 cursive fw-bold text-danger py-3">
                    <Check2Circle color="#10f" size={32} className="  me-2 " />
                    Filières Industrielles:
                  </p>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <ArrowRightSquareFill
                      color="#000"
                      size={32}
                      className="  me-2"
                    />
                    Taux de réussite ISNT:80,95%
                  </p>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <ArrowRightSquareFill
                      color="#000"
                      size={32}
                      className="  me-2"
                    />
                    Taux de réussite National:57,87%
                  </p>
                </Col>
                <Col md={6}>
                  <p className="ms-3 fs-4 cursive fw-bold text-danger py-3">
                    <Check2Circle color="#10f" size={32} className="  me-2 " />
                    Filières Tertiares
                  </p>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <ArrowRightSquareFill
                      color="#000"
                      size={32}
                      className=" me-2"
                    />
                    Taux de réussite ISNT:46,77%
                  </p>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <ArrowRightSquareFill
                      color="#000"
                      size={32}
                      className=" me-2"
                    />
                    Taux de réussite National:40,83%
                  </p>
                </Col>
              </Row>

              <p className="centrer_element ms-3 fs-4 cursive fw-bold text-danger ">
                {' '}
                <Check2Circle color="#10f" size={32} className=" me-2 " />
                Notez Bien, Pour cette session 2022
              </p>
              {/*  */}
              <Row>
                {' '}
                <Col md={6}>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <PersonBoundingBox
                      color="#000"
                      size={32}
                      className=" my-2 me-2"
                    />
                    Nombre de Candidats:305
                  </p>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <ArrowRightSquareFill
                      color="#000"
                      size={32}
                      className=" me-2"
                    />
                    Taux de réussite Gblobal ISNT:49,18%
                  </p>
                </Col>
                <Col md={6}>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <PersonBoundingBox
                      color="#000"
                      size={32}
                      className=" me-2"
                    />
                    Nombre Admissibles:150
                  </p>
                  <p className="ms-5 fs-5 cursive fw-bold">
                    {' '}
                    <ArrowRightSquareFill
                      color="#000"
                      size={32}
                      className=" me-2"
                    />
                    Taux de réussite Gblobal NATIONAL:46,05%
                  </p>
                </Col>
              </Row>

              <Row className="pt-3">
                <Col md={2}></Col>
                <Col md={8}>
                  {' '}
                  <Card.Img variant="top" src={Img3} alt="Image" className="" />
                </Col>
                <Col md={2}></Col>
              </Row>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
}
