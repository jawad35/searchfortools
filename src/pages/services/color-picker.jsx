import React from "react"
import Breadcrumb from "../../components/common/Breadcrumb"
import FooterTwo from "../../components/common/Footers/FooterTwo"
import Header from "../../components/common/Header"
import SEO from "../../components/seo"
import HowToUse from "../../components/common/How-to-use/HowToUse"
import ColorPicker from "../../components/AllServices/Color-Picker/ColorPicker"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import ServicePage from "./service"
import servicesData from "../../data/servicesData"

const ColorPickerPage = () => {
  return (
    <ServicePage HTUData={servicesData[9]}>
      <ColorPicker />
    </ServicePage>
  )
}

export default ColorPickerPage
