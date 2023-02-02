import React from "react"

const CustomAlertMessage = ({ title }) => {
  return (
    <div class="alert-info-msg">
      <i
        class="fa fa-info-circle"
        style={{ color: "#55adee" }}
        aria-hidden="true"
      ></i>
      <strong className="m-2"> {title}</strong>
    </div>
  )
}

export default CustomAlertMessage
