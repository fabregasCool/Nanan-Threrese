import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Img1 from '../../Images/CarouselEcole1.jpg';
import Img2 from '../../Images/CarouselEcole2.jpg';
import Img3 from '../../Images/CarouselEcole3.png';
import Img4 from '../../Images/CarouselEcole4.jpg';

function AccueilCarouselEcole() {
  return (
    <Carousel>
      <Carousel.Item>
        <Card.Img
          variant="top"
          src={Img1}
          alt="Image"
          className="carousel-img"
        />
        <Carousel.Caption className="carousel-caption">
          <Button variant="warning" className="btn-lg ">
            Institut Supérieur Nanan Thereze
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Card.Img
          variant="top"
          src={Img2}
          alt="Image"
          className="carousel-img"
        />

        <Carousel.Caption>
          <Button variant="warning" className="btn-lg">
            Institut Supérieur Nanan Thereze
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Card.Img
          variant="top"
          src={Img3}
          alt="Image"
          className="carousel-img"
        />

        <Carousel.Caption>
          <Button variant="warning" className="btn-lg">
            Institut Supérieur Nanan Thereze
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Card.Img
          variant="top"
          src={Img4}
          alt="Image"
          className="carousel-img"
        />

        <Carousel.Caption>
          <Button variant="warning" className="btn-lg">
            Institut Supérieur Nanan Thereze
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AccueilCarouselEcole;
