import { Schema, model } from 'mongoose'

// phone and company are optional here because the contact form marks them optional.
const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

const Contact = model('Contact', contactSchema)
export default Contact
