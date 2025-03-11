import React from 'react';
import { AtSign, Phone } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-10">
      <div className="flex-1 max-w-lg p-8 bg-white rounded-2xl shadow-xl transform transition-all hover:shadow-2xl">
        
        <div className="relative flex justify-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">John Doe</h1>

        <div className="space-y-4 text-gray-600 w-full max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-200 to-blue-50 rounded-lg hover:bg-blue-100 transition-all">
            <AtSign className="text-pink-500" />
            <span className="text-sm font-medium text-gray-700 hover:text-pink-500 cursor-pointer transition">
              john.doe@example.com
            </span>
          </div>

          <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-200 to-blue-50 rounded-lg hover:bg-blue-100 transition-all">
            <Phone className="text-pink-500" />
            <span className="text-sm font-medium text-gray-700 hover:text-pink-500 cursor-pointer transition">
              +1 234 567 890
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="px-8 py-3 bg-blue-400 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
