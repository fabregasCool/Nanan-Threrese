import '../Style/Footer.css';
import {
  Linkedin,
  Facebook,
  Twitter,
  Skype,
  CaretRightFill,
  Instagram,
  ArrowUpSquare,
} from 'react-bootstrap-icons';

// import Agent from '../images/agent1.jpeg';

function Footer() {
  return (
    // J'ai utliser "Grid cards" et puis j'ai modifier, c'est le seul qui donne des marges ext
    <>
      <div className="footer banner-footer">
        <div className="text-footer">
          © 2021 Institut Supérieur Nanan Thérèse. Tous droits reservés. Conçu
          par EXPERT HARD SOFT
        </div>
        <div className="mt-3">
          <Skype color="#fff" size={15} className="ms-3" />
          <Facebook color="#fff" size={15} className="ms-3 " />
          <Twitter color="#fff" size={15} className="ms-3" />
          <CaretRightFill color="#fff" className="ms-3" />
          <Linkedin color="#fff" size={15} className="ms-3" />
          <Instagram color="#fff" size={15} className="ms-3" />
          <a href="#mon_ancre">
            <ArrowUpSquare color="#fff" size={45} className="ms-5" />
          </a>
          {/* Grace à cet ancre l'utilisateur est directement envoyé en haut s'il clique sur l'icone; on a mi cette ancre dans le menu */}
        </div>
      </div>
    </>
  );
}

export default Footer;
