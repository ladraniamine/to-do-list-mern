const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const task = require('./routes/task')

const URI = "mongodb://localhost:27017/mern-to-do-list"
//mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(URI , { useNewUrlParser: true })
        .then(console.log('mongoose connnected'))
        .catch(err => console.log(err.message))
//middleware
app.use(express.json())
app.use(morgan('tiny'))

//url 
app.use('/task' , task)

//express connection
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`app rouning on port ${PORT}`)
})