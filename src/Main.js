import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';
import Advertisement from './components/Advertisement'
import storeProducts from "./data";
import { Route, Switch } from 'react-router-dom';






class Main extends Component {

    constructor(){
      super()
      this.state={
        count:0,
       images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwxJr1XZ9i6JRCCpMx56z3mW6DHes1RH92sjQgKEoRe0xvJaa",
       "https://s3.amazonaws.com/3gengagement.dealers/eddys-toyota/specials-vehicles/page-graphics/landing-page/eddys_toyota-landing-new_cars-corolla-1.png",
       "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/walmart-black-friday-frontjpg-9c94c1428f4d3ec5.jpg",
       "http://3.bp.blogspot.com/-pxziMwyLmW0/TkxfQu4SgJI/AAAAAAAAR90/8FmGp_BnGLk/s1600/Untitled-Scanned-07.jpg",
       "https://i2.wp.com/armchairarcade.com/perspectives/wp-content/uploads/2018/10/A9Gold.jpg?fit=1400%2C1400&ssl=1",
       "https://cdn.dribbble.com/users/2037835/screenshots/4165520/q1.jpg",
       "https://www.arrivealive.co.za/images/topright/top_priority_content.jpg"]
      }
      this.getAd=this.getAd.bind(this)
      this.getAd1=this.getAd1.bind(this)
      this.getAd2=this.getAd2.bind(this)
      this.getAd3=this.getAd3.bind(this)
      this.getAd4=this.getAd4.bind(this)
      this.getAd5=this.getAd5.bind(this)

    }

    getAd(){
      this.setState(prevState=>{
        return {
          count:1
          //count:prevState.count+1,
          //images:prevState.images[this.state.count]
      }
    })
  }

      getAd1(){
      this.setState(prevState=>{
        return {
          count:2
          //count:prevState.count+1,
          //images:prevState.images[this.state.count]
      }
    })
  }

      getAd2(){
      this.setState(prevState=>{
        return {
          count:3
          //count:prevState.count+1,
          //images:prevState.images[this.state.count]
      }
    })
  }

      getAd3(){
      this.setState(prevState=>{
        return {
          count:4
          //count:prevState.count+1,
          //images:prevState.images[this.state.count]
      }
    })
  }

      getAd4(){
      this.setState(prevState=>{
        return {
          count:5
          //count:prevState.count+1,
          //images:prevState.images[this.state.count]
      }
    })
  }

      getAd5(){
      this.setState(prevState=>{
        return {
          count:6
          //count:prevState.count+1,
          //images:prevState.images[this.state.count]
      }
    })
  }




  //const productComponents= storeProducts.map(product => <Advertisement key={product.id} question={product.img}/>)



  render(){
    return (
      <React.Fragment>



      
      <Form getAd={this.getAd} getAd1={this.getAd1} getAd2={this.getAd2} getAd3={this.getAd3} getAd4={this.getAd4} getAd5={this.getAd5}/>
      

      <Advertisement images={this.state.images[this.state.count]}/>


  
      </React.Fragment>

      
      
    );
  }
}

export default Main;
