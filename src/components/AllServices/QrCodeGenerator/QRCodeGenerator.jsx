import React, { useState } from "react"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
// import QRCode from "react-qr-code"
import QRCode from "qrcode.react"
import { schemayoutube } from "../../common/schema"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const QRCodeGenerator = ({ padd }) => {
  const [loadtime, setLoadTime] = useState("")

  const GetYouTubeTags = (values) => {}
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: "www.searchfortools.com"
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
      <section
        className={`tptestimonial-area p-relative pt-110 pb-105 ${
          padd ? padd : ""
        }`}
      >
        <div className="tptestimonial__inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-section-title text-center">
                  <h3 className="tpds-title">QR Code Generator</h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div
                        className="col-xxl-6 col-xl-6 col-md-6"
                        style={{ margin: "0px auto", textAlign: "center" }}
                      >
                        <div className="contact__form-input">
                          <input
                            id="url"
                            value={values.url}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Type here..."
                          />
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div>
                            <div>
                              <QRCode
                                id="hello"
                                value={values.url}
                                size={290}
                                level={"H"}
                                includeMargin={true}
                                style={{ background: "red" }}
                              />
                            </div>
                            <div className="contact__btn">
                              <button
                                onClick={downloadQR}
                                className="tp-solid-btn"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QRCodeGenerator
