import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Nancy Mary R</h4>
      <h4>Copyright &copy; 2025 NM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Nancy-2005" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/nancy-mary-767633256/" target='_blank'><FaLinkedin/></a>
        <a href="mailTo:nancymary.26it@licet.ac.in" target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer