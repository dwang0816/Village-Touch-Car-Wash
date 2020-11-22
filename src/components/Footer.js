import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
    <div>
      <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 myCols">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/detail">Detail</a></li>
                        <li><a href="/propane">Propane</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 myCols">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
                <div class="col-sm-3 myCols">
                    <h5>Hours</h5>
                    <ul>
                        <li></li>
                        <li>Mon-Sat: 8:00 am - 6:00 pm</li>
                        <li></li>
                        <li>Sun: 8:00 am - 5:00 pm </li>
                    </ul>
                </div>
                <div class="col-sm-3 myCols">
                    <h5>Address</h5>
                    <ul>
                        <li>139 New York Ave </li>
                        <li>Huntington</li>
                        <li>NY 11743</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="social-networks">
            <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="facebook"><i class="fa fa-facebook-official"></i></a>
            <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
            <a href="#" class="facebook"><i class="fa fa-instagram"></i></a>
            <a href="#" class="google"><i class="fa fa-youtube-square"></i></a>
        </div>
        <div class="footer-copyright">
            <p>© 2019 Copyright villagetouchfreecarwash</p>
        </div>
      </footer>
    </div>
    )
  }
}

export default Footer
