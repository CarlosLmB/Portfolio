import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Button, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel fade>

      <Carousel.Item className='d-flex justify-content-center pb-5'>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card bg='dark' text='white' style={{ width: '25rem' }}>
              <Card.Img variant="top" src="./images/Projects/Password-Generator.gif" style={{height:'17rem'}} />
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <Card.Text>
                  I decided to made a Password generator by leveraging the power of modern web technologies such as React and styled components.
                </Card.Text>
                <a href="https://github.com/CarlosLmB/Password-Generator/tree/master" target="_blank">
                  <Button variant="primary">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card bg='dark' text='white' style={{ width: '25rem' }}>
              <Card.Img variant="top" src="./images/Projects/Landing.gif" style={{height:'17rem'}} />
              <Card.Body>
                <Card.Title>Landing Page 1</Card.Title>
                <Card.Text>
                  Crafted an engaging landing page using HTML, CSS, and JS that captivates visitors with its sleek design and immersive user experience.
                </Card.Text>
                <a href="https://github.com/CarlosLmB/Landing-projects/tree/main/Landing1b" target="_blank">
                  <Button variant="primary">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card bg='dark' text='white' style={{ width: '25rem' }}>
              <Card.Img variant="top" src="./images/Projects/Tetris-js.gif" style={{height:'17rem'}} />
              <Card.Body>
                <Card.Title>Tetris Game</Card.Title>
                <Card.Text>
                  Developed a Tetris game using JavaScript, featuring smooth animations and challenging gameplay that keeps players coming back for more.
                </Card.Text>
                <a href="https://github.com/CarlosLmB/Tetris-game" target="_blank">
                  <Button variant="primary">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      
      <Carousel.Item className='d-flex justify-content-center'>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card bg='dark' text='white' style={{ width: '25rem' }}>
              <Card.Img variant="top" src="./images/Projects/Calculator.png" style={{height:'17rem'}} />
              <Card.Body>
                <Card.Title>Calculator</Card.Title>
                <Card.Text>
                  My first project was a simple calculator developed using HTML, CSS, and JavaScript functions. It User-friendly basic arithmetic operations.
                </Card.Text>
                <a href="https://github.com/CarlosLmB/js-calculator" target="_blank">
                  <Button variant="primary">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card bg='dark' text='white' style={{ width: '25rem' }}>
              <Card.Img variant="top" src="./images/Projects/Survey-form.gif" style={{height:'17rem'}} />
              <Card.Body>
                <Card.Title>Survey Form</Card.Title>
                <Card.Text>
                My survey form, designed with HTML and CSS, facilitates gathering feedback with user-friendly interface.
                </Card.Text>
                <a href="https://github.com/CarlosLmB/Survey-form" target="_blank">
                  <Button variant="primary">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card bg='dark' text='white' style={{ width: '25rem' }}>
              <Card.Img variant="top" src="./images/Projects/City-skyline.gif" style={{height:'17rem'}} />
              <Card.Body>
                <Card.Title>City Skyline</Card.Title>
                <Card.Text>
                  It was fun building this impressive and favorite FreeCodeCamp project, which uses responsive CSS design to change dimensions from day to night.
                </Card.Text>
                <a href="https://github.com/CarlosLmB/City-Skyline" target="_blank">
                  <Button variant="primary">See Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>


    </Carousel>
  );
};

export default Projects;
