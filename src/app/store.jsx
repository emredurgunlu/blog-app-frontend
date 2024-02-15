import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import blogsReducer from "../features/blogApiSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogsApi: blogsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})