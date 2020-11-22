import React, { Component } from 'react';
import Header from './Header';
import Interior from './body/Interior'
import Exterior from './body/Exterior'
import About from './body/About'
import DetailBanner from './body/DetailBanner'
import PriceTitle from './body/PriceTitle'
import Prices from './body/Prices'
import Footer from './Footer'

export class Landing extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Interior/>
        <Exterior/>
        <About/>
        <DetailBanner/>
        <PriceTitle/>
        <Prices/>
        <Footer/>
      </div>
    )
  }
}

export default Landing;
