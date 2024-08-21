import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Login from "./components/login";
import ErrorPage from "./error-page";
import Register from "./components/register";
import PatientDashboard from "./pages/patientDash";
import DoctorDashboard from "./pages/doctorDash";
import AdminDashboard from "./pages/adminDash";
import NurseDashboard from "./pages/nurseDash";
import AuthWrapper from "./components/AuthWrapper";
import NurseLogin from "./components/nurseLogin";
import DoctorLogin from "./components/doctorLogin";
import StaffRegister from "./components/staffRegister";
import PatientRegister from "./components/PatientRegister";
import EditPatient from "./components/editPatient";
import PatientCheck from "./components/patientCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nurse-station",
    element: <NurseLogin />,
  },
  {
    path: "/doc-station",
    element: <DoctorLogin />,
  },
  {
    path: "/staff-onboarding",
    element: <StaffRegister />,
  },
  {
    path: "/patient-onboarding",
    element: <PatientRegister />,
  },
  {
    path: "/edit-patient",
    element: <EditPatient />,
  },
  {
    path: "/patient-records",
    element: <PatientDashboard />,
  },
  {
    path: "/patient-check",
    element: <PatientCheck />,
  },
  {
    path: "/doctorDash",
    element: (
        <DoctorDashboard />
    ),
  },
  {
    path: "/nurseDash",
    element: <NurseDashboard />,
    children: [
      {
        path: "patient-onboarding",
        element: <PatientRegister />,
      },
    ],
  },
  {
    path: "/adminDash",
    element: (
        <AdminDashboard />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);