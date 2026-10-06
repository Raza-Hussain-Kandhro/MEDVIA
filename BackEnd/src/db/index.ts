import mongoose from 'mongoose'
import { config } from '../config'

const connectDB = async (): Promise<void> => {
  try {
    const databaseInstance = await mongoose.connect(config.mongoUri, { dbName: config.dbName })
    console.log(`MongoDB connected at host: ${databaseInstance.connection.host}`)
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

export default connectDB
