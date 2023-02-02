import React from "react"
import TextCounter from "../../components/AllServices/DocCounter/TextCounter"
import servicesData from "../../data/servicesData"
import ServicePage from "./service"

const TextCounterPage = () => {
  return (
    <>
      <ServicePage title={servicesData[7].title}>
        <TextCounter />
      </ServicePage>
    </>
  )
}

export default TextCounterPage
