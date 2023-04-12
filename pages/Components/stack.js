import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const MyStack = () => {
  const images = [
    { src: './images/Stack/html5.png', alt: 'HTML5', desc: 'HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.' },
    { src: './images/Stack/CSS3.png', alt: 'CSS3', desc: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML.' },
    { src: './images/Stack/JavaScript.png', alt: 'JavaScript', desc: 'JavaScript is a programming language that is widely used in web development. It is used to create interactive and dynamic websites.' },
    { src: './images/Stack/Python.png', alt: 'Python', desc: 'Python is a high-level, interpreted programming language that is widely used in web development, machine learning, data analysis, and more.'  },
    { src: './images/Stack/React.png', alt: 'React', desc: 'React is a JavaScript library for building user interfaces. It is used to create interactive and dynamic web applications.'  },
    { src: './images/Stack/Vue.png', alt: 'Vue', desc: 'Vue is a progressive JavaScript framework for building user interfaces. It is designed to be easy to use and flexible.'  },
    { src: './images/Stack/node.png', alt: 'Nodejs', desc: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It is used for backend development and can handle large amounts of data and traffic.' },
    { src: './images/Stack/Tailwind.png', alt: 'Tailwind', desc: ' Tailwind CSS is a utility-first CSS framework that makes it easy to create custom designs without writing any CSS code.'  },
    { src: './images/Stack/SQL.png', alt: 'SQL', desc: ' Structured Query Language (SQL) is a programming language used to manage and manipulate relational databases.'  },
    { src: './images/Stack/Mongodb.png', alt: 'MongoDB', desc: 'MongoDB is a NoSQL database that uses a document-oriented data model. It is designed to be flexible and scalable.'  },
    { src: './images/Stack/Mysql.png', alt: 'MySQL', desc: 'MySQL is a popular open-source relational database management system. It is widely used in web development and can handle large amounts of data.'  },
    { src: './images/Stack/Graphql.png', alt: 'GraphQL', desc: 'GraphQL is a query language for APIs that was developed by Facebook. It allows clients to request exactly what data they need, and nothing more.'  },
  ];

  const [hoveredImg, setHoveredImg] = useState(null);

  const handleHover = (index) => {
    setHoveredImg(index);
  }

  const handleMouseLeave = () => {
    setHoveredImg(null);
  }

  const imageCols = [];

  for (let i = 0; i < images.length; i++) {
    const imageCol = (
      <Col key={i} lg={3} md={4} sm={6} xs={12} className="d-flex justify-content-center  mb-5 mx-2">
        <div className="d-flex flex-column align-items-center" onMouseEnter={() => handleHover(i)} onMouseLeave={handleMouseLeave}>
          <Image src={images[i].src} alt={images[i].alt} style={{ display: 'block', maxWidth: '100%', height: '100px' }} />
          {hoveredImg === i && <p className="text-center text-white">{images[i].desc}</p>}
        </div>
      </Col>
    );
    imageCols.push(imageCol);
  }
  
  return (
    <div className="under" style={{ background: '#cccccc38'}}>
      <h1 id="stack" className='text-white text-center position-relative p-5' style={{ fontWeight: 'bold'}}>My Stack</h1>
      <Container fluid className="px-3" >
        <Row nogutters="true" o={true.toString()} className="justify-content-center">
          {imageCols}
        </Row>
      </Container>
      <div className="underline text-center" style={{background: '#272626', height: '31px', color: '#ccc' }}>
        <p>And I'm just getting started.</p>
      </div>
    </div>
  );
};

export default MyStack;