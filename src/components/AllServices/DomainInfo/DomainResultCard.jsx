import React from "react"
import { Badge } from "react-bootstrap"
import { Dark_Blue } from "../../../utility/colors"
const DomainResultCard = ({ isAvailable, domain }) => {
  if (isAvailable === "") {
    return
  }
  return (
    <div>
      <h6 className="step-title mt-40">
        <i
          style={{
            color: "#ffeb3b",
            fontSize: "100px",
            background: "#55adee",
            borderRadius: "50%"
          }}
          className={`fa fa-${
            isAvailable ? "smile" : "frown"
          } domain-smile-emoji`}
        ></i>
      </h6>
      {isAvailable && (
        <div class="alert-success-msg">
          <strong>
            <i
              class="fa fa-circle m-2"
              style={{ color: "green" }}
              aria-hidden="true"
            ></i>
            Congratulation! Your domain{" "}
            <Badge style={{ background: Dark_Blue }}>
              <strong>https://{domain}</strong>
            </Badge>{" "}
            is available
          </strong>
        </div>
      )}
      {!isAvailable && (
        <div class="alert-danger-msg">
          <strong>
            <i
              class="fa fa-circle m-2"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
            Oops! Your domain{" "}
            <Badge style={{ background: Dark_Blue }}>
              <strong>https://{domain}</strong>
            </Badge>{" "}
            is not available
          </strong>
        </div>
      )}
    </div>
  )
}

export default DomainResultCard
