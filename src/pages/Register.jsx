import { useState } from "react";

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

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            name="FullName"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="date"
            name="DOB"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <select
            name="gender"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
