import dynamic from "next/dynamic"
import React from "react"
import WebPageLoadTimeChecker from "../../components/AllServices/WebPageLoadTimeChecker/WebPageLoadTimeChecker"
import servicesData from "../../data/servicesData"
import ServicePage from "./service"

const YouTubeTags = () => {
  return (
    <ServicePage HTUData={servicesData[5]}>
      <WebPageLoadTimeChecker />
    </ServicePage>
  )
}

export default dynamic(() => Promise.resolve(YouTubeTags), {
  ssr: false
})
