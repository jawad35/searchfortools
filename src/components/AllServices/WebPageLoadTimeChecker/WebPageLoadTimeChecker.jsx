import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schemayoutube } from "../../common/schema"
import ResultTable from "./ResultTable"
import { BASE_API_URL } from "../../../utility/Urls"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const WebPageLoadTimeChecker = ({ padd }) => {
  const [loadtime, setLoadTime] = useState("")
  const [searchedurl, setSearchedURl] = useState("")
  const [ScriptFilesList, setScriptFilesList] = useState([])
  const [CssFilesList, setCssFilesList] = useState([])

  const GetYouTubeTags = (values) => {
    axios
      .post(`${BASE_API_URL}/webpage-load-checker/`, values)
      .then((res) => {
        if (res.data?.WebPageData?.Access) {
          setLoadTime(res.data?.WebPageData?.LoadTime)
          setScriptFilesList(res.data?.WebPageData?.ScriptFilesUrls)
          setCssFilesList(res.data?.WebPageData?.CssFilesUrls)
          setSearchedURl(res.data?.WebPageData?.SearchUrl)
        } else {
          alert(res.data?.WebPageData?.ErrorMsg)
        }
      })
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: ""
      },
      validationSchema: schemayoutube,
      onSubmit: GetYouTubeTags
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
                  <h3 className="tpds-title">WebPage Load Time Checker</h3>
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
                            placeholder="Paste WebPage Url"
                          />
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            <button type="submit" className="tp-solid-btn">
                              Calculate
                            </button>
                          </div>
                          <div>
                            {loadtime !== "" && (
                              <div>
                                <h6 className="step-title mt-40">
                                  Web Page Speed
                                </h6>
                                <ResultTable
                                  time={loadtime}
                                  url={searchedurl}
                                  cssfiles={CssFilesList}
                                  scriptfiles={ScriptFilesList}
                                />
                              </div>
                            )}
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

export default WebPageLoadTimeChecker
