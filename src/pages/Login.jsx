import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            onChange={handleChange}
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
