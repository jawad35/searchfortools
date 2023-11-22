import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schematext } from "../../common/schema"
import ResultTable from "./ResultTable"
import CustomLoader from "../../common/Loader/CustomLoader"
import { toast } from "react-toastify"
import { BASE_API_URL } from "../../../utility/Urls"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const EmailExtractor = ({ padd }) => {
  const [ExtractedEmails, setExtractedEmails] = useState([])
  const [isLoaded, setIsLoadedData] = useState(false)
  const [isEmailEmpty, setIsEmailEmpty] = useState(false)

  const GetExtractedEmails = (values) => {
    setIsLoadedData(true)
    setExtractedEmails([])
    setIsEmailEmpty(false)
    axios
      .post(`${BASE_API_URL}/emails-extractor/`, values)
      .then((res) => {
        if (res.data?.Success) {
          setTimeout(() => {
            if (res.data?.Data?.ExtractedEmails?.length === 0) {
              setIsEmailEmpty(true)
            } else {
              setIsEmailEmpty(false)
            }
            setIsLoadedData(false)
            setExtractedEmails(res.data?.Data?.ExtractedEmails)
          }, 1000)
        } else {
          //   alert(res.data?.WebPageData?.ErrorMsg)
          setTimeout(() => {
            setIsLoadedData(false)
          }, 1000)
          toast.error("Oops! Something went wrong with Server")
        }
      })
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        text: ""
      },
      validationSchema: schematext,
      onSubmit: GetExtractedEmails
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
                  <h3 className="tpds-title">Emails Extractor</h3>
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
                          <textarea
                            id="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{ height: "300px" }}
                            placeholder="Enter/Paste  Your Text"
                            maxLength={5000}
                          ></textarea>
                          {touched.text && <ErrorMsg error={errors.text} />}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            {isLoaded && <CustomLoader />}
                            {!isLoaded && (
                              <button type="submit" className="tp-solid-btn">
                                Get
                              </button>
                            )}
                          </div>
                          <div>
                            <div>
                              {ExtractedEmails.length !== 0 && (
                                <>
                                  <h6 className="step-title mt-40">
                                    Extracted Emails
                                  </h6>
                                  <ResultTable
                                    ExtractedEmails={ExtractedEmails}
                                  />
                                </>
                              )}
                              {isEmailEmpty && (
                                <h5 className="mt-4">Sorry! No email found</h5>
                              )}
                            </div>
                            <pre>
                              Paragraph element: <p> </p>
                              Body element : <body> </body>
                            </pre>
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

export default EmailExtractor
