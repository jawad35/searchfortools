import React, { useState, useRef } from "react"
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import { ArrowDownCircle, X } from "react-feather"
// import "./Square.css"
import * as htmlToImage from "html-to-image"
import { LargefontList } from "./constants/fontList"
import { fontFamilyList } from "./constants/fontFamilyList"
import handleImageUploadLogo from "../../../utility/GetCompressedLogoImage"
import handleImageUpload from "../../../utility/handleImageUpload"

const SquareImage = () => {
  const [squareStates, setSquareStates] = useState({
    color: "#7DCEB1",
    textColor: "black",
    textColorShow: false,
    EventTitle: "",
    EventDate: "",
    EventLink: "",
    EventSubtitle: "",
    EventImage:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    EventLogoImage: "",
    EventLogoImageStatic:
      "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
    EventLogoImageStyle: true,
    EventSubtitleFontFamily: "Inter Regular",
    EventSubtitleFont: "35",
    EventTitleFontFamily: "Inter Regular",
    EventTitleFont: "60",
    EventTitleTopMargin: "10",
    EventDateFontFamily: "Inter Regular",
    EventDateFont: "50",
    EventLinkFontFamily: "Inter Regular",
    EventLinkFont: "30",
    showColor: false,
    sepratorColor: "black",
    showMainImageError: false,
    showLogoImageError: false
  })
  const {
    color,
    EventTitle,
    EventDate,
    EventLink,
    EventSubtitle,
    EventImage,
    EventSubtitleFontFamily,
    EventSubtitleFont,
    EventDateFont,
    EventDateFontFamily,
    EventLinkFont,
    EventLinkFontFamily,
    EventTitleFont,
    EventTitleFontFamily,
    EventLogoImage,
    EventLogoImageStatic,
    EventLogoImageStyle,
    textColor,
    sepratorColor,
    showMainImageError,
    showLogoImageError,
    EventTitleTopMargin
  } = squareStates
  const onDrag = (color) => {
    setSquareStates({ ...squareStates, color: color })
  }
  const onDragTextColor = (color) => {
    setSquareStates({ ...squareStates, textColor: color })
  }
  const setFontSize = (e) => {
    const { name, value } = e.target
    setSquareStates({ ...squareStates, [name]: value })
  }
  const setFontFamily = (e) => {
    const { name, value } = e.target
    setSquareStates({ ...squareStates, [name]: value })
  }

  const setImageLogoColor = (value) => {
    if (value === "black") {
      setSquareStates({
        ...squareStates,
        EventLogoImageStatic: blacklogo,
        sepratorColor: "black"
      })
    } else {
      setSquareStates({
        ...squareStates,
        EventLogoImageStatic: whitelogo,
        sepratorColor: "white"
      })
    }
  }

  const setImageLogoStyle = (value) => {
    if (value === "1") {
      setSquareStates({ ...squareStates, EventLogoImageStyle: true })
    } else {
      setSquareStates({ ...squareStates, EventLogoImageStyle: false })
    }
  }
  const domEl = useRef(null)
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current)
    // download image
    const link = document.createElement("a")
    link.download = "html-to-img.png"
    link.href = dataUrl
    link.click()
  }
  const onImageError = (e) => {
    e.target.src = ""
  }

  return (
    <div style={{ padding: "40px" }}>
      <Row>
        <Col lg="4" md="4" sm="12">
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Logo Layout</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={(e) => setImageLogoStyle(e.target.value)}
              >
                <option value={1}>style1</option>
                <option value={2}>style2</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Moment Presents Logo Color</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={(e) => setImageLogoColor(e.target.value)}
              >
                <option value={"black"}>Black</option>
                <option value={"white"}>White</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="image">Upload Logo Image</Label>
              <div className="DragContainer">
                <p className="drag-text">Drag and Drop the Logo Image</p>
                <Input
                  type="file"
                  name="localimage"
                  id="localimage"
                  onChange={(e) =>
                    handleImageUploadLogo(e, squareStates, setSquareStates)
                  }
                  className="DragInput"
                />
              </div>
            </FormGroup>
            <FormGroup style={{ position: "relative" }}>
              <Label for="logo">Creator Logo Image</Label>
              {EventLogoImage !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventLogoImage: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              {/* <AlertCircle className="ErrorCircle" style={{color: showLogoImageError ? 'red' : ''}}/> */}
              <Input
                type="text"
                name="logo"
                id="logo"
                placeholder="Enter your logo url"
                style={{
                  border: `1px solid ${showLogoImageError ? "red" : ""}`
                }}
                value={EventLogoImage}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventLogoImage: e.target.value,
                    showLogoImageError: false
                  })
                }
              />
              <p className="ErrorMsg">
                {showLogoImageError
                  ? "Image size should be less than (3MB)"
                  : ""}
              </p>
            </FormGroup>
            <FormGroup>
              <Label for="image">Upload Event Image</Label>
              <div className="DragContainer">
                <p className="drag-text">Drag and Drop the Event Image</p>
                <Input
                  type="file"
                  name="localimage"
                  id="localimage"
                  onChange={(e) =>
                    handleImageUpload(e, squareStates, setSquareStates)
                  }
                  className="DragInput"
                />
              </div>
            </FormGroup>
            <FormGroup style={{ position: "relative" }}>
              <Label for="image">Event Image</Label>
              {EventImage !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventImage: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              <Input
                type="text"
                name="image"
                id="image"
                placeholder="Enter your event image url"
                value={EventImage}
                style={{
                  border: `1px solid ${showMainImageError ? "red" : ""}`
                }}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventImage: e.target.value,
                    showMainImageError: false
                  })
                }
              />
              <p className="ErrorMsg">
                {showMainImageError
                  ? "Image size should be less than (3MB)"
                  : ""}
              </p>
            </FormGroup>
            <Row>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label for="EventTitle">Bottom Hue Color</Label>
                  <Input
                    id="color1"
                    className="ColorBox"
                    value={color}
                    type="color"
                    onChange={(e) => onDrag(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" md="6">
                <FormGroup>
                  <Label for="EventTitle">Text Color</Label>
                  <Input
                    id="color1"
                    className="ColorBox"
                    value={textColor}
                    type="color"
                    onChange={(e) => onDragTextColor(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup style={{ position: "relative" }}>
              <Label for="EventTitle">Event Title</Label>
              {EventTitle !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventTitle: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              <Input
                type="text"
                name="EventTitle"
                id="EventTitle"
                placeholder="Enter your event title"
                value={EventTitle}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventTitle: e.target.value
                  })
                }
              />
            </FormGroup>
            <FormGroup style={{ position: "relative" }}>
              <Label for="EventTitle">Event Title Top Margin</Label>
              {EventTitle !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventTitle: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              <Input
                type="text"
                name="EventTitle"
                id="EventTitle"
                placeholder="Enter your event title"
                value={EventTitleTopMargin}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventTitleTopMargin: e.target.value
                  })
                }
              />
            </FormGroup>
            <Row>
              <Col lg="8" md="8">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventTitleFontFamily}
                    name="EventTitleFontFamily"
                    id="exampleSelect"
                    onChange={(e) => setFontFamily(e)}
                  >
                    {fontFamilyList.map((item) => (
                      <option value={item} key={item}>{`${item}`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="4" md="4">
                <FormGroup>
                  <FormGroup>
                    <Input
                      type="select"
                      value={EventTitleFont}
                      name="EventTitleFont"
                      id="exampleSelect"
                      onChange={(e) => setFontSize(e)}
                    >
                      {LargefontList.map((item) => (
                        <option value={item} key={item}>{`${item} px`}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup style={{ position: "relative" }}>
              <Label for="EventTitle">Event Subtitle</Label>
              {EventSubtitle !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventSubtitle: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              <Input
                type="text"
                name="EventTitle"
                id="EventTitle"
                placeholder="Enter your event title"
                value={EventSubtitle}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventSubtitle: e.target.value
                  })
                }
              />
            </FormGroup>
            <Row>
              <Col lg="8" md="8">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventSubtitleFontFamily}
                    name="EventSubtitleFontFamily"
                    id="exampleSelect"
                    onChange={(e) => setFontFamily(e)}
                  >
                    {fontFamilyList.map((item) => (
                      <option value={item} key={item}>{`${item}`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="4" md="4">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventSubtitleFont}
                    name="EventSubtitleFont"
                    id="exampleSelect"
                    onChange={(e) => setFontSize(e)}
                  >
                    {LargefontList.map((item) => (
                      <option value={item} key={item}>{`${item} px`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup style={{ position: "relative" }}>
              <Label for="EventTitle">Date</Label>
              {EventDate !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventDate: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              <Input
                type="text"
                name="EventDate"
                id="EventDate"
                placeholder="Enter your event title"
                value={EventDate}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventDate: e.target.value
                  })
                }
              />
            </FormGroup>
            <Row>
              <Col lg="8" md="8">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventDateFontFamily}
                    name="EventDateFontFamily"
                    id="exampleSelect"
                    onChange={(e) => setFontFamily(e)}
                  >
                    {fontFamilyList.map((item) => (
                      <option value={item} key={item}>{`${item}`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="4" md="4">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventDateFont}
                    name="EventDateFont"
                    id="exampleSelect"
                    onChange={(e) => setFontSize(e)}
                  >
                    {LargefontList.map((item) => (
                      <option value={item} key={item}>{`${item} px`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup style={{ position: "relative" }}>
              <Label for="EventTitle">Ticket Call-to-action</Label>
              {EventLink !== "" ? (
                <span
                  onClick={() => {
                    setSquareStates({ ...squareStates, EventLink: "" })
                  }}
                  style={{ marginTop: "2px" }}
                  className="clearbtn"
                >
                  <X size={"20"} />
                </span>
              ) : null}
              <Input
                type="text"
                name="EventTitle"
                id="EventTitle"
                value={EventLink}
                onChange={(e) =>
                  setSquareStates({
                    ...squareStates,
                    EventLink: e.target.value
                  })
                }
                placeholder="Enter your event title"
              />
            </FormGroup>
            <Row>
              <Col lg="8" md="8">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventLinkFontFamily}
                    name="EventLinkFontFamily"
                    id="exampleSelect"
                    onChange={(e) => setFontFamily(e)}
                  >
                    {fontFamilyList.map((item) => (
                      <option value={item} key={item}>{`${item}`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col lg="4" md="4">
                <FormGroup>
                  <Input
                    type="select"
                    value={EventLinkFont}
                    name="EventLinkFont"
                    id="exampleSelect"
                    onChange={(e) => setFontSize(e)}
                  >
                    {LargefontList.map((item) => (
                      <option value={item} key={item}>{`${item} px`}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col lg="8" md="8" sm="12">
          <div className="MainContaine">
            <div
              id="squareImageWrapper"
              ref={domEl}
              style={{
                width: "100%",
                height: "100%",
                background: textColor,
                padding: "30px"
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "none"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    borderRadius: "20px",
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, ${color} 100%)`
                  }}
                ></div>
                <p
                  style={{
                    position: "absolute",
                    color: "white",
                    marginTop: "22vw",
                    marginBottom: "5vw",
                    fontSize: `${EventSubtitleFont}px`,
                    zIndex: 3
                  }}
                  className="h6"
                >
                  Hello text
                </p>
                {EventLogoImage ? (
                  <div
                    style={{
                      position: "absolute",
                      marginTop: "30vw",
                      marginBottom: "5vw",
                      zIndex: 3
                    }}
                  >
                    <img
                      style={{ maxHeight: "4.5vw", maxWidth: "4.5vw" }}
                      src={EventLogoImage}
                      alt=""
                    />
                  </div>
                ) : (
                  <p
                    style={{
                      position: "absolute",
                      color: "white",
                      marginTop: `${EventTitleTopMargin}vw`,
                      fontSize: `${EventTitleFont}px`,
                      padding: "20px",
                      zIndex: 3
                    }}
                    className="h6"
                  >
                    Hello Title
                  </p>
                )}

                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                    width: "100%"
                  }}
                  src={EventImage}
                  alt="f"
                />
                {/* <div class="ribbon ribbon-top-left">
                  <span>ribbon</span>
                </div> */}
              </div>
            </div>
            <Button
              onClick={() => downloadImage()}
              className="btn-icon btn-sm btncenter"
              id="downloader"
            >
              <ArrowDownCircle size={16} className="mr-3" /> Downalod
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SquareImage
