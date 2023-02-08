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
import Meetings from "./pages/meetings/Meetings";
import NotFound from "./pages/notfound/NotFound";
import Profile from "./pages/profile/Profile";
import Reports from "./pages/reports/Reports";
import Details from "./pages/staff/Details";
import Staff from "./pages/staff/Staff";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PrivateLayout />}>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="staff">
            <Route index element={<Staff />} />
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="meetings">
            <Route index element={<Meetings />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
// <PrivateLayout>
// </PrivateLayout>
