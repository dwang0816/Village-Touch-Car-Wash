import React from 'react'

export default function Carousel() {
  return (
    <div>
    <div id="carousel-example-2" className="header slide carousel-fade" data-ride="carousel" data-interval={13800}>
      <div className="carousel-inner active" role="listbox">
        <div className="carousel-item active">
          <div className="view">
          </div>
          <div className="sp-container">
            <div className="sp-content">
              <h2 className="frame-1"><span>Long Island's</span></h2>
              <h2 className="frame-2"><span>Number One</span></h2>
              <h2 className="frame-3"><span>Car Wash</span></h2>
              <span>Village</span>
              <span>Touch-Free</span>
              <span />
              <span>Carwash</span>
            </div>
          </div>
          <div id="carousel-caption1" className="carousel-caption">
            <h4 className="phone-menu">1-631-549-9274 </h4>
            <h4>139 New York AveHuntington, NY 11743 </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
