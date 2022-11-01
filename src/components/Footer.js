import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sionetenifa/'>
            <LinkedInIcon  />
            </a>
            <a href="/contact" rel="noreferrer"> 
            <EmailIcon /></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/Sione-Tenifa'>
              <GithubIcon />
            </a>
      </div>
      <p> &copy; 2022 Sione Tenifa</p>
    </div>
  );
}

export default Footer;
