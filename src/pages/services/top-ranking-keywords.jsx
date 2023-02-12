import React from "react"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import GetRankingKeywords from "../../components/AllServices/GetAllRankingKeywords/GetRankingKeywords"
import dynamic from "next/dynamic"

const TopKeyWordsRankingPage = () => {
  return (
    <>
      <SEO pageTitle="Youtube Tags Extractor" />
      <Header />
      <GetRankingKeywords />
      <ToastContainer />
      <HowToUse />
      <FooterTwo />
    </>
  )
}

export default dynamic(() => Promise.resolve(TopKeyWordsRankingPage), {
  ssr: false
})
