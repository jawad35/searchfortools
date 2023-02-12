import React from "react"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import VatCalculator from "../../components/AllServices/VatCalculator/VatCalculator"
import dynamic from "next/dynamic"

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
export default dynamic(() => Promise.resolve(VatCalculatorPage), {
  ssr: false
})
