import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contactus from "./pages/Contactus";
import UserDashboard from "./pages/dashboard/UserDashboard";
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
        <Toaster />
          <Header />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contactus />} />

              {/* //Dashboard routes */}
              <Route path="/user/dashboard" element={<UserDashboard/>} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
