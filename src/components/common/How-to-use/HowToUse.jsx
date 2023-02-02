import React from "react"
import TryOtherTools from "./TryOtherTools"
import UseSteps from "./UseSteps"

const HowToUse = ({ HTUData }) => {
  return (
    <div className="services-details-area pt-140 pb-105">
      <div className="row container">
        <div className="col-xl-8">
          <p className="services-text mb-25">{HTUData?.working}</p>
          <h4 className="services-d-title mb-25">
            How does {HTUData?.title} work?
          </h4>
          <div className="row">
            <div className="col-xl-12">
              <h5 className="services-sm-title mb-25">
                {HTUData?.usesteps?.length} Simple Steps
              </h5>
              <div className="row mt-70">
                <UseSteps data={HTUData} />
              </div>
            </div>
          </div>
        </div>
        <TryOtherTools />
      </div>
    </div>
  )
}

export default HowToUse
