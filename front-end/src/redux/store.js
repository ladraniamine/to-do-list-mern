import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice/taskSlice";
const store = configureStore({

    reducer:{
             task:taskSlice
            }

})

export default store