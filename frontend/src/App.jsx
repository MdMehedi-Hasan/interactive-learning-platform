import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/HomePage/Home"


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ])

export default router
