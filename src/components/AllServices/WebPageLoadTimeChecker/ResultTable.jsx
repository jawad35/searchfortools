import React from "react"

const ResultTable = ({ url, time, scriptfiles, cssfiles }) => {
  return (
    <div className="mt-4">
      <table class="table table-striped">
        <tbody>
          <tr>
            <th scope="row">URL</th>
            <td>{url}</td>
          </tr>
          <tr>
            <th scope="row">Time Taken</th>
            <td>{time} Sec</td>
          </tr>
          <tr>
            <th scope="row">Script Links</th>
            <td>{scriptfiles.length}</td>
          </tr>
          <tr>
            <th scope="row">Css Links</th>
            <td>{cssfiles.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
