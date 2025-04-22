import Seperator1 from "@/components/ui/Seperator1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const Register = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password1 || !password2 || !username) {
      alert("All fields are required!");
      return;
    }

    if (password1 !== password2) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: password1, username }),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const text = await response.text();
        alert(`Registration failed: ${text}`);
      }
    } catch (error) {
      alert("Something went wrong: " + error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 justify-center items-center p-4">
      <div className="w-full md:w-3/5 lg:w-[55%] xl:w-[45%] bg-zinc-800 rounded-lg shadow-lg p-6">
        <div className="text-white font-bold text-2xl mb-2">Register</div>
        <Seperator1 />

        <div className="flex flex-col gap-6 mt-6">
          {/* Username */}
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Username</label>
            <input
              type="text"
              className="p-2 bg-white rounded w-full"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Email</label>
            <input
              type="email"
              className="p-2 bg-white rounded w-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-400 text-sm mb-1 block ">Password</label>
            <input
              type="password"
              className="p-2 bg-white rounded w-full"
              placeholder="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-400 text-sm mb-1 block py-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="p-2 bg-white rounded w-full"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>

          {/* Button */}
          <div>
            <button
              className="bg-blue-500 text-gray-200 p-3 w-full rounded mt-4 font-bold hover:bg-blue-700"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
