import axios from "axios";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    const userCredentials = {
      userName,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/login",
        userCredentials,
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        throw new Error("Unable to log in. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data.message);
        alert(error.response.data.message);
      } else {
        console.error("Error:", error.message);
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] text-white text-center">
      <div className="bg-[#330c2f] rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <Link
            to="/"
            className="bg-[#7b287d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#cfb1b7] transition duration-300 flex items-center justify-center mx-auto max-w-xs" // Added max-w-xs and mx-auto
          >
            <FaArrowLeft className="mr-2" /> {/* Back icon */}
            Back
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Login</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser();
          }}
          className="flex flex-col"
        >
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-3 rounded-lg bg-[#cfbff7] text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 rounded-lg bg-[#cfbff7] text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
            required
          />
          <button
            type="submit"
            className="bg-[#7b287d] text-white font-semibold py-2 rounded-lg hover:bg-[#330c2f] transition duration-300 shadow-md transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-300">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-[#cfb1b7] underline hover:text-white"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
