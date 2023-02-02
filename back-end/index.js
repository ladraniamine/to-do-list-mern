const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const task = require('./routes/task')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const URI = process.env.URI
//mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(URI , { useNewUrlParser: true })
        .then(console.log('mongoose connnected'))
        .catch(err => console.log(err.message))
//middleware
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

//url 
app.use('/task' , task)

//server production assets
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join('front-end/build')))
//     app.get('*' , (req,res)=>{
//         res.sendFile(path.resolve(__dirname , 'front-end', 'build' , 'index.html'))
//     })
// }
//express connection
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`app rouning on port ${PORT}`)
})