import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import QRCodeScanner from "../../components/AllServices/QRCodeScanner/QRCodeScanner"
import dynamic from "next/dynamic"

const QRCodeScannerPage = () => {
  return (
    <>
      <SEO pageTitle="QR Code Scanner" />
      <Header />
      {/* <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/> */}
      <QRCodeScanner />
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}
export default dynamic(() => Promise.resolve(QRCodeScannerPage), {
  ssr: false
})
