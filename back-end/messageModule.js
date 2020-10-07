import mongoose from "mongoose";
import validator from "validator";

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  subject: {
    type: String,
    default: "-",
  },
  text: {
    type: String,
    required: true,
    minlength: 5,
  },
});

export default mongoose.model("message", messageSchema);
