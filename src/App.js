import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/homepage/Home";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";

function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{display:"flex"}}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:profileId",
          element: <Profile />,
        },
      ],
      errorElement: <Error />,
    },

    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
