import { config } from './config'
import connectDB from './db'
import { createApp } from './app'

void connectDB().then(() => {
  createApp().listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
  })
})
