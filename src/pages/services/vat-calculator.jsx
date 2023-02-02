import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import VatCalculator from "../../components/AllServices/VatCalculator/VatCalculator"

const VatCalculatorPage = () => {
  return (
    <>
      <SEO pageTitle="Vat Calculator" />
      <Header />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <VatCalculator />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default VatCalculatorPage
