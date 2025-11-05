
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'   //In latest express this is not required . Can be done by express itself.
import dotenv from 'dotenv'
import cors from 'cors'
import studentRoutes from './routes/student.js'
import learnRoutes from './routes/learn.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Database connection successful"))
.catch((error)=> console.log("Error occures while connecting", error))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors({
    origin : process.env.FRONTEND_URL
}))


app.use('/student', studentRoutes)
app.use('/learn', learnRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))  