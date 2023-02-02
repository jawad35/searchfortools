import React, { useState } from "react"
import Calculator from "./Calculator"
const VatCalculator = ({ padd }) => {
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
                  <h3 className="tpds-title">QR Code Generator</h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">
                  <Calculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VatCalculator
