import { Row, Col, Button } from 'react-bootstrap';

const About = () => {
    return (
      <Row className="mb-3 mx-20 justify-content-center align-items-center text-white" >
      <Col sm={12} lg={8} className="themed-grid-col d-flex flex-column align-items-center">
        <h1 className='text-center' style={{ fontWeight: 'bold'}}>About</h1>
        <p className='text-center' style={{ fontWeight: 'bold'}}>
          Hi, My name is Carlos and I'm currently pursuing Systems Engineering as a student.
        </p>
        <p className="m-3 text-center">
          Technology has always been an area that has piqued my interest and instilled a sense of passion in me. My main objective is to enhance my skill set and pursue a career as a developer, with the ultimate goal of becoming an outstanding professional in my field and specializing in AI or Cybersecurity. However, I am aware that Web development is merely the starting point of my journey.
          <br></br>
          <br></br>
          I have developed skills in HTML, CSS, JavaScript and Python, and I am familiar with various frameworks and libraries. I am passionate about web development and eager to learn and grow. I am confident that I can create a website that meets your needs, regardless of size or budget.
          <br></br>
          <br></br>
          Besides technology, I enjoy trying new things and stepping out of my comfort zone. I like doing martial arts like calisthenics, krav maga, and boxing. In my free time, I read and watch movies to learn about different cultures. I think it's important to balance physical and mental activities for a healthy lifestyle. I always try to do new things and spend time with people I care about.
          <br></br>
          <br></br> 
          Please contact me if you are interested in working with me.
        </p>
        <Button variant="outline-dark" size="lg" className="px-4" href="/cv/Resume.pdf" download>
          Download CV
        </Button>
      </Col>
      <Col sm={6} lg={4} className="themed-grid-col d-flex justify-content-center">
        <img src="../images/About/Mypicture.png" style={{width: '70%'}} alt="My Picture" />
      </Col>
    </Row>
    )
};

export default About;