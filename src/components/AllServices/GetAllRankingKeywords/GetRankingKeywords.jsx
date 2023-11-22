import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schematext } from "../../common/schema"
import { BASE_URL } from "../../../utility/Urls"
// import DomainResultCard from "./DomainResultCard"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const GetTopKeywords = ({ padd }) => {
  const [domainavailable, setDomainAvailable] = useState(false)
  const GetYouTubeTags = (values) => {
    axios
      .post(`${BASE_URL}/get-top-keywords/`, values)
      .then((res) => {
        // if (res.data?.WebPageData?.Access) {
        //   setDomainAvailable(false)
        // } else {
        //   setDomainAvailable(true)
        // }
      })
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        text: ""
      },
      validationSchema: schematext,
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
                  <h3 className="tpds-title">Get Top Keywords</h3>
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
                            id="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Type your keywords"
                          />
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            <button type="submit" className="tp-solid-btn">
                              Get
                            </button>
                          </div>
                          <div>
                            <div>
                              {/* <DomainResultCard isAvailable={domainavailable} /> */}
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

export default GetTopKeywords
