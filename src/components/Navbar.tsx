import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger icons
import dragonlogo from "../assets/dragonlogo.png";

function Navbar() {
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="bg-zinc-900 text-white px-3 py-3">
      <div className="container mx-auto flex items-center justify-between px-3">
        {/* Logo */}
        <div className="hover:bg-gray-800 px-2 py-1">
          <Avatar>
            <AvatarImage src={dragonlogo} />
            <AvatarFallback className="text-black">drakeScans</AvatarFallback>
          </Avatar>
        </div>

        {/* Search bar (always visible) */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="🔍 Search"
            className="w-full px-2 py-1 bg-zinc-700 rounded"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:bg-slate-700 rounded px-4 py-1">Home</Link>
          <Link to="/comics" className="hover:bg-slate-700 rounded px-4 py-1">Comics</Link>
          <Link to="https://discord.com/invite/52UqAUpJ7k" className="hover:bg-slate-700 rounded px-4 py-1">Discord</Link>
          <Link to="/membership" className="hover:bg-slate-700 rounded px-4 py-1">Membership</Link>
          <Link to="/bookmarks" className="hover:bg-slate-700 rounded px-4 py-1">Bookmarks</Link>
          <Link to="/login" className="hover:bg-slate-700 rounded px-4 py-1">Login</Link>
          <Link to="/register" className="hover:bg-slate-700 rounded px-4 py-1">Register</Link>
          {username && (
            <button className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-700">
              {username.slice(0, 4).toUpperCase()}
            </button>
          )}
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-2">
          <Link to="/" className="block hover:bg-slate-700 rounded px-4 py-2">Home</Link>
          <Link to="/comics" className="block hover:bg-slate-700 rounded px-4 py-2">Comics</Link>
          <Link to="https://discord.com/invite/52UqAUpJ7k" className="block hover:bg-slate-700 rounded px-4 py-2">Discord</Link>
          <Link to="/membership" className="block hover:bg-slate-700 rounded px-4 py-2">Membership</Link>
          <Link to="/bookmarks" className="block hover:bg-slate-700 rounded px-4 py-2">Bookmarks</Link>
          <Link to="/login" className="block hover:bg-slate-700 rounded px-4 py-2">Login</Link>
          <Link to="/register" className="block hover:bg-slate-700 rounded px-4 py-2">Register</Link>
          {username && (
            <div>
              <button className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-700 mt-2">
                {username.slice(0, 4).toUpperCase()}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
