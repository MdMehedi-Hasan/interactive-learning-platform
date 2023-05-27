import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/HomePage/Home"
import Class from "./Pages/ClassRoomPage/Class";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/class",
      element: <Class/>,
    },
  ])

export default router
