import React, { Component } from "react";
import '../App.css';

export default class Item extends Component {


  render(props) {
    return (
      <div className="indimages">
      
      <video className="videoAdd" src={this.props.srcimg} width="300" height="300" controls="controls"  onClick={this.props.getAd}/>
      
      <h3>{this.props.vname}</h3>
      </div>
    );
  }
}