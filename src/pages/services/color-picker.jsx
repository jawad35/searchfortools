import React from "react"
import ColorPicker from "../../components/AllServices/Color-Picker/ColorPicker"
import "react-toastify/dist/ReactToastify.css"
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
