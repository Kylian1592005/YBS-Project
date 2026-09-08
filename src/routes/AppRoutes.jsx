import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Search from "../features/search/Search";
import Profile from "../features/profile/Profile";
import BusLine from "../features/bus-lines/BusLine";
import Stop from "../features/stops/Stop.jsx";
import StopDetails from "../features/stops/StopDetails.jsx";
// import Schedule from "../features/schedules/Schedule";
import { BusLineDetail } from "../features/routes/BusLineDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <BusLine /> },

      { path: "search", element: <Search /> },
      { path: "profile", element: <Profile /> },
      
      { path: "bus-lines", element: <BusLine /> },
      { path: "bus-lines/:id", element: <BusLineDetail /> }, 
      // { path: "routes", element: <Route /> },
      // { path: "routes/:id", element: <Route /> },

      { path: "stops", element: <Stop /> },
      { path: "stops/:id", element: <StopDetails /> },

      // { path: "schedules", element: <Schedule /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}