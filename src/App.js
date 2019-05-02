import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';

import Advertisement from './components/Advertisement'
import storeProducts from "./data";
import { Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Main from './Main';
import Details from './components/Details';
import Modal from "./components/Modal";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar";

class App extends Component {
  render(){
    return (
      <React.Fragment>


      <Switch>
      <Route path="/ad" component={Navbar,ProductList} />
 
      <Route path="/details" component={Details} />


      <Route path="/cart" component={Cart} />

      <Route exact path="/" component={Main } />


      </Switch>
      <Modal />
  
      </React.Fragment>      
      
    );
  }
}

export default App;
