import React from "react";
import { Link } from "react-router-dom";

//const RiderProfile = ({ user }) => {
  const RiderProfile = ({ }) => {
return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Profile</h2>
        <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
          Edit Profile
        </button>
      </div>
      <div className="flex items-center mb-4">
        <img
          src="https://i.pravatar.cc/150?img=56"
          alt="Profile"
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-medium">John Doe</h3>
          <span className="text-gray-600">john.doe@example.com</span>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-6">
        <h4 className="text-lg font-medium mb-4">Personal Information</h4>
        <div className="flex mb-4">
          <div className="w-1/3">
            <span className="text-gray-600">First Name:</span>
          </div>
          <div className="w-2/3">
            <span>John</span>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/3">
            <span className="text-gray-600">Last Name:</span>
          </div>
          <div className="w-2/3">
            <span>Doe</span>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/3">
            <span className="text-gray-600">Email:</span>
          </div>
          <div className="w-2/3">
            <span>john.doe@example.com</span>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/3">
            <span className="text-gray-600">Phone:</span>
          </div>
          <div className="w-2/3">
            <span>(555) 555-1234</span>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/3">
            <span className="text-gray-600">Address:</span>
          </div>
          <div className="w-2/3">
            <span>123 Main St, Anytown, USA</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RiderProfile;
