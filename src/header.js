import React, { Component } from 'react';
import Background from './img/5.jpg';
import './header.css'

const myStyles ={
    // Below line code is using Backticks i.e. Console key  for writinng the url thing.
    backgroundImage:  `url( ${Background} )`,
    height: '80vh', //vh:means viewport like 80% of the entire page will be converted to image.
    backgroundSize: 'cover'

}


class Header extends Component{
    
    // const ham = './img/2.jfif';
    
    render(){
        return (
            <header style = {myStyles} id="Home">
                <h1>{this.props.title}</h1>
                <p>Software Developement Engineer || Strategy || Researcher</p>
                <a href ="#About">{this.props.button}</a>
                
            </header>

        );



    }




}

export default Header;