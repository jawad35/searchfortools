import React from "react"
import Breadcrumb from "../common/Breadcrumb"
import FooterTwo from "../common/Footers/FooterTwo"
import Header from "../common/Header"
import AboutArea from "./AboutArea"
import AboutCounter from "./AboutCounter"
import CtaImages from "./CtaImages"

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="ABOUT NEROX" subtitle=" About Us" />
      <AboutArea />
      <AboutCounter />
      <CtaImages />
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(index), { ssr: false })
