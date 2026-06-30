import React, { useState } from "react";
import api from "../config/api.config";
import toast from "react-hot-toast";


const Register = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    phone: "",
    DOB: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const userData = {
      FullName: formData.FullName,
      email: formData.email,
      phone: formData.phone,
      DOB: formData.DOB,
      gender: formData.gender,
      password: formData.password,
    };

    console.log("User Registered:");
    console.log(JSON.stringify(userData, null, 2));

    try {
      const res = await api.post("/auth/register", userData);

      toast.success(res.data.message);

      setFormData({
        FullName: "",
        email: "",
        phone: "",
        DOB: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 py-10 px-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="FullName"
            placeholder="Full Name"
            value={formData.FullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
