import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">🍔 Cravings</h1>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-orange-100 transition">
            Home
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-orange-100 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-orange-100 transition"
          >
            Contact Us
          </Link>

          <Link
            to="/login"
            className="text-white hover:text-orange-100 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
