import React, { useState, useRef } from "react"
import { useFormik } from "formik"
import { vatschema } from "../../common/schema"
import ErrorMsg from "../../common/ErrorMsg"
import { Badge } from "react-bootstrap"
const Calculator = () => {
  const CalculateVat = (values) => {}
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        amount: "0",
        vat: "20"
      },
      validationSchema: vatschema,
      onSubmit: CalculateVat
    })
  const getPercentage = Number(values.vat) / 100
  const correctPercentage = 1 + getPercentage

  const amountIncludingVat = Number(values.amount) * correctPercentage
  const amountExcludingVat = Number(values.amount) / correctPercentage

  const netRef = useRef(null)
  const grossRef = useRef(null)

  const twoDecimals = (unit) => Number(unit).toFixed(2)

  const validation = (unit, pattern) => {
    let valid = false
    if (typeof unit !== "undefined" && typeof unit === "string") {
      valid = !!unit.match(pattern)
    }
    return valid
  }

  const amountIsValid =
    validation(values.amount, /[0-9]/g) && values.amount !== "0"
  const vatRateIsValid = validation(values.vat, /^\d+(.\d)?\d*$/g)

  const validationRules = [amountIsValid, vatRateIsValid]

  const scrollToResult = (result) => {
    const allTrue = validationRules.every((element) => {
      return element === true
    })

    if (allTrue) {
      result.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div
              className="col-xxl-5 col-xl-5 col-md-5"
              style={{ margin: "0px auto" }}
            >
              <div className="contact__form-input">
                <label htmlFor="amount">Amount:</label>
                <input
                  id="amount"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  placeholder="Enter Amount"
                />
                {touched.amount && <ErrorMsg error={errors.amount} />}
              </div>
              <div className="contact__form-input">
                <label htmlFor="vat">Vat Rate:</label>
                <input
                  id="vat"
                  value={values.vat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  placeholder="Enter Vat Rate"
                />
                {touched.vat && <ErrorMsg error={errors.vat} />}
              </div>
              <div className="vat-result row">
                <div className="col-xxl-6 col-xl-6 col-md-6">
                  <p>
                    <strong>Results when adding vat:</strong>
                  </p>
                  <div className="p-2">
                    <p>
                      Gross Amount: <Badge>{twoDecimals(values.amount)}</Badge>
                    </p>
                    <p>
                      Vat%:{" "}
                      <Badge>
                        {twoDecimals(
                          amountIncludingVat - Number(values.amount)
                        )}
                      </Badge>
                    </p>
                    <p>
                      Amount: <Badge>{twoDecimals(amountIncludingVat)}</Badge>
                    </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-md-6">
                  <p>
                    <strong>Results when removing vat:</strong>
                  </p>
                  <div className="p-2">
                    <p>
                      Gross Amount: <Badge>{twoDecimals(values.amount)}</Badge>
                    </p>
                    <p>
                      Vat%:{" "}
                      <Badge>
                        {twoDecimals(
                          Number(values.amount) - amountExcludingVat
                        )}
                      </Badge>
                    </p>
                    <p>
                      Amount: <Badge>{twoDecimals(amountExcludingVat)}</Badge>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Calculator
