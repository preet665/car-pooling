import React from "react";
import { DriverProfile, Navbar } from "../components";
import ProtectedSignRoute from "../protectedRoute/ProtectedSignRoute";

const DriverProf = () => {
  return (
    <>
      <ProtectedSignRoute>
        <Navbar />
        <DriverProfile />
      </ProtectedSignRoute>
    </>
  );
};

export default DriverProf;
