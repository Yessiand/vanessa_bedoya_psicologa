

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './style/NavBarComponent.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';



function NavComponent() {
  return (
    <>
      <Navbar className="sticky-nav" sticky="top" bg="light" expand="lg" >
        <Navbar.Collapse className={style.left} id="basic-navbar-nav">
          <img src="imgs/logo.png" height='80px' width='80px' alt="" style={{ marginRight: '-32px' }} />
          <Nav className={style.link}>

            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Inicio</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Sobre mí</Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Servicios</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </>
  );
}
export default NavComponent;