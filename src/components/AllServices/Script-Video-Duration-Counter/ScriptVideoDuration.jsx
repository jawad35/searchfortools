import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schematext } from "../../common/schema"
import ResultTable from "./ResultTable"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const ScriptVideoDurationCounter = ({ padd }) => {
  const [textcount, setTextCount] = useState("")
  const [isLoaded, setIsLoadedData] = useState(false)
  const GetTextCounter = (values) => {
    axios
      .post(`http://localhost:8000/api/text-counter/`, values)
      .then((res) => {
        if (res.data?.TextCountData?.Success) {
          setIsLoadedData(true)
          setTextCount(res.data?.TextCountData)
          setIsLoadedData(false)
        } else {
          //   alert(res.data?.WebPageData?.ErrorMsg)
        }
      })
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        text: ""
      },
      validationSchema: schematext,
      onSubmit: GetTextCounter
    })
  if (isLoaded) {
    return <p>loading</p>
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
                  <h3 className="tpds-title">
                    Script Video Duration Calculator
                  </h3>
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
                            placeholder="Paste  Your Script/Text"
                          ></textarea>
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            <button type="submit" className="tp-solid-btn">
                              Calculate
                            </button>
                          </div>
                          <div>
                            {textcount !== "" && (
                              <div>
                                <h6 className="step-title mt-40">
                                  Script Details
                                </h6>
                                <ResultTable textCounter={textcount} />
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

export default ScriptVideoDurationCounter
