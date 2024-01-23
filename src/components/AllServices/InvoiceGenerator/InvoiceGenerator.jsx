import React, { useState } from "react"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
// import QRCode from "react-qr-code"
import QRCode from "qrcode.react"
import { schemayoutube } from "../../common/schema"
import InvoiceTemplate from "./InvoiceTemplate"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const InvoiceGenerator = ({ padd }) => {
  const [loadtime, setLoadTime] = useState("")

  const GetYouTubeTags = (values) => {}
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: "www.brainsees.com"
      },
      validationSchema: schemayoutube,
      onSubmit: GetYouTubeTags
    })
  const downloadQR = () => {
    const canvas = document.getElementById("hello")
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
    let downloadLink = document.createElement("a")
    downloadLink.href = pngUrl
    downloadLink.download = "myqr.png"
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }
  return (
    <>
      <InvoiceTemplate />
    </>
  )
}

export default InvoiceGenerator
