import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Img1 from '../../Images/Carouseletudiant1.jpg';
import Img2 from '../../Images/Carouseletudiant2.jpg';
import Img3 from '../../Images/Carouseletudiant3.jpg';
import Img4 from '../../Images/Carouseletudiant4.jpg';

function AccueilCourouselEtudiant() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Card.Img
            variant="top"
            src={Img1}
            alt="Image"
            className="carousel-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img
            variant="top"
            src={Img2}
            alt="Image"
            className="carousel-img"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Card.Img
            variant="top"
            src={Img3}
            alt="Image"
            className="carousel-img"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Card.Img
            variant="top"
            src={Img4}
            alt="Image"
            className="carousel-img"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default AccueilCourouselEtudiant;
