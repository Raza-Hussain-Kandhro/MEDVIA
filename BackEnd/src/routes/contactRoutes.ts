import { Router } from 'express'
import Contact from '../model/contactModel'

interface ContactBody {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

const router = Router()

// POST route to store contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body as ContactBody
    await new Contact({ name, email, phone, company, message }).save()
    res.status(201).json({ success: true, message: 'Message saved successfully!' })
  } catch (error) {
    console.error('Error saving message:', error)
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
