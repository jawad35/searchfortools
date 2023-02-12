import React from "react"
import ServicePage from "./service"
import servicesData from "../../data/servicesData"
import dynamic from "next/dynamic"
const DomainAvailabilityChecker = dynamic(() =>
  import("../../components/AllServices/DomainInfo/DomainAvailablityChecker")
)
const DomainAvailability = () => {
  return (
    <ServicePage HTUData={servicesData[6]}>
      <DomainAvailabilityChecker />
    </ServicePage>
  )
}
export default dynamic(() => Promise.resolve(DomainAvailability), {
  ssr: false
})
