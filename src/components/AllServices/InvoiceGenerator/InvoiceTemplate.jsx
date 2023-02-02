import { useFormik } from "formik"
import { Print } from "react-ionicons"
import * as Yup from "yup"
import ErrorMsg from "../../common/ErrorMsg"
import schema from "../../common/schema"
import ReactToPrint from "react-to-print"
import { useRef, useState } from "react"
import TableForm from "./TableForm"
import { useEffect } from "react"
import moment from "moment"
import InvoicePreview from "./InvoicePreview"
const ContactArea = () => {
  const [companyImage, setCompanyImage] = useState("")

  const handleOnSubmit = (values, { resetForm }) => {}
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    values,
    touched,
    resetForm
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      website: "",
      phone: "",
      businessno: "",
      websiteurl: "",
      bankaccount: "",
      bankname: "",
      profession: "",
      cemail: "",
      cname: "",
      caddress: "",
      cphone: "",
      invoiceno: "#1",
      invoicedate: moment(Date.now()).format("YYYY-MM-DD"),
      invoiceduedate: moment(Date.now()).format("YYYY-MM-DD"),
      additionalnotes: "It was great doing business with you.",
      termscondition: "Please make the payment by the due date."
    },
    onSubmit: handleOnSubmit,
    validationSchema: schema
  })
  const [comStates, setComStates] = useState({
    list: [],
    total: "",
    vatRate: "",
    companyImage:
      "https://d28zjh2pk692s7.cloudfront.net/fetch/b_white,bo_1px_solid_white/e_trim:1/e_sharpen:15,q_auto,c_limit,w_400,h_300/https://invoicemaker2-prod.s3.amazonaws.com/account/GSBIYlYKPL/photo/07365e90-89ab-11ed-8eaa-a18e2f2bc1ad.jpg",
    name: "",
    email: "",
    address: "",
    website: "",
    phone: "",
    businessno: "",
    websiteurl: "",
    bankaccount: "",
    profession: "",
    cemail: "",
    cname: "",
    caddress: "",
    cphone: "",
    invoiceno: "#1",
    invoicedate: moment(Date.now()).format("YYYY-MM-DD"),
    invoiceduedate: moment(Date.now()).format("YYYY-MM-DD"),
    additionalnotes: "It was great doing business with you.",
    termscondition: "Please make the payment by the due date."
  })
  useEffect(() => {
    // resetForm({
    //   values: {
    //     ...values,
    //     invoicedate: format(new Date(Date.now()), "yyyy-MM-dd"),
    //     invoiceduedate: format(new Date(Date.now()), "yyyy-MM-dd")
    //   }
    // })
  }, [])

  const handleScanFile = async (result) => {
    const file = result.target.files[0]
    if (file !== undefined) {
      setCompanyImage(URL.createObjectURL(file))
    }
  }

  const ClearInputs = () => {}

  return (
    <>
      <section className="contact__area pt-115 pb-120 invoice-container">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <button className="clear-invoice-btn my-4">Clear Inputs</button>
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <div className="contact__info-text">
                    <h4>Edit Your Invoice</h4>
                  </div>
                </div>

                <p>
                  <strong>Change Company Logo:</strong>
                </p>
                <div className="col-xxl-12 col-xl-12 col-md-12">
                  <label htmlFor="companylogo">Icon Url:</label>
                  <div className="contact__form-input">
                    <input
                      id="companylogo"
                      value={companyImage}
                      onChange={(e) => setCompanyImage(e.target.value)}
                      type="url"
                      placeholder="Paste logo url"
                    />
                  </div>
                </div>
                <div className="contact__btn mt-3 text-center my-4">
                  <label className="tp-solid-btn" for="companyLogo">
                    Upload Logo
                  </label>
                  <input
                    type={"file"}
                    accept=".png"
                    onChange={(e) => handleScanFile(e)}
                    className="d-none"
                    id="companyLogo"
                  />
                </div>
                <p>
                  <strong>Enter Your Details:</strong>
                </p>
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="name">Name:</label>
                        <div className="contact__form-input">
                          <input
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                          />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="address">Address:</label>
                        <div className="contact__form-input">
                          <input
                            id="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="address"
                            placeholder="Your Address"
                          />
                          {touched.address && (
                            <ErrorMsg error={errors.address} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="email">Email:</label>
                        <div className="contact__form-input">
                          <input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Your Email"
                          />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="websiteurl">Website:</label>
                        <div className="contact__form-input">
                          <input
                            id="websiteurl"
                            value={values.websiteurl}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="url"
                            placeholder="Your Website Url"
                          />
                          {touched.websiteurl && (
                            <ErrorMsg error={errors.websiteurl} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="phone">Phone:</label>
                        <div className="contact__form-input">
                          <input
                            id="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="phone"
                            placeholder="Enter Your phone no"
                          />
                          {touched.phone && <ErrorMsg error={errors.phone} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="profession">Profession:</label>
                        <div className="contact__form-input">
                          <input
                            id="profession"
                            value={values.profession}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="profession"
                            placeholder="Enter Your profession"
                          />
                          {touched.profession && (
                            <ErrorMsg error={errors.profession} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="bankaccount">Bank Account No:</label>
                        <div className="contact__form-input">
                          <input
                            id="bankaccount"
                            value={values.bankaccount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Enter Your Bank Account No"
                          />
                          {touched.bankaccount && (
                            <ErrorMsg error={errors.bankaccount} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="bankname">Bank Account Name:</label>
                        <div className="contact__form-input">
                          <input
                            id="bankname"
                            value={values.bankname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Enter Your Bank Name"
                          />
                          {touched.bankname && (
                            <ErrorMsg error={errors.bankname} />
                          )}
                        </div>
                      </div>
                      <p>
                        <strong>Bill to Details:</strong>
                      </p>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="cname">Client Name:</label>
                        <div className="contact__form-input">
                          <input
                            id="cname"
                            value={values.cname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Enter Your Client Name"
                          />
                          {touched.cname && <ErrorMsg error={errors.cname} />}
                        </div>
                      </div>

                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="caddress">Client Address:</label>
                        <div className="contact__form-input">
                          <input
                            id="caddress"
                            value={values.caddress}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="address"
                            placeholder="Enter Your Client Address"
                          />
                          {touched.caddress && (
                            <ErrorMsg error={errors.caddress} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="cemail">Client Email:</label>
                        <div className="contact__form-input">
                          <input
                            id="cemail"
                            value={values.cemail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Enter Your Client Email"
                          />
                          {touched.cemail && <ErrorMsg error={errors.cemail} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="cphone">Client Contact No:</label>
                        <div className="contact__form-input">
                          <input
                            id="cphone"
                            value={values.cphone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="phone"
                            placeholder="Enter Your Client Contact No"
                          />
                          {/* {touched.cphone && <ErrorMsg error={errors.cphone} />} */}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="invoiceno">Invoice No:</label>
                        <div className="contact__form-input">
                          <input
                            id="invoiceno"
                            value={values.invoiceno}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Enter the Invoice No"
                          />
                          {/* {touched.invoiceno && (
                            <ErrorMsg error={errors.invoiceno} />
                          )} */}
                        </div>
                      </div>

                      <p>
                        <strong>Date Details:</strong>
                      </p>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="invoicedate">Invoice Date:</label>
                        <div className="contact__form-input">
                          <input
                            id="invoicedate"
                            value={values.invoicedate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="date"
                            placeholder="Enter Your Invoice Date"
                          />
                          {/* {touched.invoicedate && (
                            <ErrorMsg error={errors.invoicedate} />
                          )} */}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <label htmlFor="invoiceduedate">Due Date:</label>

                        <div className="contact__form-input">
                          <input
                            id="invoiceduedate"
                            value={values.invoiceduedate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="date"
                            placeholder="Enter Your Invoice Due Date"
                          />
                          {/* {touched.invoiceduedate && (
                            <ErrorMsg error={errors.invoiceduedate} />
                          )} */}
                        </div>
                      </div>
                      <p>
                        <strong>Items Details:</strong>
                      </p>
                      <TableForm
                        setComBStates={setComStates}
                        comBStates={comStates}
                      />

                      <div className="col-xxl-12">
                        <label htmlFor="additionalnotes">
                          Additional Notes:
                        </label>
                        <div className="contact__form-input">
                          <textarea
                            id="additionalnotes"
                            value={values.additionalnotes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Write Your Notes"
                          ></textarea>
                          {touched.additionalnotes && (
                            <ErrorMsg error={errors.additionalnotes} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <label htmlFor="termscondition">
                          Terms & Condition:
                        </label>
                        <div className="contact__form-input">
                          <textarea
                            id="termscondition"
                            value={values.termscondition}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Write Your Notes"
                          ></textarea>
                          {touched.termscondition && (
                            <ErrorMsg error={errors.termscondition} />
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <InvoicePreview comBStates={comStates} values={values} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactArea
