
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_KEY;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    const templateParams = {
      from_name: name,
      to_name: 'Carlos',
      from_email: email,
      subject: subject,
      message: message,
    };


    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        alert('¡El correo electrónico se envió correctamente!');
      })
      .catch((error) => {
        console.error(error);
        alert('¡Se produjo un error al enviar el correo electrónico!');
      });
  };

  return (
    <Container id='contact' className='text-white' style={{ height: '800px', width: '100%', paddingTop: '150px' }}>
      <Row>
        <h1>Contact</h1>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                Name
                <span className="text-danger">
                  *
                </span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Email address
                <span className="text-danger">
                  *
                </span>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>
                Subject
                <span className="text-danger">
                  *
                </span>
              </Form.Label>
              <Form.Control type="text" placeholder="Enter subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
          <h4 style={{ paddingRight: '100px' }}>OR</h4>
          <div style={{ padding: 'auto' }}>
            <h3 className='text-center'>Contact via</h3>
            <a href="https://github.com/CarlosLmB" target="_blank" style={{ maxWidth: "70px", paddingRight: '10px' }}><FaGithub size={70} className='icon' /></a>
            <a href="https://www.linkedin.com/in/carlos-cordero-203185168/ " target="_blank" style={{ maxWidth: "70px" }}><FaLinkedin size={70} className='icon' /></a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;