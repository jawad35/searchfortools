import React from "react"

const ResultTable = ({ ExtractedEmails }) => {
  return (
    <div className="mt-4">
      <table class="table table-striped mt-2">
        <tbody>
          {ExtractedEmails?.map((item, index) => (
            <tr>
              <th scope="row">Email {index + 1}</th>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
