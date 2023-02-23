import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RideBookingPage, SignupPage,ProfPage } from "./pages";
import RideSchedulePage from "./pages/RideSchedulePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ride" element={<RideBookingPage />} />
        <Route path="/schedule_ride" element={<RideSchedulePage/>}/>
        <Route path="/profile" element={<ProfPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
