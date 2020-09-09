import React, { Component } from 'react'
import './about.css';

class About extends Component {
  render() {
    return (
        <div className="about" id="About">
            <h2>About Me</h2>
            <h4>Who Am I?</h4>
            <p>Graduate Computer Science Engineer from Birla Institute of Technology and Science, Pilani, constantly keen, optimistic and passionate about Data Science, Software Development and at all times interested to know the answers about how, why and what linking to trending technologies around me so that I would be able to help the society and also to lead people from a life of hardship to a new life of comfort and wellbeing. I'd love to combine my passion for learning with my software development and data science skills to continue building learning products for people. </p>
        
            <div className="services1">
                <h2>A range of Expertise</h2>

                <div className="row">

                    <div>
                        <span><ion-icon name="logo-web-component"></ion-icon></span>
                        <h3>Web Development</h3>
                        <p>• I've experience working as Web Developer Intern, and  building websites using JavaScript, React.js, CSS, HTML, Node.js </p>
                    </div> 
                    
                    <div>
                        <span><ion-icon name="moon-outline"></ion-icon></span>
                        <h3>Data Science Work</h3>
                        <p>• Pursued my internship in the organizations, working in area of Machine Learning and Data Science and I did quite a few personal ML projects too.</p>
                    </div> 
                    
                    <div>
                        <span><ion-icon name="receipt-outline"></ion-icon></span>
                        <h3>Data Structures and Algorithms</h3>
                        <p>• As coming from the CS background, I have good grasp over fundamental concepts of Data Structures and Algorithms.</p>
                    </div> 
                </div> 
                
                {/* <a href="#work" class="btn">My Work</a> */}
            </div>
        
        
        
        
        </div>

        
        




    );
  }
}

export default About;