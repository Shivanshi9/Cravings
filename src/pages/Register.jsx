import React, { useState } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
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

    // alert("Registration Successful!");

    setFormData({
      FullName: "",
      email: "",
      phone: "",
      DOB: "",
      gender: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 py-10 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8">
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
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />

          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
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
            className="w-full border border-gray-300 p-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg"
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
