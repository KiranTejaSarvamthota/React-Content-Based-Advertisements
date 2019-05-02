
import React, { Component } from "react";
import '../App.css';
//import CartItem from "./CartItem";
import { Link } from "react-router-dom";
export default class Advertisement extends Component {
  render() {
  	
    return (
      <div className="containerAd">
      <h3 className="adheading"> Advertisements </h3>
      <Link to="/ad">
      <img src={this.props.images} alt=" " className="card-img-topp" />
      </Link>

      <Link to="/ad">
      <video className="videoAdd1" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" width="300" height="300" controls="controls" autoPlay="true" />
      </Link>
     
      </div>
    );
  }
}

