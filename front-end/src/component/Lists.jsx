import React,{useEffect} from 'react'
import { checkbox, deleteTask, getalltasks, updatetask } from '../redux/slice/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useCallback } from 'react';

const Lists = () => {
  const {taskdata} = useSelector(state => state.task)
  const dispatch = useDispatch()

  //get all tasks
  useEffect(()=>{
    dispatch(getalltasks())
  },[])
  
  //delete task
  const handledelet = (pass_the_id)=>{
      dispatch(deleteTask({id:pass_the_id}))
  }
  //edite task toggele
  const handleedite = useCallback((id)=>{
   
  const element = document.getElementById(id)
  const show_mode = Array.from(element.getElementsByClassName('show-mode'))
  const edite_mode = Array.from(element.getElementsByClassName('edite-mode'))
     
    const update = show_mode.map(element=>{return  element.style.display})[0]
   
  if(update === "block" || update === ''){
    show_mode.map(element=>{return  element.style.display = 'none'})
    edite_mode.map(element=>{return element.style.display = 'block'})
  }else{
    show_mode.map(element=>{return  element.style.display = 'block'})
    edite_mode.map(element=>{return element.style.display = 'none'})
  }
})

//update task
const handleupdate = (e,id)=>{
  const element = document.getElementById(id)
  const show_mode = Array.from(element.getElementsByClassName('show-mode'))
  const edite_mode = Array.from(element.getElementsByClassName('edite-mode'))

  const content = e.target.nextElementSibling.value
    if(content == ""){
      show_mode.map(element=>{return  element.style.display = 'block'})
      edite_mode.map(element=>{return element.style.display = 'none'})
    }else{
      show_mode.map(element=>{return  element.style.display = 'block'})
      edite_mode.map(element=>{return element.style.display = 'none'})
      dispatch(updatetask({content , id:id}))
    }
}
  //checkbox
  const handlecheckbox = (id)=>{
    dispatch(checkbox({id}))
  }
  return (
    <div className='tasks'>
    {taskdata?taskdata.map((task)=>{
      return  <div className='task' key={task._id} id={task._id}>

          <> {/* show mode  */}
            <input onClick={()=>{handlecheckbox(task._id)}} className='checkbox show-mode' type="checkbox" checked={task.taskfinish}  /> 
            <p className={task.taskfinish?'text show-mode':'show-mode'}>{task.content}</p>
          </>

         <>  {/* edite mode */}
           <button onClick={(e)=>{handleupdate(e,task._id)}} className='update-ok edite-mode'>ok</button>
           <input type="text" className='update-content edite-mode' placeholder='update'/>
         </>

          <div className='fn-e-d'>
              <svg onClick={()=>{handleedite(task._id)}} className='edit' width="25px" height="25px" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.44657 16.8322C7.9447 17.1636 7.69376 17.3292 7.40981 17.3378C7.12585 17.3463 6.86544 17.1959 6.3446 16.8952L4.15541 15.6313C3.63457 15.3306 3.37415 15.1802 3.23955 14.9301C3.10495 14.6799 3.12297 14.3797 3.159 13.7794L3.17275 13.5503C3.22907 12.612 3.25723 12.1429 3.3912 11.6968C3.52517 11.2508 3.76017 10.8437 4.23017 10.0296L6.7859 5.603C7.72871 3.97 8.20012 3.15351 9.00032 2.9391C9.80051 2.72468 10.617 3.19609 12.25 4.1389L12.6349 4.36112C13.8971 5.08984 14.5282 5.4542 14.7947 6.02571C14.8933 6.23716 14.9541 6.46422 14.9744 6.69663C15.0294 7.32483 14.665 7.95592 13.9363 9.2181C13.8452 9.37587 13.7997 9.45476 13.7283 9.48807C13.7018 9.50039 13.6734 9.508 13.6444 9.51054C13.5659 9.51741 13.487 9.47187 13.3292 9.38078L9.81699 7.353C9.61287 7.23515 9.51081 7.17622 9.41078 7.20302C9.31076 7.22982 9.25183 7.33189 9.13398 7.536C9.01613 7.74013 8.9572 7.8422 8.984 7.94222C9.01081 8.04225 9.11287 8.10117 9.31699 8.21902L12.7811 10.219C12.9852 10.3369 13.0873 10.3958 13.1141 10.4958C13.1409 10.5958 13.082 10.6979 12.9641 10.902L11.1584 14.0296C10.6884 14.8437 10.4534 15.2508 10.1341 15.5898C9.81476 15.9288 9.42254 16.1878 8.63809 16.7057L8.44657 16.8322Z" fill="#000000"/>
                  <path d="M6.48205 18.1293C6.01065 18.9458 5.77494 19.354 5.37485 19.4612C4.97475 19.5684 4.5665 19.3327 3.75 18.8613C2.9335 18.3899 2.52526 18.1542 2.41805 17.7541C2.31084 17.354 2.54655 16.9458 3.01795 16.1293L6.48205 18.1293Z" fill="#000000"/>
                  <path d="M17.7075 17.7158C17.3318 17.6781 17.0723 17.6522 16.8158 17.6528C15.7841 17.6554 14.7785 17.9771 13.9368 18.5737C13.7276 18.722 13.5313 18.8938 13.2472 19.1425L13.2098 19.1752C12.7308 19.5943 12.5639 19.7372 12.4015 19.8432C11.6849 20.3112 10.8026 20.4509 9.97653 20.227C9.78931 20.1763 9.58649 20.092 9.00144 19.8412L8.39393 19.5809C7.8863 19.3633 7.29842 19.5985 7.08086 20.1061C6.86331 20.6137 7.09846 21.2016 7.60609 21.4191L8.28007 21.708C8.7736 21.9196 9.11325 22.0653 9.45348 22.1574C10.8303 22.5305 12.3008 22.2977 13.4951 21.5178C13.7903 21.325 14.0683 21.0816 14.4724 20.7279L14.5268 20.6803C14.8622 20.3869 14.978 20.2871 15.0934 20.2053C15.5984 19.8473 16.2018 19.6544 16.8208 19.6528C16.9623 19.6524 17.1145 19.6664 17.5579 19.7108L20.4005 19.995C20.95 20.05 21.4401 19.649 21.495 19.0995C21.55 18.55 21.1491 18.0599 20.5995 18.005L17.7075 17.7158Z" fill="#000000"/>
              </svg>
              <svg onClick={()=>{handledelet(task._id)}} className='delete' width="25px" height="25px" viewBox="0 0 1024 1024" fill="#000000"   version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill="#000000" />
                <path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill="#000000" />
                <path d="M328 340.8l32-31.2 348 348-32 32z" fill="#000000" />
              </svg>
          </div>
       </div>
    }):"there is no task"}
    </div>
  )
}

export default Lists