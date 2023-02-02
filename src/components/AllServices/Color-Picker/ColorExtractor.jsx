import { useState, useEffect } from "react"
import { ColorExtractor } from "react-color-extractor"
import CopyToClipboard from "react-copy-to-clipboard"
import { toast } from "react-toastify"
import CustomAlertMessage from "../../common/customAlertMessage/CustomAlertMessage"

// Home
const ColorImageExtractor = () => {
  const [hex, setHex] = useState("#ffffff")
  const [colors, setColors] = useState([])
  const [ucolors, setUColors] = useState([])
  const [extractcolors, setExtractColors] = useState([])
  const [image, setImage] = useState("")

  // get cordinates of mouse
  const getCords = (cords) => {
    let x = 0,
      y = 0
    // chrome
    if (cords.offsetX) {
      x = cords.offsetX
      y = cords.offsetY
    }
    // firefox
    else if (cords.layerX) {
      x = cords.layerX
      y = cords.layerY
    }
    return { x, y }
  }

  // get params of mouse
  const getColorParams = (event, element, bol) => {
    let cords = getCords(event)
    let canvas = document.querySelector("#cs")
    let thumb = document.querySelector(".ext-img")
    thumb.crossOrigin = "Anonymous"

    useCanvas(canvas, thumb, () => {
      // get image data
      let params = canvas.getContext("2d")
      params = params.getImageData(cords.x, cords.y, 1, 1)
      params = params.data
      // get color
      let bg = rgbToHex(params[0], params[1], params[2])
      // set color
      setHex(bg)
      // if click push new color
      if (bol) setColors((colors) => [...colors, bg])
      // add background in body
      if (element) element.style.background = bg
    })
  }
  useEffect(() => {
    setUColors([...new Set(colors)])
  }, [colors])
  useEffect(() => {
    const inputFile = document.querySelector("#image-input")
    const displayFile = document.querySelector(".ext-img")
    const preview = document.querySelector(".preview")
    // getnerate image on select file
    generateImage(inputFile, displayFile)
    // click function
    displayFile.addEventListener(
      "click",
      (event) => {
        getColorParams(event, false, true)
      },
      false
    )
    // preview function mousemove
    displayFile.addEventListener(
      "mousemove",
      (event) => {
        getColorParams(event, preview, false)
      },
      false
    )
  }, [])
  const onColorChanged = (colors) => {
    setExtractColors(colors)
  }
  function generateImage(inputFile, displayFile) {
    // demo img
    let imgInput = inputFile,
      db = window.localStorage

    // check if exists image-base64
    if (!db.getItem("image-base64")) {
      let t = setTimeout(() => {
        db.setItem("image-base64", displayFile.getAttribute("src"))
        clearTimeout(t)
      }, 100)
    }

    // Restore image src from local storage
    const updateUi = () => {
      var t = setTimeout(() => {
        displayFile.src = db.getItem("image-base64")
        setImage(db.getItem("image-base64"))
        clearTimeout(t)
      }, 200)
    }

    // on select file render image preview
    const bindUi = () => {
      imgInput.addEventListener(
        "change",
        function () {
          if (this.files.length) {
            const reader = new FileReader()
            reader.onload = (e) => {
              db.setItem("image-base64", e.target.result)
              displayFile.src = e.target.result
              setImage(e.target.result)
              updateUi()
            }
            // generate image data uri
            reader.readAsDataURL(this.files[0])
          }
        },
        false
      )
    }

    // update firdst
    updateUi()
    // select file
    bindUi()
  }

  return (
    <div className="main">
      <div className="maincontainer">
        {ucolors
          ? ucolors.map((item) => {
              let style = {
                background: item
              }
              return (
                <CopyToClipboard
                  text={item}
                  onCopy={() => toast.success("Color Code Copied")}
                >
                  <div style={style} className="color">
                    <span>{item}</span>
                  </div>
                </CopyToClipboard>
              )
            })
          : ""}
      </div>
      <div className="maincontainer">
        <div className="preview"></div>

        <ColorExtractor getColors={onColorChanged}>
          <img src={image} id="image-display" alt="" className="ext-img" />
        </ColorExtractor>
        <div
          style={{
            marginTop: 20
          }}
        >
          <div>
            <p>These Colors Extracted From Image</p>
            {extractcolors
              ? extractcolors.map((color, item) => {
                  let style = {
                    background: color
                  }
                  return (
                    <CopyToClipboard
                      text={color}
                      onCopy={() => toast.success("Color Code Copied")}
                    >
                      <div style={style} className="color">
                        <span>{color}</span>
                      </div>
                    </CopyToClipboard>
                  )
                })
              : ""}
          </div>
        </div>
        <input type="file" id="image-input" />
        <div className="contact__form-input">
          <p>Enter your Image </p>
          <input
            id="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Paste image Url/Address"
          />
        </div>
        <div
          className="contact__btn mt-4"
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <label className="tp-solid-btn" for="image-input" id="fake">
            Upload Your Image
          </label>
        </div>
      </div>
      <canvas id="cs"></canvas>
    </div>
  )
}
export default ColorImageExtractor
/** Functions
----------------------------*/
// canvas function
function useCanvas(el, image, callback) {
  el.width = image.width // img width
  el.height = image.height // img height
  // draw image in canvas tag
  el.getContext("2d").drawImage(image, 0, 0, image.width, image.height)
  return callback()
}
// rgb tox thex color
function rgbToHex(r, g, b) {
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)
  let hex = []
  if (r.length === 1) {
    hex.push("0" + r)
  } else {
    hex.push(r)
  }
  if (g.length === 1) {
    hex.push("0" + g)
  } else {
    hex.push(g)
  }
  if (b.length === 1) {
    hex.push("0" + b)
  } else {
    hex.push(b)
  }
  const completehex = hex.join().replaceAll(",", "")
  return "#" + completehex
}
// generate image on file select
function generateImage(inputFile, displayFile) {
  // demo img
  let imgInput = inputFile,
    db = window.localStorage

  // check if exists image-base64
  if (!db.getItem("image-base64")) {
    let t = setTimeout(() => {
      db.setItem("image-base64", displayFile.getAttribute("src"))
      clearTimeout(t)
    }, 100)
  }

  // Restore image src from local storage
  const updateUi = () => {
    var t = setTimeout(() => {
      displayFile.src = db.getItem("image-base64")
      clearTimeout(t)
    }, 200)
  }

  // on select file render image preview
  const bindUi = () => {
    imgInput.addEventListener(
      "change",
      function () {
        if (this.files.length) {
          const reader = new FileReader()
          reader.onload = (e) => {
            db.setItem("image-base64", e.target.result)
            displayFile.src = e.target.result
            updateUi()
          }
          // generate image data uri
          reader.readAsDataURL(this.files[0])
        }
      },
      false
    )
  }

  // update firdst
  updateUi()
  // select file
  bindUi()
}
