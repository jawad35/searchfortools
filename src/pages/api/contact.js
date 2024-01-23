import connectDB from "../../lib/mongodb";
import Contact from "../../models/Contact";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { name, email, message, subject } = req.body.data;
  if (!name || !email || !message || !subject) {
    return res.status(203).json({
        msg: "All fields are required!",
        success: false,
      });
  } else {
    try {
        await connectDB();
        await Contact.create({ name, email, message, subject }).then(res => {
            return res.status(201).json({
                msg: "Message sent successfully",
                success: true,
              });
        });
       
      } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          let errorList = [];
          for (let e in error.errors) {
            errorList.push(error.errors[e].message);
          }
          console.log(errorList);
          return res.json({ msg: errorList });
        } else {
          return res.json({ msg: ["Unable to send message."] });
        }
      }
  }
 
}