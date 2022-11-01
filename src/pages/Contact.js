import React, { useState } from 'react';
import "../styles/Contact.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


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
    <Container fluid='lg'>
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
    </Container>
    //Add content here 
  );
}

export default Contact;

