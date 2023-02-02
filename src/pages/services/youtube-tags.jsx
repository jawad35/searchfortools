import React from "react"
import YouTubeTagGetter from "../../components/AllServices/YouTubeTagsGetter/YouTubeTagGetter"
import servicesData from "../../data/servicesData"

import ServicePage from "./service"

const YouTubeTags = () => {
  return (
    <ServicePage HTUData={servicesData[0]}>
      <YouTubeTagGetter />
    </ServicePage>
  )
}

export default YouTubeTags
