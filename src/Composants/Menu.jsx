import '../Style/Menu.css';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';

// import Form from 'react-bootstrap/Form';

import Dropdown from 'react-bootstrap/Dropdown';

import {
  Linkedin,
  TelephoneFill,
  Twitter,
  Facebook,
  Skype,
  CaretRightFill,
  Instagram,
  EnvelopeAtFill,
} from 'react-bootstrap-icons';

import Logo from '../Images/logoISNT.jpg';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <Container className="bg-dark" id="mon_ancre">
        <Row className="justify-content-xs-center">
          <Col md="auto" className=" text-white col-text my-1">
            À l'ISNT, NOUS TRAVAILLONS POUR VOTRE
          </Col>
          <Col md="auto" className="text-primary col-text">
            <TelephoneFill color="#fff" size={12} className=" my-2 " /> +225 07
            69 16 16 69
          </Col>
          <Col md="auto" className="text-primary col-text">
            <TelephoneFill color="#fff" size={12} className=" my-2 " /> +225 27
            20 24 31 51
          </Col>
          <Col md="auto" className="text-primary col-text">
            <EnvelopeAtFill color="#fff" size={12} className=" my-2 " /> +225
            infos@isnt-ci.com/
          </Col>
          <Col md="auto" className="text-primary col-text my-1">
            institutsuperieurnananthereze@gmail.com
          </Col>
          <Col md="auto" className=" col-text">
            <Skype color="#fff" size={13} className="me-2 my-2 " />
            <Link to="https://web.facebook.com/isntofficiel/?ref=page_internal&_rdc=1&_rdr">
              <Facebook color="#fff" size={13} className="me-2 my-2 " />
            </Link>
            <Twitter color="#fff" size={13} className="me-2  " />
            <CaretRightFill color="#fff" size={13} className="me-1  " />
            <Link to="https://www.linkedin.com/in/michelle-latifa-effoue-3449b9207/?originalSubdomain=ci">
              <Linkedin color="#fff" size={13} className="me-2  " />
            </Link>
            <Instagram color="#fff" size={13} className="me-1  " />
          </Col>
        </Row>
      </Container>

      {/* Navbar ou le menu */}

      <Navbar bg="white" expand="lg" className="mt-1" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">
            <Card.Img variant="top" src={Logo} alt="Image" className="" />
          </Navbar.Brand>
          <Navbar.Toggle variant="success" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 text-black"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home" className="nav text-black mt-1">
                ISNT
              </Nav.Link>

              <Nav.Link href="/Accueil" className="nav text-black mt-1">
                Accueil
              </Nav.Link>
              <Nav.Link href="/presentation" className="nav text-black mt-1">
                Présentation
              </Nav.Link>
              <Nav.Link href="/formation" className="nav text-black mt-1">
                Formation
              </Nav.Link>

              <Dropdown className="nav mx-1">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Espace Etudiants
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="https://www.letudiant.fr/etudes.html">
                    Guide de l'étudiant
                  </Dropdown.Item>
                  <Dropdown.Item href="/fiche_renseignement">
                    Fiche de Renseignements
                  </Dropdown.Item>
                  <Dropdown.Item href="https://bac.mesrs-ci.net/">
                    Préinscription Bachelier
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.bnf.fr/fr">
                    Bibliothèque Virtuelle
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.wepa.fr/">
                    E-learning ISNT
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link
                href="https://www.enseignement.gouv.ci/"
                className="nav text-black mt-1"
              >
                Actualités
              </Nav.Link>

              <Dropdown className="nav mx-1">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Contactez-nous
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="https://www.google.ci/maps/place/INSTITUT+SUPERIEUR+NANAN+THERESE/@5.3294351,-4.0244072,18.56z/data=!4m12!1m6!3m5!1s0xfc194a770d7c587:0x566135c1d3ea9152!2sInstitut+Sup%C3%A9rieur+Nanan+Th%C3%A9r%C3%A8se!8m2!3d5.3944806!4d-3.9885942!3m4!1s0x0:0x346f5771d6349f56!8m2!3d5.3292813!4d-4.0240961">
                    Géolocalisation
                  </Dropdown.Item>
                  <Dropdown.Item href="/situation_geo">
                    Situation Géographique
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Webmail ISNT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* <NavDropdown
                title="Link"
                id="navbarScrollingDropdown"
                className="nav text-danger"
              >
                <NavDropdown.Item href="#action5" className="text-primary">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>

          {/*  */}
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
