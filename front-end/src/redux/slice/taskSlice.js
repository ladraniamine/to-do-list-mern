import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
//update task
export const updatetask = createAsyncThunk('task/updatetask' , async({content , id},thunkAPI)=>{
  const {rejectWithValue, dispatch} = thunkAPI
  try{
      await fetch(`http://localhost:4000/task/content/${id}`, {
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({content})
      })
      dispatch(getalltasks())
  }catch(error){
    return rejectWithValue(error.message)
  }
})
//checkbox checked or not
export const checkbox = createAsyncThunk('task/checkbox' , async({id}, thunkAPI)=>{
  const {rejectWithValue, dispatch} = thunkAPI
  try{
    await fetch(`http://localhost:4000/task/check/${id}` , {
      method:'PUT'
    })
    dispatch(getalltasks())
  }catch(error){
      return rejectWithValue(error.message)
  }
})
//delete task
  export const deleteTask = createAsyncThunk('task/deleteTask' , async({id} , thunkAPI)=>{
    const {rejectWithValue , dispatch} = thunkAPI
    try{
      await fetch(`http://localhost:4000/task/${id}`, {
        method:"DELETE",
      })
      dispatch(getalltasks())
    }catch(error){
      return rejectWithValue(error.message)
    }
  })
//post a task
export const postTask = createAsyncThunk('task/postTask' , async({content},thunkAPI)=>{
      const {rejectWithValue , dispatch} = thunkAPI
      try{
        
         await fetch("http://localhost:4000/task", {
          method:"POST",
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({content})
        })
        dispatch(getalltasks())
      }catch(error){
          return rejectWithValue(error.message)
      }
})

//get all tasks
export const getalltasks =  createAsyncThunk('task/getalltasks',async(args,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
      const res = await fetch("http://localhost:4000/task")
      const data = res.json()
      return data
  }catch(error){
      return rejectWithValue(error.message)
  }
})

export const taskSlice = createSlice({
  name:"task",
  initialState:{taskdata:null , isloading:false},
  extraReducers:{
    [getalltasks.pending]:(state,action)=>{
      state.isloading = true
    },
    [getalltasks.fulfilled]:(state,action)=>{
      state.taskdata = action.payload.data
      state.isloading = false
    },
    [getalltasks.rejected]:(state,action)=>{
      state.isloading = false
    },

  }
})

export default taskSlice.reducer