import React, { useState } from "react"
import { useFormik } from "formik"
import { schemayoutube } from "../../common/schema"
import { saveAs } from "file-saver"
import { toast } from "react-toastify"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const ImageDownloader = ({ padd }) => {
  const [isValidUrl, setIsValidURl] = useState(true)
  const downloadImage = () => {
    if (isValidUrl) {
      saveAs(values.url, "image.jpg") // Put your image url here.
    } else {
      toast.error("Please enter a valid image url")
    }
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: ""
      },
      validationSchema: schemayoutube,
      onSubmit: downloadImage
    })
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
                  <h3 className="tpds-title">Online Image Downloader</h3>
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
                        <div className="tp-cta-image-wrapper">
                          <div className="tp-cta-iamge mb-30">
                            <div className="tp-cta-image-wrapper">
                              <img
                                src={values.url}
                                alt="Please enter valid url"
                                onError={() => setIsValidURl(false)}
                                onLoad={() => setIsValidURl(true)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="contact__form-input">
                          <input
                            id="url"
                            value={values.url}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Paste Image Url/Address"
                          />
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            <button type="submit" className="tp-solid-btn">
                              Download
                            </button>
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

export default ImageDownloader
