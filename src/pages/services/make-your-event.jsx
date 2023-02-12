import React from "react"
import ServicePage from "./service"
import EventImageMaker from "../../components/AllServices/EventImageMaker/EventImageMaker"
import dynamic from "next/dynamic"

const InternetSpeedChecker = () => {
  return (
    <ServicePage>
      <EventImageMaker />
    </ServicePage>
  )
}

export default dynamic(() => Promise.resolve(InternetSpeedChecker), {
  ssr: false
})
