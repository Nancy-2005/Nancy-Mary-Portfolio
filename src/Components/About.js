import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p> 
  Hi, my name is <b>Nancy Mary R</b>, and I’m from Tamil Nadu, India. <br />
  I'm a final-year college student pursuing a <b>B.Tech in Information Technology</b> at Loyola-ICAM College of Engineering and Technology.<br /><br />
  I have completed various internships, which you can explore in the internship section. 
  I love creating original projects with beautiful and functional designs — feel free to check out some of my work in the project section.<br /><br />
  I’m always <b>open</b> to new collaborations or opportunities where I can contribute and grow. 
</p>

        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
      <Skills skill='Python' />
      <Skills skill='Java' />
      <Skills skill='MongoDb' />
      <Skills skill='SQL' />
      <Skills skill='HTML'/>
      <Skills skill='CSS'/>
      <Skills skill='Javascript' />
      <Skills skill='React' />
      <Skills skill='Node' />
      <Skills skill='Express' />
      <Skills skill='QML'/>
      <Skills skill="AI & ML" />
      </div>
    </>
  )
}

export default About