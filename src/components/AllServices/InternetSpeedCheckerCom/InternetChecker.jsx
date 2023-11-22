import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { CheckInternetConnection } from "../../../utility/internetconnectivity"
import CustomLoader from "../../common/Loader/CustomLoader"
import InternetCard from "./InternetCard"
import { BASE_API_URL } from "../../../utility/Urls"
const InternetSpeedChecker = ({ padd }) => {
  const [internetData, setInternetData] = useState("")
  const [isDataLoaded, setisDataLoaded] = useState(false)
  const [isInternet, setisInternet] = useState(false)

  useEffect(() => {
    return () => {
      if (!CheckInternetConnection()) {
        setisInternet(false)
      } else {
        setisInternet(true)
      }
    }
  }, [])

  const GetInternetSpeed = (values) => {
    setisDataLoaded(true)
    setInternetData("")
    axios.get(`${BASE_API_URL}/test-internet-speed/`).then((res) => {
      console.log(res.data)

      if (res.data?.Success) {
        setInternetData(res.data)
        setisDataLoaded(false)
      } else {
        setTimeout(() => {
          setisDataLoaded(false)
          toast.error(
            isInternet
              ? "Oops! Something Wrong with Server"
              : "Oops! Please Check Your Internet Connection"
          )
        }, 1000)
        setInternetData("")
      }
    })
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
                  <h3 className="tpds-title">Internet Speed Checker</h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">
                  <div className="row">
                    <div
                      className="col-xxl-6 col-xl-6 col-md-6"
                      style={{ margin: "0px auto", textAlign: "center" }}
                    >
                      {internetData !== "" && (
                        <InternetCard internetData={internetData} />
                      )}
                      {isDataLoaded && <CustomLoader />}
                      <div
                        className="contact__btn"
                        style={{ marginTop: "60px" }}
                      >
                        <button
                          onClick={() => GetInternetSpeed()}
                          className="tp-solid-btn"
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InternetSpeedChecker
