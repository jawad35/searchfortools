import React from "react"
import "react-toastify/dist/ReactToastify.css"
import InvoiceGenerator from "../../components/AllServices/InvoiceGenerator/InvoiceGenerator"
import ServicePage from "./service"
import servicesData from "../../data/servicesData"

const InvoiceGeneratorPage = () => {
  return (
    <ServicePage HTUData={servicesData[10]}>
      <InvoiceGenerator />
    </ServicePage>
  )
}

export default InvoiceGeneratorPage
