import React, { Component } from 'react';
import './App.css';

//EXPLANATION:

//This component is responsible for displaying
//the website's logo and headline. The content
//of the headline is passed down by the parent
//component (App). The "logo" is simply an empty
//div that we assign a width, height and background-color
//in the css stylesheet.

class Headline extends Component {

  render() {
    return (
      <div className="headline">
        <div className="logo"></div>
       
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

export default Headline;
