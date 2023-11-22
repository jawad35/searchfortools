import React from "react"
import ScriptVideoDurationCounter from "../../components/AllServices/Script-Video-Duration-Counter/ScriptVideoDuration"
import servicesData from "../../data/servicesData"
import ServicePage from "./service"
import dynamic from "next/dynamic"

const ScriptVideoDurationPage = () => {
  return (
    <ServicePage HTUData={servicesData[3]}>
      <ScriptVideoDurationCounter />
    </ServicePage>
  )
}
export default dynamic(() => Promise.resolve(ScriptVideoDurationPage), {
  ssr: false
})
