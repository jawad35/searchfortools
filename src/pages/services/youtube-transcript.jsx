import dynamic from "next/dynamic"
import React from "react"
import YouTubeTranscriptor from "../../components/AllServices/YoutubeTranscriptor/YouTubeTranscriptor"
import servicesData from "../../data/servicesData"
import ServicePage from "./service"

const YoutubeTranscriptorPage = () => {
  return (
    <>
      <ServicePage HTUData={servicesData[2]}>
        <YouTubeTranscriptor />
      </ServicePage>
    </>
  )
}

export default dynamic(() => Promise.resolve(YoutubeTranscriptorPage), {
  ssr: false
})
