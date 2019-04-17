import React, { Component } from 'react';
import './App.css';





class InputPhoto extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPic: "",
    }
  }
  
  updatePic = (event) => {
    this.setState({
      currentPic: event.target.value
    });
  }
  submitPic = () => {
    this.props.submit(this.state.currentPic);
  }

  render() {
    return (
      <div className="inputComp">
        <input placeholder="Share photo links..." onChange={this.updatePic}></input> 
        <button onClick={this.submitPic}>SUBMIT</button>
      </div>
    );
  }
}

export default InputPhoto;
