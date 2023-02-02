import React from "react"
import GetWebpageSourceCode from "../../components/AllServices/GetWebpageSourceCode/GetWebPageSourceCode"
import servicesData from "../../data/servicesData"
import ServicePage from "./service"

const WebPageSourceCodePage = () => {
  return (
    <ServicePage HTUData={servicesData[4]}>
      <GetWebpageSourceCode />
    </ServicePage>
  )
}

export default WebPageSourceCodePage
