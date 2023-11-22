import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import { schemadomainavaialbility } from "../../common/schema"
import DomainResultCard from "./DomainResultCard"
import { toast } from "react-toastify"
import ErrorMsg from "../../common/ErrorMsg"

import { ServerErrorMsg } from "../../../utility/commonStringsMsg"
import CustomLoader from "../../common/Loader/CustomLoader"
import { BASE_API_URL } from "../../../utility/Urls"
const DomainAvailabilityChecker = ({ padd }) => {
  const [domainavailable, setDomainAvailable] = useState("")
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [domain, setDomainName] = useState("")

  const GetDomainAvailablity = (values) => {
    setIsDataLoaded(true)
    setDomainAvailable("")
    const url = values.url.replace(/\s/g, "")
    const extractedUrl = url.replace(/[^a-z0-9]/gi, "").concat(values.extension)
    setDomainName(extractedUrl)
    axios
      .post(`${BASE_API_URL}/get-domain-info/`, { url: extractedUrl })
      .then((res) => {
        if (res.data?.WebPageData?.Success) {
          if (res.data?.WebPageData?.domain?.domain_name !== null) {
            setIsDataLoaded(false)
            setDomainAvailable(false)
          } else {
            setIsDataLoaded(false)
            setDomainAvailable(true)
          }
        } else {
          setIsDataLoaded(false)
          setDomainAvailable(true)
        }
      })
      .catch((e) => {
        setIsDataLoaded(false)
        toast.error(ServerErrorMsg)
      })
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: "",
        extension: ".com"
      },
      validationSchema: schemadomainavaialbility,
      onSubmit: GetDomainAvailablity
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
                  <h3 className="tpds-title">Domain Availability Checker</h3>
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
                        <div className="contact__form-input d-flex">
                          <div className="w-100">
                            <input
                              id="url"
                              value={values.url}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              placeholder="Enter just domain name"
                            />
                            {touched.url && <ErrorMsg error={errors.url} />}
                          </div>
                          <div>
                            <input
                              id="extension"
                              value={values.extension}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                              placeholder="Add Domain Extension?"
                              style={{
                                width: "100px",
                                border: "1px solid grey"
                              }}
                            />
                            {touched.extension && (
                              <ErrorMsg error={errors.extension} />
                            )}
                          </div>
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            <button type="submit" className="tp-solid-btn">
                              Check
                            </button>
                          </div>
                          <div>
                            {isDataLoaded ? (
                              <CustomLoader />
                            ) : (
                              <DomainResultCard
                                isAvailable={domainavailable}
                                domain={domain}
                              />
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

export default DomainAvailabilityChecker
