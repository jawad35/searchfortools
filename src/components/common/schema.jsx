import * as Yup from "yup"

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().min(10).label("Subject"),
  msg: Yup.string().required().min(20).label("Message")
})

export default schema

export const vatschema = Yup.object().shape({
  amount: Yup.string().required().label("Amount"),
  vat: Yup.string().required().label().label("vat")
})

export const schemayoutube = Yup.object().shape({
  url: Yup.string().required().label("url")
})

export const schemadomainavaialbility = Yup.object().shape({
  url: Yup.string().required().label("url"),
  extension: Yup.string().required().label("extension")
})

export const schematext = Yup.object().shape({
  text: Yup.string().required().label("text")
})

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
})
export const contactSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message")
})
export const registerSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match.")
})
