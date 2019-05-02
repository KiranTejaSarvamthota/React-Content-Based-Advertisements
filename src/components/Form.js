
import React, { Component } from "react";
import '../App.css';
//import CartItem from "./CartItem";
import Item from "./Item";
export default class Form extends Component {




  render() {
    return (
      <div className="containerForm">
      
      <h2 className="mainheading">Home Page</h2>
      <Item getAd={this.props.getAd} vname={"Video 1"} srcimg={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}/>
      <Item getAd={this.props.getAd1} vname={"Video 2"} srcimg={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"}/>
      <Item getAd={this.props.getAd2} vname={"Video 3"} srcimg={"https://media.w3.org/2010/05/bunny/movie.mp4"}/>
      <Item getAd={this.props.getAd3} vname={"Video 4"} srcimg={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}/>
      <Item getAd={this.props.getAd4} vname={"Video 5"} srcimg={"http://techslides.com/demos/sample-videos/small.mp4"}/>
      <Item getAd={this.props.getAd5} vname={"Video 6"} srcimg={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"}/>
      

      







      </div>
    );
  }
}


