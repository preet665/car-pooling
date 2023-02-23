import React from "react";
import { RiderProfile, Navbar } from "../components";
import ProtectedSignRoute from "../protectedRoute/ProtectedSignRoute";

const ProfPage = () => {
  return (
    <>
      {/* <ProtectedSignRoute>
        <Navbar home={true} li={"Sign Up"} />
        <Profile />
      </ProtectedSignRoute> */}
      <RiderProfile />
    </>
  );
};

export default ProfPage;
