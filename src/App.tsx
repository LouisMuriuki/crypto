import React from "react";
import { Route, Routes } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PrivateLayout from "./Layout/PrivateLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PublicLayout from "./Layout/PublicLayout";
import Register from "./pages/register/Register";
import RegisterVerification from "./pages/registerverification/RegisterVerification";
import ResetPassword from "./pages/resetpassword/ResetPassword";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<PublicLayout />}>
          <Route path="login" >
          <Route index element={<Login />} />
          <Route path="verification" element={<RegisterVerification/>} />
          <Route path="resetpassword" element={<ResetPassword/>} />
          </Route>
          <Route path="register">
            <Route index element={<Register />} />
            <Route path="verification" element={<RegisterVerification />} />
          </Route>
        </Route>
        <Route element={<PrivateLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Home />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
// <PrivateLayout>
// </PrivateLayout>
