import React from "react"
import Breadcrumb from "../common/Breadcrumb"
import FooterTwo from "../common/Footers/FooterTwo"
import Header from "../common/Header"
import AboutArea from "./AboutArea"
import AboutCounter from "./AboutCounter"
import CtaImages from "./CtaImages"
import dynamic from "next/dynamic"

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="ABOUT US" subtitle=" About Us" />
      <AboutArea />
      <AboutCounter />
      {/* <CtaImages /> */}
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })
