import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

const MainLayout = () => {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/login",
    "/register",
    "/unauthorized",
    "/notfound",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
