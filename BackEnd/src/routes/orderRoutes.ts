import { Router } from 'express'
import Order from '../model/order'

const router = Router()

router.post('/create-order', async (req, res) => {
  try {
    const order = await new Order(req.body).save()
    res.status(201).json({ message: 'Order placed successfully', order })
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ message: 'Failed to place order' })
  }
})

export default router
