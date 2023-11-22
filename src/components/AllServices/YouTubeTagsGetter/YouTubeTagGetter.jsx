import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import ErrorMsg from "../../common/ErrorMsg"
import { schemayoutube } from "../../common/schema"
import TagsCard from "./TagsCard"
import CustomLoader from "../../common/Loader/CustomLoader"
import { YouTubeValidator } from "../../../utility/UrlValidator"
import { toast } from "react-toastify"
import {
  ServerErrorMsg,
  UrlPlaceHolderYouTube
} from "../../../utility/commonStringsMsg"
import { BASE_URL } from "../../../utility/Urls"
// import dynamic from 'next/dynamic';
// import {TagInput} from 'reactjs-tag-input'
// const {TagInput} = dynamic(import ("reactjs-tag-input"), { ssr: false })
const YouTubeTagsExtractor = ({ padd }) => {
  const [tags, setTags] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const GetYouTubeTags = (values) => {
    if (YouTubeValidator(values.url)) {
      setIsDataLoaded(true)
      setTags([])
      axios
        .post(`${BASE_URL}/youtube-tags/`, values)
        .then((res) => {
          setTimeout(() => {
            setTags(res.data?.data?.tags.toString().split(","))
            setIsDataLoaded(false)
          }, 1000)
        })
        .catch((error) => {
          setTimeout(() => {
            setTags([])
            setIsDataLoaded(false)
            toast.error(ServerErrorMsg)
          }, 1000)
        })
    } else {
      toast.error(UrlPlaceHolderYouTube)
    }
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
                  <h3 className="tpds-title">YouTube Tags Extractor</h3>
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
                            placeholder="Paste Youtube Video Url"
                          />
                          {/* {touched.name && <ErrorMsg error={errors.name} />} */}
                        </div>
                        <div className="col-xxl-12">
                          <div className="contact__btn">
                            <button type="submit" className="tp-solid-btn">
                              Get Tags
                            </button>
                          </div>
                          <div>
                            {isDataLoaded ? (
                              <CustomLoader />
                            ) : (
                              <TagsCard tags={tags} setTags={setTags} />
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

export default YouTubeTagsExtractor
