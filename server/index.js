
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'   //In latest express this is not required . Can be done by express itself.
import cors from 'cors'

import studentRoutes from './routes/student.js'
import learnRoutes from './routes/learn.js'


const app = express()

mongoose.connect("mongodb+srv://Preetam:zOEAeScPU2HVY8Jb@cluster0.u7r6o.mongodb.net/JLA?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("Database connection successful"))
.catch((error)=> console.log("Error occures while connecting", error))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors({
    origin : 'http://localhost:5173'
}))


app.use('/student', studentRoutes)
app.use('/learn', learnRoutes)


app.listen(8000, ()=> console.log(`Server running on port 8000`))  