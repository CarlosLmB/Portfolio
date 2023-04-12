import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const sectionTop = skillsRef.current.offsetTop;
    const handleScroll = () => {
      if (window.pageYOffset > sectionTop - window.innerHeight / 2 && !isAnimated) {
        setIsAnimated(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  return (
    <Container className="skills-section text-white" ref={skillsRef}>
      <h1 className='text-right position-relative pt-5' style={{ fontWeight: 'bold'}}> My Skills</h1>
      <Row>
        <Col xs={12} md={6}>
          <h3>Technical Skills</h3>
          <ul>
            <li>React</li>
            <ProgressBar now={isAnimated ? 80 : 0} label="80%" />
            <li>JavaScript</li>
            <ProgressBar now={isAnimated ? 70 : 0} label="70%" />
            <li>HTML/CSS</li>
            <ProgressBar now={isAnimated ? 90 : 0} label="90%" />
            <li>Node.js</li>
            <ProgressBar now={isAnimated ? 50 : 0} label="50%" />
            <li>MongoDB</li>
            <ProgressBar now={isAnimated ? 50 : 0} label="50%" />
            <li>SQL</li>
            <ProgressBar now={isAnimated ? 80 : 0} label="80%" />
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <ProgressBar now={isAnimated ? 100 : 0} label="100%" />
            <li>Communication</li>
            <ProgressBar now={isAnimated ? 100 : 0} label="100%" />
            <li>Creativity</li>
            <ProgressBar now={isAnimated ? 85 : 0} label="85%" />
            <li>Problem Solving</li>
            <ProgressBar now={isAnimated ? 95 : 0} label="95%" />
            <li>Time Management</li>
            <ProgressBar now={isAnimated ? 90 : 0} label="90%" />
            <li>Proactive</li>
            <ProgressBar now={isAnimated ? 100 : 0} label="100%" />
          </ul>
        </Col>
        <Col>
        <Col  md={{ span: 6, offset: 3 }}>
        <h3 className='text-center p-2'>Languages</h3>
            <p className='text-right'>Spanish (native)</p>
            <ProgressBar now={5} max={5} label={`${5}/5`} />
            <br/>
            <p className='text-right'>English (Intermediate-advanced)</p>
            <ProgressBar now={4} max={5} label={`${4}/5`} />
        </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;