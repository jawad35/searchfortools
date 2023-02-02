import React from "react"

const CustomLoader = () => {
  return (
    <div className="wrapper my-5">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>
        <strong>Loading</strong>
      </span>
    </div>
  )
}

export default CustomLoader
