import React, { useState } from "react";
import { NavLink } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    bio: "",
    country: "",
    mobile: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="w-full max-w-xl bg-gray-200 p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
           {/* First Name & Last Name */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="John"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Doe"
              />
            </div>
          </div>
          {/* Username & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="johndoe123"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>

         

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-lg font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Tell us about yourself"
              rows="4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-lg font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="USA"
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-lg font-medium text-gray-700">
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="+1234567890"
              />
            </div>
          </div>

          {/* Profile Image */}
          <div>
            <label htmlFor="image" className="block text-lg font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full bg-white text-black rounded-lg shadow-lg border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <NavLink to="/home">
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-gradient-to-r from-pink-500 to-blue-400 text-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
