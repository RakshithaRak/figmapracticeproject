import { Navigate, createBrowserRouter } from "react-router-dom";
import Upload from "../pages/upload/Upload";
import Login from "../pages/login/Login";
import Layout from "../pages/layout/Layout";

export default createBrowserRouter([
  {
    path: "",
    Component: () => <Navigate to="/login" />,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "",
    Component: Layout,
    children: [
      {
        path: "/upload",
        Component: Upload,
      },
    ],
  },
]);
