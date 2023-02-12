import React from "react"
import Header from "../common/Header"
import FooterTwo from "./HomeTwoFooter"
import HeroSlider from "./HeroSlider"
import ServicesTwo from "./ServicesTwo"
import { positions, Provider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import dynamic from "next/dynamic"
const HomeTwoMain = () => {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  }
  return (
    <>
      <Header HeaderTwo={true} />
      <HeroSlider />
      <Provider template={AlertTemplate} {...options}>
        <ServicesTwo />
      </Provider>
      {/* <AboutTwo/> */}
      {/* <CounterTwo/> */}
      {/* <PortfolioTwo/> */}
      {/* <TestimonialTwo/> */}
      {/* <BrandArea hideTopBar={true} brand="-2" /> */}
      {/* <TeamTwo/> */}
      {/* <CtaTwo/> */}
      {/* <BlogTwo/> */}
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(HomeTwoMain), { ssr: false })
