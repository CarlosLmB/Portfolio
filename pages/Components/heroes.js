import { Container, Row, Col} from 'react-bootstrap';


const Heroes = () => {
  return (
    <div id="home" className="bg-scroll px-4 py-5 text-center text-white d-flex align-items-center justify-content-center">
      <Container>
        <Row>
          <Col>
            <img src='./images/Hero/Logo.png' style={{width:'30%'}}/>
            <h1 className="display-5 fw-bold">Welcome to my Portfolio</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Here you can find my latest projects and skills as a web developer.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Heroes;