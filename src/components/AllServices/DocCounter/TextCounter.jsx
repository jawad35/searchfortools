import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schematext } from "../../common/schema"
import ResultTable from "./ResultTable"
import ServiceWrapper from "../ServicesWrapper"
import servicesData from "../../../data/servicesData"
import { BASE_URL } from "../../../utility/Urls"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const TextCounter = () => {
  const [textcount, setTextCount] = useState("")
  const [isLoaded, setIsLoadedData] = useState(false)
  const GetTextCounter = (values) => {
    axios
      .post(`${BASE_URL}/text-counter/`, values)
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
  return (
    <>
      <ServiceWrapper title={servicesData[7].title}>
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
                ></textarea>
                {/* {touched.name && <ErrorMsg error={errors.name} />} */}
              </div>
              <div className="col-xxl-12">
                <div className="contact__btn">
                  <button type="submit" className="tp-solid-btn">
                    Get
                  </button>
                </div>
                <div>
                  {textcount !== "" && (
                    <div>
                      <h6 className="step-title mt-40">Text Details</h6>
                      <ResultTable textCounter={textcount} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </ServiceWrapper>
    </>
  )
}

export default TextCounter
