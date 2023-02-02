import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function TableForm({ setComBStates, comBStates }) {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const { list, total, vatRate } = comBStates

  const handleSubmit = () => {
    if (!description || !quantity || !price) {
      toast.error("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount
      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setComBStates({ ...comBStates, list: [...list, newItems] })
      setIsEditing(false)
    }
  }

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }

    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    let totalAmount = 0
    for (var i = 0; i < list.length; i++) {
      totalAmount += list[i].amount
    }
    setComBStates({ ...comBStates, total: totalAmount })
  }, [list, total])
  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setComBStates({ ...comBStates, list: list.filter((row) => row.id !== id) })
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }

  // Delete function
  const deleteRow = (id) =>
    setComBStates({ ...comBStates, list: list.filter((row) => row.id !== id) })

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <div className="col-xxl-4 col-xl-4 col-md-4">
        <label htmlFor="description">Description:</label>
        <div className="contact__form-input">
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="col-xxl-4 col-xl-4 col-md-4">
        <label htmlFor="quantity">Quantity:</label>
        <div className="contact__form-input">
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-md-4">
        <label htmlFor="price">Price:</label>
        <div className="contact__form-input">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-md-6">
        <label htmlFor="vattaxrate">Vat:</label>
        <div className="contact__form-input">
          <input
            id="vattaxrate"
            value={vatRate}
            onChange={(e) =>
              setComBStates({ ...comBStates, vatRate: e.target.value })
            }
            type="number"
            placeholder="Enter the Invoice No"
          />
          {/* {touched.vattaxrate && (
                            <ErrorMsg error={errors.vattaxrate} />
                          )} */}
        </div>
      </div>
      <div className="contact__btn text-center mb-4">
        <button type="button" onClick={handleSubmit} className="tp-solid-btn">
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </div>
      {/* Table items */}
      <div className="invoice-table table-responsive">
        <table className="table">
          <thead>
            <tr className="bg-gray-100 p-1">
              <td className="font-bold">Description</td>
              <td className="font-bold">Quantity</td>
              <td className="font-bold">Price</td>
              <td className="font-bold amount">Amount</td>
              <td className="font-bold">Actions</td>
            </tr>
          </thead>
          {list.map(({ id, description, quantity, price, amount }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{amount}</td>
                  <td>
                    <button onClick={() => editRow(id)}>
                      <AiOutlineEdit size={20} className="text-success" />
                    </button>
                    <button onClick={() => deleteRow(id)}>
                      <AiOutlineDelete size={20} className="text-danger" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </table>
      </div>
      <div className="text-right" style={{ textAlign: "right" }}>
        <label className="m-2" htmlFor="">
          <strong>Subtotal</strong>
        </label>
        {total}
      </div>
    </>
  )
}
