import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// import Dashboard from "../features/dashboard/Dashboard";
// import BusLineList from "../features/bus-lines/BusLineList";
// import BusLineDetail from "../features/bus-lines/BusLineDetail";
// import RouteList from "../features/routes/RouteList";
// import RouteDetail from "../features/routes/RouteDetail";
// import StopList from "../features/stops/StopList";
// import StopDetail from "../features/stops/StopDetail";
// import ScheduleList from "../features/schedules/ScheduleList";
// import ScheduleDetail from "../features/schedules/ScheduleDetail";
import Search from "../features/search/Search";
import Profile from "../features/profile/Profile";
import BusLine from "../features/bus-lines/BusLine";
import Route from "../features/routes/Route";
import Stop from "../features/stops/Stop";
import Schedule from "../features/schedules/Schedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      // { path: "dashboard", element: <Dashboard /> },
      { path: "/search", element: <Search /> },
      { path: "/profile", element: <Profile /> },
      // { path: "bus-lines", element: <BusLineList /> },
      // { path: "bus-lines/:id", element: <BusLineDetail /> },
      { path: "/bus-lines", element: <BusLine /> },
      // { path: "routes", element: <RouteList /> },
      // { path: "routes/:id", element: <RouteDetail /> },
      { path: "/routes", element: <Route /> },
      // { path: "stops", element: <StopList /> },
      // { path: "stops/:id", element: <StopDetail /> },
      { path: "/stops", element: <Stop /> },
      // { path: "schedules", element: <ScheduleList /> },
      // { path: "schedules/:id", element: <ScheduleDetail /> },
      { path: "/schedules", element: <Schedule /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
