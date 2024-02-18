import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const GuestLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default GuestLayout;
