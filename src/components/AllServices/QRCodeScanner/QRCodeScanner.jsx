import React, { useRef, useState } from "react"
import QRScanner from "qr-scanner"
import { toast } from "react-toastify"
import CopyToClipboard from "react-copy-to-clipboard"
import CustomAlertMessage from "../../common/customAlertMessage/CustomAlertMessage"
const QRCodeScanner = ({ padd }) => {
  const [scanResultFile, setScanResultFile] = useState("")
  const [image, setImage] = useState([])
  const qrRef = useRef()
  const handleScanFile = async (result) => {
    const file = result.target.files[0]
    setImage(URL.createObjectURL(file))
    const scaneResult = await QRScanner.scanImage(file)
    setScanResultFile(scaneResult)
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
                  <h3 className="tpds-title">QR Code Scanner</h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">
                  <form>
                    <div className="row">
                      <div
                        className="col-xxl-6 col-xl-6 col-md-6"
                        style={{ margin: "0px auto", textAlign: "center" }}
                      >
                        <div className="col-xxl-12">
                          <div>
                            <img
                              src={image}
                              id="image-display"
                              alt=""
                              className="ext-img"
                            />

                            <div className="contact__btn mt-3">
                              <label className="tp-solid-btn" for="qr-image">
                                Scane Image
                              </label>
                              <input
                                type={"file"}
                                ref={qrRef}
                                accept=".png"
                                onChange={(e) => handleScanFile(e)}
                                className="d-none"
                                id="qr-image"
                              />
                            </div>
                          </div>
                          {scanResultFile && (
                            <CustomAlertMessage
                              title={"Click to Copy the text"}
                            />
                          )}
                          <div className="mt-4">
                            <CopyToClipboard
                              text={scanResultFile}
                              onCopy={() => toast.success("Color Code Copied")}
                            >
                              <span>
                                <strong>{scanResultFile}</strong>
                              </span>
                            </CopyToClipboard>
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

export default QRCodeScanner
