import React from "react"
import { useRef } from "react"
import ReactToPrint from "react-to-print"

const InvoicePreview = ({ comBStates, values }) => {
  const {
    total,
    vatRate,
    companyImage,
    list,
    name,
    email,
    address,
    website,
    phone,
    businessno,
    websiteurl,
    bankaccount,
    profession,
    cemail,
    cname,
    caddress,
    cphone,
    invoiceno,
    invoicedate,
    invoiceduedate,
    additionalnotes,
    termscondition
  } = comBStates
  const componentRef = useRef()
  const twoDecimals = (unit) => Number(unit).toFixed(2)
  const getPercentage = Number(vatRate) / 100
  const correctPercentage = 1 + getPercentage
  const amountIncludingVat = Number(total) * correctPercentage
  return (
    <div className="col-xxl-7 col-xl-7  col-lg-7 in">
      <div>
        <ReactToPrint
          trigger={() => (
            <button className="printInvoiceBtn my-4">Print / Download</button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div className="contact__info-text">
        <h4>Invoice Preview</h4>
      </div>

      <div
        className="invoice-preview"
        style={{ minHeight: "1095px", marginTop: "40px" }}
      >
        <div
          className="p-lg-4 p-sm-4 p-md-4 p-xl-4 white-bg"
          ref={componentRef}
        >
          <div className="row">
            {/* <div className="col-xl-6 col-lg-6 col-md-6 d-xl-none d-lg-none d-md-none d-sm-block">
          <div className="contact__info-text ">
            <h4>Invoice</h4>
            <p>Invoice No: 2</p>
          </div>
        </div> */}
            <div className="col-xl-12 col-lg-12 col-md-12 ">
              <div>
                <img
                  // src="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs="
                  src={companyImage}
                  alt="cta-img"
                  width={150}
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="contact__info-text d-flex justify-content-end invoice-date">
                <div>
                  <p>
                    <strong>Invoice No</strong>
                  </p>
                  <p>
                    <strong>Invoice Date</strong>
                  </p>
                  <p>
                    <strong>Due Date</strong>
                  </p>
                </div>
                <div className="mx-2">
                  <p>{values.invoiceno}</p>
                  <p>{values.invoicedate}</p>
                  <p>{values.invoiceduedate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <p>
                <strong>From:</strong>
              </p>
              <div className="user-invoice-details m-2">
                {values.name && <p>Name: {values.name}</p>}
                {values.address && <p>Address: {values.address}</p>}
                {values.email && <p>Email: {values.email}</p>}
                {values.phone && <p>Phone: {values.phone}</p>}
                {values.businessno && (
                  <p>Business Number: {values.businessno}</p>
                )}
                {values.bankaccount && (
                  <p>Bank Account: {values.bankaccount}</p>
                )}
                {values.bankname && <p>Bank Name: {values.bankname}</p>}
                {values.websiteurl && <p>Website: {values.websiteurl}</p>}
                {values.profession && <p>Profession: {values.profession}</p>}
              </div>
            </div>
            <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <p>
                <strong>Bill To:</strong>
              </p>
              <div className="user-invoice-details m-2">
                {values.cname && <p>Name: {values.cname}</p>}
                {values.caddress && <p>Address: {values.caddress}</p>}
                {values.cemail && <p>Email: {values.cemail}</p>}
                {values.cphone && <p>Phone: {values.cphone}</p>}
              </div>
            </div>
          </div>
          <div className="invoice-table table-responsive">
            <table className="table">
              <thead>
                <tr className="bg-gray-100 p-1">
                  <td className="font-bold">Description</td>
                  <td className="font-bold">Quantity</td>
                  <td className="font-bold">Price</td>
                  <td className="font-bold amount">Amount</td>
                </tr>
              </thead>
              {list.map(({ id, description, quantity, price, amount }) => (
                <tbody>
                  <tr>
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{amount}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
            <div className="contact__info-text d-flex invoice-date">
              <div>
                <p>SubTotal</p>
                <p>Sales Tax {values.vattaxrate}%</p>
                <p>Total</p>
              </div>
              <div className="mx-2">
                <p>
                  <strong>{twoDecimals(total)}</strong>
                </p>
                <p>
                  <strong>
                    {twoDecimals(amountIncludingVat - Number(total))}
                  </strong>
                </p>
                <p>
                  <strong>{twoDecimals(amountIncludingVat)}</strong>
                </p>
              </div>
            </div>
          </div>
          {values.additionalnotes && (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <p>
                <strong>Notes:</strong>
              </p>
              <p>{values.additionalnotes}</p>
            </div>
          )}

          {values.termscondition && (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 invoice-terms">
              <p>
                <strong>Terms & Conditions:</strong>
              </p>
              <p>{values.termscondition}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview
