import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      
      await mongoose.connect('mongodb+srv://brainsees:n9bdT3Xnef0A6zCj@cluster1.rn9rjmn.mongodb.net/brainsees?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;