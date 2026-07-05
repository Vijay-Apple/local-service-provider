import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import TechnicianLayout from "../layouts/TechnicianLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "./ProtectedRoute";

/* Public Pages */
import Home from "../../pages/public/Home/Home";
import Services from "../../pages/public/Services/Service";
import ServiceDetails from "../../pages/public/ServiceDetails/ServiceDetails";
import BookingPage from "../../pages/public/Booking/BookingPage";
import About from "../../pages/public/About/About";
import Contact from "../../pages/public/Contact/Contact";
import NotFound from "../../pages/public/NotFound/NotFound";
import Unauthorized from "../../pages/public/Unauthorized/Unauthorized";

/* Auth Pages */
import Login from "../../pages/auth/Login/Login";
import Register from "../../pages/auth/Register/Register";
import ForgotPassword from "../../pages/public/ForgotPassword/ForwordPassword";

/* Customer Pages */
import CustomerDashboard from "../../pages/customer/Dashboard/Dashboard";
import Bookings from "../../pages/customer/BookingDetails/BookingDetails";
import ServiceRecords from "../../pages/customer/ServiceRecords/ServiceRecords";
import Addresses from "../../pages/customer/Addresses/Addresses";
import Notifications from "../../pages/customer/Notifications/Notifications";
import Profile from "../../pages/customer/Profile/Profile";
import Settings from "../../pages/customer/Settings/Settings";

/* Technician Pages */
import TechnicianDashboard from "../../pages/technician/Dashboard/Dashboard";
import Jobs from "../../pages/technician/Jobs/Jobs";
import JobDetails from "../../pages/technician/JobDetails/JobDetails";
import Earnings from "../../pages/technician/Earnings/Earnings";
import Availability from "../../pages/technician/Availability/Availability";
import TechnicianProfile from "../../pages/technician/Profile/Profile";
import TechnicianSettings from "../../pages/technician/Settings/Settings";

/* Admin Pages */
import AdminDashboard from "../../pages/admin/Dashboard/Dashboard";
import Users from "../../pages/admin/Users/Users";
import Technicians from "../../pages/admin/Technicians/Technicians";
import Customers from "../../pages/admin/Customers/Customers";
import AdminServices from "../../pages/admin/Services/Services";
import AdminBookings from "../../pages/admin/Bookings/Bookings";
import Payments from "../../pages/admin/Payments/Payments";
import Analytics from "../../pages/admin/Analytics/Analytics";
import AdminSettings from "../../pages/admin/Settings/Settings";
import AddUser from "../../pages/admin/Users/AddUser";

const router = createBrowserRouter([
  /* =========================
        PUBLIC ROUTES
  ========================= */
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "unauthorized",
        element: <Unauthorized />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  /* =========================
        CUSTOMER ROUTES
  ========================= */
  {
    path: "/customer",
    element: (
      <ProtectedRoute allowedRoles={["customer"]}>
        <CustomerLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "dashboard",
        element: <CustomerDashboard />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "service-records",
        element: <ServiceRecords />,
      },
      {
        path: "addresses",
        element: <Addresses />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },

  /* =========================
        TECHNICIAN ROUTES
  ========================= */
  {
    path: "/technician",
    element: (
      <ProtectedRoute allowedRoles={["technician"]}>
        <TechnicianLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "dashboard",
        element: <TechnicianDashboard />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "earnings",
        element: <Earnings />,
      },
      {
        path: "availability",
        element: <Availability />,
      },
      {
        path: "profile",
        element: <TechnicianProfile />,
      },
      {
        path: "settings",
        element: <TechnicianSettings />,
      },
      {
        path: "settings",
        element: <TechnicianSettings />,
      },
    ],
  },

  /* =========================
          ADMIN ROUTES
  ========================= */
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "technicians",
        element: <Technicians />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "services",
        element: <AdminServices />,
      },
      {
        path: "bookings",
        element: <AdminBookings />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
      {
        path: "/admin/users/add",
        element: <AddUser />,
      },
    ],
  },

  /* =========================
            404
  ========================= */
  {
    path: "*",
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      </div>
    ),
  },
]);
export default router;
