import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset <= 900) {
        setNavbarBg('bg-transparent');
      } else {
        setNavbarBg('bg-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className={`justify-content-between align-items-center ${navbarBg}`} style={{ position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
      <Container >
        <Navbar.Brand href="#home" className="mr-auto">
          <img
            src="./images/Nav/Logonav.png"
            style={{ width:'100%', height: '1.5em' }}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='text-center'>
          <Nav className="ms-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#stack">Stack</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
};

export default NavBar;