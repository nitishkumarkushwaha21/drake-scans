import Seperator1 from "@/components/ui/Seperator1";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import yun from "../assets/yun.png";

const API_BASE_URL = import.meta.env.VITE_FRONTEND_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        const data = await response.json();
        localStorage.setItem("username", data.username);
        navigate("/");
      } else {
        const text = await response.text();
        alert(`Login failed: ${text}`);
      }
    } catch (err) {
      alert("Something went wrong: " + err);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Image (2/5) */}
      <div className="md:w-2/5 w-full flex justify-center items-center bg-zinc-900 p-4">
        <img
          src={yun}
          alt="Login Art"
          className="h-[90vh] object-contain"
        />
      </div>

      {/* Right Side: Login Box (3/5) */}
      <div className="md:w-3/5 w-full flex justify-center items-center p-4">
        <div className="w-full max-w-md bg-zinc-800 rounded-lg shadow-lg p-6">
          <h2 className="text-white text-2xl font-bold mb-2">Login</h2>
          <Seperator1 />

          {/* Email */}
          <div className="mt-6">
            <label className="text-gray-400 text-sm mb-1 block">Email</label>
            <input
              type="email"
              className="w-full p-2 bg-white rounded text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="text-gray-400 text-sm mb-1 block">Password</label>
            <input
              type="password"
              className="w-full p-2 bg-white rounded text-black"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Keep Me Signed In */}
          <div className="flex items-center gap-3 mt-6">
            <Checkbox />
            <p className="text-white text-sm">Keep me signed in</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
