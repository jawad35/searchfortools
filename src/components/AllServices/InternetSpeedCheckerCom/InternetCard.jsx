import React from "react"
import { Download, Upload } from "react-feather"

const InternetCard = ({ internetData }) => {
  return (
    <div
      className="contact__info-inner white-bg d-lg-flex justify-content-around"
      style={{ paddingRight: "40px" }}
    >
      <div>
        <Download size={50} color="#1e81b0" />
        <div className="contact__info-text">
          <h4>Download Speed</h4>
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "30px",
              display: "inline-flex"
            }}
          >
            {internetData?.Download} Mbps
          </p>
        </div>
      </div>
      <div>
        <Upload size={50} color="#1e81b0" />
        <div className="contact__info-text">
          <h4>Upload Speed</h4>
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "30px",
              display: "inline-flex"
            }}
          >
            {internetData?.Upload} Mbps
          </p>
        </div>
      </div>
    </div>
  )
}

export default InternetCard
