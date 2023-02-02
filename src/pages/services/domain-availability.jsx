import React from "react"
import DomainAvailabilityChecker from "../../components/AllServices/DomainInfo/DomainAvailablityChecker"
import ServicePage from "./service"
import servicesData from "../../data/servicesData"

const DomainAvailability = () => {
  return (
    <ServicePage HTUData={servicesData[6]}>
      <DomainAvailabilityChecker />
    </ServicePage>
  )
}

export default DomainAvailability
