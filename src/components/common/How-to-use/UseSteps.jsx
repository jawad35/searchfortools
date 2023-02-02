import React from "react"

const UseSteps = ({ data }) => {
  return (
    <>
      {data?.usesteps?.map((step, index) => (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="step-item text-center mb-30">
            <div className="step-number-wrapper">
              <span className="step-number">{step?.no}</span>
            </div>
            <h6 className="step-title mt-40">{step?.title}</h6>
            <p dangerouslySetInnerHTML={{ __html: step?.text }}></p>
            {/* {index !== 3 && (
              <div className="step-item-shape shape-1">
                <img
                  src="/assets/img/shape/arrow-shape-1.png"
                  alt="arrow-shape"
                />
              </div>
            )} */}
          </div>
        </div>
      ))}
    </>
  )
}

export default UseSteps
