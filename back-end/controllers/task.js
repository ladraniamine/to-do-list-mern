//get task fn
const {Task , validateTask} = require('../model/task')

const getTask = async(req,res)=>{
  try{
    const tasks = await Task.find().select('-__v')
    const message = "the data is returned successfuly"
    res.json({message , data:tasks})
  }catch(err){
    return res.status(500).json({message: err.message})
  }
}
 
//post task fn
const postTask = async(req,res)=>{
  try{
    const err = validateTask(req.body)
    if(err){
      return res.status(404).json({message: err.message})
    } 
    const createdTask = await Task.create({content:req.body.content})
    res.json({message:"task is created successfuly" , data:createdTask})
  }catch(err){
    return res.status(500).json({message: err.message})
  }
}

//put for content fn
const putForContent =  async(req,res)=>{
  try{
      const err = validateTask(req.body)
      if(err){
        return res.status(404).json({message: err.message})
      }

      const contentUpdated = await Task.findByIdAndUpdate(req.params.id ,{
        content:req.body.content
      },{new:true})
      //in case this task is deosnt exist
      if(!contentUpdated){
        return res.status(404).json({message:"task couldn't founded"})
      }
      res.json(contentUpdated)
  }catch(err){
    return res.status(500).json({message: err.message})
  }
}

//put check task fn
const putCheckTask = async(req,res)=>{
  try{
   const checkTask = await Task.findById(req.params.id)
   if(!checkTask){
    return res.status(404).json({message: "task couldn't founded"})
   }
   const check = checkTask.taskfinish
   let ischecked  = !check

   await Task.findByIdAndUpdate(req.params.id , {taskfinish:ischecked})

   res.json({message:'check task' , data: ischecked})
  }catch(err){
    return res.status(500).json({message: err.message})
  }
}

//delete task fn
const deleteTask = async(req,res)=>{
  try{
   const task = await Task.findByIdAndRemove(req.params.id)
   if(!task){
    return res.status(404).json({message:"we couldn't found this task sorrrrrryyyy"})
   }
   res.json({message:"task deleted" , data:task})
}catch(err){
  return res.status(500).json({message: err.message})
}
}

module.exports = {
  getTask,
  postTask,
  putForContent,
  putCheckTask,
  deleteTask
}