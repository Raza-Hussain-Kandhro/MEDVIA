import express from 'express'
import cors from 'cors'
import { config } from './config'
import { isAllowedOrigin } from './cors'
import Product from './model/product.model'
import Blog from './model/blog'
import orderRoutes from './routes/orderRoutes'
import contactRoutes from './routes/contactRoutes'

export const cityDeliveryFees = [
  { name: 'Sindh', deliveryFee: 220 },
  { name: 'Punjab', deliveryFee: 520 },
  { name: 'Balochistan', deliveryFee: 520 },
  { name: 'KPK', deliveryFee: 520 },
]

export function createApp(): express.Express {
  const app = express()

  app.use(
    cors({
      origin: (origin, callback) => {
        // Requests without an Origin header (curl, same-origin, health checks) are allowed.
        callback(null, origin === undefined || isAllowedOrigin(origin, config.corsOrigins))
      },
    }),
  )
  app.use(express.json())

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', commit: config.commitSha })
  })

  app.get('/api/delivery/provinces', (_req, res) => {
    res.json({ provinces: cityDeliveryFees })
  })

  app.use('/api/orders', orderRoutes)
  app.use('/api/contact', contactRoutes)

  // BLOG API ENDPOINTS
  app.get('/api/all_blogs', async (_req, res) => {
    try {
      res.json(await Blog.find())
    } catch (error) {
      console.error('Error loading blogs:', error)
      res.status(500).json({ message: 'Failed to load blogs' })
    }
  })

  app.post('/api/add_blog', async (req, res) => {
    try {
      const blog = await Blog.create(req.body)
      res.json({ new_blog: blog })
    } catch (error) {
      console.error('Error adding blog:', error)
      res.status(500).json({ message: 'Failed to add blog' })
    }
  })

  // PRODUCTS API ENDPOINTS
  app.get('/api/product_details', async (_req, res) => {
    try {
      res.json(await Product.find())
    } catch (error) {
      console.error('Error loading products:', error)
      res.status(500).json({ message: 'Failed to load products' })
    }
  })

  app.post('/api/add_product_details', async (req, res) => {
    try {
      res.json(await Product.create(req.body))
    } catch (error) {
      console.error('Error adding product:', error)
      res.status(500).json({ message: 'Failed to add product' })
    }
  })

  return app
}
