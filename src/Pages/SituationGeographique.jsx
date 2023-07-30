import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Img from '../Images/situation_geo.jpg';

export default function SituationGeographique() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card className="border-0">
              <Card.Img variant="top" src={Img} alt="Image" className="" />
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
