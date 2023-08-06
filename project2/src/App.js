import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class App extends Component {
  c="Aditya ";
  render() {
    return (
      <div>
        This is my first class base Component{this.c}
        <Navbar/>
        <News/>
      </div>
    )
  }
}
