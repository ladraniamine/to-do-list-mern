import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice/taskSlice";
const store = configureStore({

    reducer:{
             task:taskSlice
            },
            devTools: false
})

export default store