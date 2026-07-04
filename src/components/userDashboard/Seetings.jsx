import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import api from "../../config/api.config.js";
import toast from "react-hot-toast";

const Settings = () => {
  const { user, setUser } = useAuth();

  const [isEditable, setIsEditable] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsEditable(false);

    const payLoad = {
      email: tempUser.email.toLowerCase(),
      FullName: tempUser.FullName,
      phone: tempUser.phone,
    };

    console.log(payLoad);

    try {
      const res = await api.put("/user/edit-profile", payLoad);
      setUser(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response?.data?.message ||
          error.message,
      );
    }
  };
return (
  <div className="flex justify-center items-center min-h-[85vh] bg-gray-100 p-6">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
        My Profile
      </h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-500 shadow-md">
          <img
            src={user.photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {isEditable ? (
        <>
          <div className="space-y-4">

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="FullName"
                value={tempUser.FullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={tempUser.email}
                disabled
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                value={tempUser.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-6">

            <button
              onClick={() => setIsEditable(false)}
              className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Save
            </button>

          </div>
        </>
      ) : (
        <>
          <div className="space-y-4">

            <div className="border-b pb-2">
              <p className="text-gray-500 text-sm">Full Name</p>
              <p className="font-semibold text-lg">{user.FullName}</p>
            </div>

            <div className="border-b pb-2">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>

            <div className="border-b pb-2">
              <p className="text-gray-500 text-sm">Phone Number</p>
              <p className="font-semibold">{user.phone}</p>
            </div>

          </div>

          <div className="flex justify-center mt-6">

            <button
              onClick={() => setIsEditable(true)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Edit Profile
            </button>

          </div>
        </>
      )}
    </div>
  </div>
);
};

export default Settings;