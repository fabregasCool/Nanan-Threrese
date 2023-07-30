import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Img from '../../Images/CarouselEcole2.jpg';

export default function AccueilEtudiantsTele() {
  return (
    <div className="mt-5">
      <Container>
        <h4>Les étudiants de Groupe NANAN THERESE à l’émission TELE D’ICI</h4>
        <hr />
        <Row xs={1} md={2} className="g-5 ">
          <Col>
            <Card bg="white" className=" border-0">
              <Card.Body>
                <Card.Img variant="top" src={Img} alt="Image" className="" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div className="embed-responsive embed-responsive-16by9 ">
              <iframe
                controls
                title="Embeds Page"
                className="embed-responsive-item videomodif"
                src="https://www.youtube.com/embed/ImtBDHRmxT8"
                // https://www.youtube.com/watch?v=ImtBDHRmxT8
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />
    </div>
  );
}
