import React, { Component } from 'react';
// import './App.css';
import './navigation.css';

class navigation extends Component {
  render(){

    const sections = [ 'Home', 'About', 'Timeline', 'Projects', 'Resume', 'Publications', 'Contact' ];
   
    const navLinks = sections.map( section => {
        return(
            <li><a href = {'#' + section} > {section }</a></li>
        )
    });

    return (
    <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>

        <ul>
           {navLinks}
        </ul>

    </nav>
    );
}
}


export default navigation;

// <li><a href="#home">Home</a></li>
// <li><a href="#about">About</a></li>
// <li><a href="#projects">Projects</a></li>
// <li><a href="#resume">Resume</a></li>
// <li><a href="#contact">Contact</a></li>
