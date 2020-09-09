import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './navigation'; 
import Header from './header';
import About from './About';
import Footer from './footer';
import Experience from './Experience';
import * as serviceWorker from './serviceWorker';

class App extends Component{
  render() {
    return(
      <div>
      <Navigation logoTitle="My-Portfolio" />
      <Header title="Hi!... I'm Anjaney Singh" button="More About Me"/>
      <About/>
      <Experience/>
      <Footer/>
      </div>
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
