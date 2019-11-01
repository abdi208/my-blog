import React from 'react';
import {
   Link
  
  } from 'react-router-dom'
function About() {
    return (
        
        <>
        <div>
        <nav>
            <Link to="/mainblog">Main: nav bar only on this page</Link>
        </nav>
            <h1>About Me</h1>
            <p>My name is Abdi Ahmed and I am a student at General Assembly</p>
        </div>
        </>
    )
}

export default About;