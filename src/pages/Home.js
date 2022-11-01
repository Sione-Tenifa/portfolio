import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import logo from "../assets/sionelogo1.png";
import portrait from "../assets/sionecoach.jpeg"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'
// import Contact from "../pages/Contact";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






function Home() {
  return (

    <div className="home">
      <Container fluid>
        <div className="about">
        <Row fluid>
          <Col className='col1' fluid>
          <img className='imgHome'src={logo} alt="logo" />
          </Col>
          <Col>
          <h2>Hi, My Name is Sione</h2>
          <img className='portrait'src={portrait} alt="pic" />

          </Col>
        </Row>
          <div className="prompt">
            <p>A software developer with a passion for learning and Coaching.</p>
            <p>This site was built using </p>
            <p>React | HTML | CSS | BootStrap</p>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sionetenifa/'>
            <LinkedInIcon  />
            </a>
            <a href="/contact" rel="noreferrer"> 
            <EmailIcon /></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/Sione-Tenifa'>
              <GithubIcon />
            </a>
          </div>

        </div>
      </Container>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
