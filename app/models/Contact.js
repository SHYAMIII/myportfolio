import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
export default Contact;
