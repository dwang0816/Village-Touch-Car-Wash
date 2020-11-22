import React from 'react'

export default function DetailBanner() {
  return (
    <div>
      <section className="botSection-info">
        <div id="sectionBot" className="col-md-12 mx-auto text-left ">
          <div>
            <div className="content-center text-center py-5">
              <div className="container py-5 scrollrevealprojecttext">
                <div className="reveal-item">
                  <div className="reveal-item-inner">
                    <div>
                      <h1 className="title text-uppercase text-white">All about Detailing.</h1>
                    </div>
                    <p className="subtitle text-white">All our professional detailers are screened. <br /> Call today to schedule your next detail. </p>
                    <div className="row">
                      <div className="col-12 col-md-12 mx-auto">
                        <hr className="hr-white" />
                        <a href="/detail"><button type="button" className="btn btn-danger sectionButton-Bottom">MORE</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
