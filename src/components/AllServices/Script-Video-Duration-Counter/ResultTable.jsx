import React from "react"
import { useState } from "react"
import { Badge } from "react-bootstrap"

const ResultTable = ({ textCounter }) => {
  const [range, setRange] = useState(2)
  return (
    <div className="mt-4">
      <div class="alert-info-msg">
        <i
          class="fa fa-info-circle"
          style={{ color: "#55adee" }}
          aria-hidden="true"
        ></i>
        <strong className="m-2"> Remember! There is no space included</strong>
      </div>
      <div className="script-duration-box">
        {/* {textCounter.Words / 2} */}
        <p className="script-text">
          Your script is{" "}
          <Badge color="warning" className="mx-2">
            {textCounter?.Words}
          </Badge>
          words. We estimate a recording of it would be:
        </p>
        <div className="script-result">
          <p className="script-result-text">
            <Badge color="warning" className="mx-2">
              {Math.round(textCounter?.Words / range)}
            </Badge>
            seconds , if you average
            <Badge color="warning" className="mx-2">
              {range}
            </Badge>
            <strong> words </strong> per second
          </p>
        </div>
        <div className="my-4">
          <input
            type="range"
            class="form-range"
            min="1"
            max="6"
            value={range}
            id="customRange2"
            onChange={(e) => setRange(e.target.value)}
          ></input>
          <div className="d-flex justify-content-between">
            <span>slower</span>
            <span>average</span>
            <span>faster</span>
          </div>
        </div>
      </div>

      <table class="table table-striped mt-2">
        <tbody>
          <tr>
            <th scope="row">Words</th>
            <td>{textCounter?.Words}</td>
          </tr>
          <tr>
            <th scope="row">Letters</th>
            <td>{textCounter?.Letters}</td>
          </tr>
          <tr>
            <th scope="row">Spaces</th>
            <td>{textCounter?.Spaces}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
