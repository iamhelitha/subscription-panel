import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("session", "logged_in"); // Store session token
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-darkBlue text-white">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <div className="flex flex-col w-96">
        {/* Username Input */}
        <input
          className="mb-4 px-4 py-2 border border-gray-500 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* Password Input */}
        <input
          type="password"
          className="mb-4 px-4 py-2 border border-gray-500 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Login Button */}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
