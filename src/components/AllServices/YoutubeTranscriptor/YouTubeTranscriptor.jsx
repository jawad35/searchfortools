import React, { useState } from "react"
import axios from "axios"
import { useFormik } from "formik"
import { schemayoutube } from "../../common/schema"
import ServiceWrapper from "../ServicesWrapper"
import { toast } from "react-toastify"
import { ServerErrorMsg } from "../../../utility/commonStringsMsg"
import CustomLoader from "../../common/Loader/CustomLoader"
const YouTubeTranscriptor = () => {
  const [transcriptText, setTranscriptText] = useState([])
  const [isLoaded, setIsLoadedData] = useState(false)
  function matchYoutubeUrl(url) {
    var p =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    if (url.match(p)) {
      return url.match(p)[1]
    }
    return false
  }
  const GetYoutubeVideoTranscript = (values) => {
    setTranscriptText([])
    const isUrlValid = matchYoutubeUrl(values.url)
    if (isUrlValid) {
      setIsLoadedData(true)
      axios
        .post(`http://localhost:8000/api/youtube-transcript/`, {
          id: isUrlValid
        })
        .then((res) => {
          if (res.data?.Success) {
            setTimeout(() => {
              setTranscriptText(res.data?.Data?.TranscriptData)
              setIsLoadedData(false)
            }, 1000)
          } else {
            setTimeout(() => {
              toast.error("Could not retrieve a transcript for the video")
              setIsLoadedData(false)
            }, 1000)
          }
        })
        .catch((e) => toast.error(ServerErrorMsg))
    } else {
      toast.error("Please Enter the correct Youtube Url")
    }
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        url: ""
      },
      validationSchema: schemayoutube,
      onSubmit: GetYoutubeVideoTranscript
    })
  return (
    <>
      <ServiceWrapper>
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
                  type="url"
                  placeholder="Paste Youtube video url"
                />
                {/* {touched.name && <ErrorMsg error={errors.name} />} */}
              </div>
              <div className="col-xxl-12">
                <div className="contact__btn mb-4">
                  <button type="submit" className="tp-solid-btn">
                    Get Transcript
                  </button>
                </div>
                <div>
                  {transcriptText.length !== 0 && (
                    <div className="contact__form-input">
                      <textarea
                        id="text"
                        value={transcriptText?.map((item) => item.text)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ height: "300px", textTransform: "capitalize" }}
                        placeholder="Enter/Paste  Your Text"
                      ></textarea>
                    </div>
                  )}
                  {isLoaded && <CustomLoader />}
                </div>
              </div>
            </div>
          </div>
        </form>
      </ServiceWrapper>
    </>
  )
}

export default YouTubeTranscriptor
