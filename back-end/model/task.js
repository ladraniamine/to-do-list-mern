const mongoose = require('mongoose')
const joi = require('joi')

const taskSchema = new mongoose.Schema({
    content:{
      type:String,
      required:true,
      minlength:3,
      maxlength:60
    },
    taskfinish:{
      type:Boolean,
      default:false
    }
},{
  timestamps:true
})

const Task = mongoose.model('Task' , taskSchema)

//validate task
const validateTask = (body)=>{
 const schema =  joi.object({
    content:joi.string().required().max(60).min(3)
  })
  const {error} = schema.validate(body)
  return error
}

module.exports = {Task , validateTask}