import React from 'react'

export default function About() {
  return (
    <div>
      <div className="row my-5 pb-lg-150 midInfo hideDiv3" id="div3">
        <div className="col-md-7 mx-auto text-center pr-md-0">
          <div id="aa" className="card card-raised h-100 fill">
            <img src="car3.jpg" alt="" className="img-fluid img2" />
          </div>
        </div>
        <div className="col-md-5 mx-auto text-left px-md-0">
          <div className>
            <div className="reveal-item">
              <div className="reveal-item-inner">
                <p className="jumbo-numberindicator1 mx-auto mt-5 ml-md-5">About</p>
              </div>
            </div>
          </div>
          <div className="card card-no-shadow box-lg-shift-right-bottom p-4 p-md-5" id="div3Text">
            <h3 className="title visibility-hidden">Village Touch Free Car Wash</h3>
            <p className="descriptionP text-justify visibility-hidden">
            </p><hr />
            <p className="home-text-div">
              Our friendly staff is eager to get your car Sparkling clean!<br />
              We offer basic to platinum Car washes that offers vacuuming and cleaning of mats.
            </p>
            <p />
          </div>
        </div>
      </div>
    </div>
  )
}
