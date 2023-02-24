import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faStar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const DriverProfile = () => {
  //const { name, rating, car, license, experience } = driverInfo;

  return (
    // <div className="container mx-auto px-4 py-6">
    //   <div className="md:flex md:flex-row md:space-x-6">
    //     <div className="md:w-1/3">
    //       <div className="md:sticky md:top-16">
    //         <h1 className="text-2xl font-semibold mb-2">Driver Profile</h1>
    //         <div className="border border-gray-300 rounded-md p-4">
    //           <h2 className="text-lg font-medium mb-2">Personal Information</h2>
    //           <div className="flex flex-row items-center mb-2">
    //             <span className="w-1/3">Name:</span>
    //             <span className="w-2/3">John Doe</span>
    //           </div>
    //           <div className="flex flex-row items-center mb-2">
    //             <span className="w-1/3">Email:</span>
    //             <span className="w-2/3">johndoe@gmail.com</span>
    //           </div>
    //           <div className="flex flex-row items-center mb-2">
    //             <span className="w-1/3">Phone:</span>
    //             <span className="w-2/3">+1 123-456-7890</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="md:flex-1">
    //       <div className="border border-gray-300 rounded-md p-4">
    //         <h2 className="text-lg font-medium mb-2">Vehicle Information</h2>
    //         <div className="flex flex-row items-center mb-2">
    //           <span className="w-1/3">Make:</span>
    //           <span className="w-2/3">Toyota</span>
    //         </div>
    //         <div className="flex flex-row items-center mb-2">
    //           <span className="w-1/3">Model:</span>
    //           <span className="w-2/3">Camry</span>
    //         </div>
    //         <div className="flex flex-row items-center mb-2">
    //           <span className="w-1/3">Year:</span>
    //           <span className="w-2/3">2019</span>
    //         </div>
    //         <div className="flex flex-row items-center mb-2">
    //           <span className="w-1/3">License Plate:</span>
    //           <span className="w-2/3">ABC 123</span>
    //         </div>
    //         <div className="flex flex-row items-center mb-2">
    //           <span className="w-1/3">Color:</span>
    //           <span className="w-2/3">Black</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-6">
      <div className="md:flex md:flex-row md:space-x-6">
        <div className="md:w-1/3">
          <div className="md:sticky md:top-16">
            <div className="flex justify-center">
              <div className="h-32 w-32 relative rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt="Profile"
                />
                <span className="absolute right-0 bottom-0 h-6 w-6 rounded-full bg-green-500 border-2 border-white"></span>
              </div>
            </div>
            <h1 className="text-2xl font-semibold my-4 text-center">John Doe</h1>
            <div className="border border-gray-300 rounded-md p-4">
              <h2 className="text-lg font-medium mb-2">Personal Information</h2>
              <div className="flex flex-row items-center mb-2">
                <span className="w-1/3">Email:</span>
                <span className="w-2/3">johndoe@gmail.com</span>
              </div>
              <div className="flex flex-row items-center mb-2">
                <span className="w-1/3">Phone:</span>
                <span className="w-2/3">+1 123-456-7890</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1">
          <div className="border border-gray-300 rounded-md p-4">
            <h2 className="text-lg font-medium mb-2">Vehicle Information</h2>
            <div className="flex flex-row items-center mb-2">
              <span className="w-1/3">Make:</span>
              <span className="w-2/3">Toyota</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <span className="w-1/3">Model:</span>
              <span className="w-2/3">Camry</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <span className="w-1/3">Year:</span>
              <span className="w-2/3">2019</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <span className="w-1/3">License Plate:</span>
              <span className="w-2/3">ABC 123</span>
            </div>
            <div className="flex flex-row items-center mb-2">
              <span className="w-1/3">Color:</span>
              <span className="w-2/3">Black</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// DriverProfile.propTypes = {
//   driverInfo: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     car: PropTypes.string.isRequired,
//     license: PropTypes.string.isRequired,
//     experience: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default DriverProfile;
