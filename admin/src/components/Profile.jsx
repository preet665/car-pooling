import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://via.placeholder.com/300x300.png?text=Profile+Picture"
                alt="Profile picture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Administrator
              </div>
              <div className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-800">
                Jane Doe
              </div>
              <div className="mt-2 text-gray-600">
                <p>Email: janedoe@example.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Main St, Anytown USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
