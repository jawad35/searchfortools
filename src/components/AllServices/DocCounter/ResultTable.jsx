import React from "react"

const ResultTable = ({ textCounter }) => {
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
