import { Container, Row, Col} from 'react-bootstrap';


const Heroes = () => {
  return (
    <div id="home" className="bg-scroll px-4 py-5 text-center text-white d-flex align-items-center justify-content-center">
      <Container>
        <Row>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="./images/Hero/Logo.png" style={{ maxWidth: '80%', maxHeight: '70%' }} />
            </div>
            <h1 className="display-5 fw-bold">Welcome to my Portfolio</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Here you can see my skills and find my latest projects as a web developer.</p>
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