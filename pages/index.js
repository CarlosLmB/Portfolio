import React from 'react';
import Heroes from './Components/heroes';
import Projects from './Components/Projects';
import About from './Components/About';
import MyStack from './Components/stack';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio() {
  return (
    <div>
      <Heroes/>

      <Container
        id="projects"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      >
        <h1 className="text-center text-white pt-5" style={{ fontWeight: 'bold' }}>
          Projects
        </h1>
        <Row>
          <Col className="text-center text-white pb-5">
            In this section, you can view the projects I have completed using various technologies.
            Some of them have been developed from scratch, while others have been inspired by other projects.
            In any case, I hope you like them.
          </Col>
        </Row>
        <Projects />
      </Container>

      <Container
        id="about"
        style={{
          paddingTop: '80px',
          paddingBottom: '30px',
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      >
        <About />
      </Container>

      <Container
        id="stack"
        style={{
          paddingTop: '150px',
          paddingBottom: '50px',
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      >
        <MyStack />
      </Container>

      <Container
        id="skills"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      >
        <Skills />
      </Container>

      <Contact />
    </div>
  );
}