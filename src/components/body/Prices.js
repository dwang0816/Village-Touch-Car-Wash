import React from 'react'

export default function Prices() {
  return (
    <div>
        <div>
        <div className="row align-items-center content threeInfo justify-content-center active" id="store-pricing">
          <div id="price1" className="col-xs-3 price fullW">
            <div>
              <div className="classes">
                <p>Full</p>
                <hr className="hr-white" />
              </div>
              <div className="cost">
                <div>
                  <p className="amount">$17<span className="spanPrice">.99</span></p>
                </div>
                <div id="plat">
                  <h2>Exterior Wash</h2>
                  <h2>Vacuum</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="price2" className="col-xs-3 price silver">
            <div>
              <div className="classes">
                <p>Silver</p>
                <hr className="hr-white" />
              </div>
              <div className="cost">
                <div>
                  <p className="amount">$23<span className="spanPrice">.99</span></p>
                </div>
                <div>
                  <img className="responsive tire" src="rainbowcoat.png" alt="" />
                </div>
                <div>
                  <img className="responsive tire" src="tiregloss.png" alt="" />
                </div>
                <h2>Sealer Wax</h2>
                <h2>Under Carriage Wash</h2>
              </div>
            </div>
          </div>
          <div id="price3" className="col-xs-3 price gold" data-tilt>
            <div>
              <div className="classes">
                <p>Gold</p>
                <hr className="hr-white" />
              </div>
              <div className="cost">
                <div>
                  <p className="amount">$27<span className="spanPrice">.99</span></p>
                </div>
                <div>
                  <img className="responsive tire" src="rainbowcoat.png" alt="" />
                </div>
                <div>
                  <img className="responsive tire" src="tiregloss.png" alt="" />
                </div>
                <h2>Sealer Wax</h2>
                <h2>Wheel Brite</h2>
                <h2>Windshield Treatment</h2>
                <h2>Under Carriage Wash</h2>
              </div>
            </div>
          </div>
          <div id="price4" className="col-xs-3 price plat your-element">
            <div>
              <div className="classes">
                <p>Platinum</p>
                <hr className="hr-white" />
              </div>
              <div className="cost">
                <div>
                  <p className="amount">$30<span className="spanPrice">.99</span></p>
                </div>
                <div>
                  <img className="responsive tire" src="rainbowcoat.png" alt="" />
                </div>
                <div>
                  <img className="responsive tire" src="tiregloss.png" alt="" />
                </div>
                <div>
                  <img className="responsive tire" src="hotwax.png" alt="" />
                </div>
                <div id="plat">
                  <h2>Triple Foam Polish</h2>
                  <h2>Sealer Wax</h2>
                  <h2>Wheel Brite</h2>
                  <h2>Under Carriage Wash</h2>
                  <h2>Windshield Treatment</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 w3-container w3-center justify-content-center detail-services-middle upCharge">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8">
              <p className="detail-package-title">$2.00 upcharge for SUV's
              </p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
