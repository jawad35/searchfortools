import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schemayoutube } from "../../common/schema"
import { BASE_URL, PythonAPiIUrl } from "../../../utility/Urls"
import Formatter from "html-formatter"
import { Copy } from "react-feather"
import { toast } from "react-toastify"
import CopyToClipboard from "react-copy-to-clipboard"
import {
  ServerErrorMsg,
  UrlPlaceHolderWebPage
} from "../../../utility/commonStringsMsg"
import CustomLoader from "../../common/Loader/CustomLoader"

const GetWebpageSourceCode = ({ padd }) => {
  const [sourcecode, setSourceCode] = useState("")
  const [isLoaded, setIsLoadedData] = useState(false)
  const GetTextCounter = (values) => {
    setIsLoadedData(true)
    setSourceCode("")
    axios
      .post(`${BASE_URL}/webpage-source-code/`, values)
      .then((res) => {
        if (res.data?.Success) {
          if ((res.data?.Data?.SourceCode?.length === 0)) {
              setSourceCode("")
              setIsLoadedData(false)
              toast.error(ServerErrorMsg)
          }
          setSourceCode(Formatter.render(res.data?.Data?.SourceCode))
          setIsLoadedData(false)
        } else {
          setTimeout(() => {
            setSourceCode("")
            setIsLoadedData(false)
            toast.error(ServerErrorMsg)
          }, 1000)
        }
      })
      .catch((err) => {
        setSourceCode("")
        setIsLoadedData(false)
        toast.error(ServerErrorMsg)
      })
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: ""
      },
      validationSchema: schemayoutube,
      onSubmit: GetTextCounter
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
                  <h3 className="tpds-title">WebPage Source Code</h3>
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
                            type={"url"}
                            value={values.url}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={UrlPlaceHolderWebPage}
                          ></input>
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn mb-4">
                            <button type="submit" className="tp-solid-btn">
                              Get
                            </button>
                          </div>
                          {sourcecode.length !== 0 && (
                            <>
                              <span className="htmlcodecopybtn">
                                <CopyToClipboard
                                  text={sourcecode}
                                  onCopy={() =>
                                    toast.success("Source Code Copied!")
                                  }
                                >
                                  <Copy size={30} />
                                </CopyToClipboard>
                              </span>
                              <div className="htmlviewer">
                                <pre>
                                  <code>{sourcecode}</code>
                                </pre>
                              </div>
                            </>
                          )}
                          {isLoaded && <CustomLoader />}
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

export default GetWebpageSourceCode
