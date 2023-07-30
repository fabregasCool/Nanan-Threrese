import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Img from '../Images/fiche_renseig.jpg';

export default function FicheRenseignement() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={Img}
                alt="Image"
                className="img-min"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
