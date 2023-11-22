import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import BrandArea from "../../components/common/BrandArea"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import axios from "axios"
import InternetChecker from "../../components/AllServices/InternetSpeedCheckerCom/InternetChecker"
import ServicePage from "./service"
import EventImageMaker from "../../components/AllServices/EventImageMaker/EventImageMaker"

const InternetSpeedChecker = () => {
  const router = useRouter()
  const [serviceItem, setServiceItem] = useState({})
  // const GetYouTubeTags = () => {
  //   axios.get(`${BASE_API_URL}/youtube-tags/`).then((res) => {
  //     console.log(res)
  //     console.log(res.data)
  //   })
  // }

  return (
    <ServicePage>
      <EventImageMaker />
    </ServicePage>
  )
}

export default InternetSpeedChecker
