import React from "react"
import EmailExtractor from "../../components/AllServices/EmailsExtractor/EmailExtractor"
import ServicePage from "./service"
import servicesData from "../../data/servicesData"
import dynamic from "next/dynamic"

const EmailExtractorPage = () => {
  return (
    <ServicePage HTUData={servicesData[11]}>
      <EmailExtractor />
    </ServicePage>
  )
}

export default dynamic(() => Promise.resolve(EmailExtractorPage), {
  ssr: false
})
