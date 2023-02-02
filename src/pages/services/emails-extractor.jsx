import React from "react"
import EmailExtractor from "../../components/AllServices/EmailsExtractor/EmailExtractor"
import ServicePage from "./service"
import servicesData from "../../data/servicesData"

const EmailExtractorPage = () => {
  return (
    <ServicePage HTUData={servicesData[11]}>
      <EmailExtractor />
    </ServicePage>
  )
}

export default EmailExtractorPage
