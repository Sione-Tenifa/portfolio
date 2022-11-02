import React, { useState } from 'react';
import "../styles/Contact.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import family from "../assets/sionefam.jpeg"
import coach from "../assets/coaching.jpeg"
import officer from "../assets/officer.jpeg"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <Container className="contactdiv"fluid='lg'>
    <div className="contact" >
      <h1> Contact Me!</h1>
      <div className="contactform">
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control   
          required
          type="text"
          placeholder="Full name"/>
          <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Email"
          required
          />
         <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3}
        required 
        />
        <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
      </Form.Group>
  

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <Container>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img className="imgContact" variant="top" src={family} />
          <Card.Body>
            <Card.Title>My little Family!</Card.Title>
            <Card.Text>
              This is my beautiful wife Alexis and son A.J. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img className="imgContact" variant="top" src={coach} />
          <Card.Body>
            <Card.Title>My Passion For Coaching!</Card.Title>
            <Card.Text>
              I've been coaching for four years. I love watching the youth I coach grow and push their limits. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img className="imgContact" variant="top" src={officer} />
          <Card.Body>
            <Card.Title>What I wanted to be when I grew up. </Card.Title>
            <Card.Text>
              Being a police officer was my childhood dream. After spending 5 years in Law enforcment, 
              I decided to change careers and go after another passion. Software Development!
              Software Development gives me to opportunity to help people everywhere!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
    </Container>
    //Add content here 
  );
}

export default Contact;

