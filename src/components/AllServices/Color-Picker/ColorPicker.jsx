import React from "react"
import ColorImageExtractor from "./ColorExtractor"
const ColorPicker = ({ padd }) => {
  return (
    <>
      <section
        className={`tptestimonial-area p-relative pt-110 pb-105 ${
          padd ? padd : ""
        }`}
      >
        <div className="tptestimonial__inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-section-title text-center">
                  <h3 className="tpds-title">Image Color Picker</h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">
                  <div className="row">
                    <div
                      className="col-xxl-6 col-xl-6 col-md-6"
                      style={{ margin: "0px auto", textAlign: "center" }}
                    >
                      <ColorImageExtractor />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ColorPicker
