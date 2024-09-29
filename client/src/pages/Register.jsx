import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();
  const registerAccount = async () => {
    console.log(firstName);

    const newAccount = { firstName, lastName, userName, email, password };
    console.log(newAccount);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register",
        newAccount
      );
      if (response.status === 201) {
        setMessage("Account Created Successfully");
        setIsCreated(true);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Unable to create account", error);
      setMessage("Error creating account. Please try again.");
      setIsCreated(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
    //resetting form
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <Link
            to="/"
            className="bg-[#7b287d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#cfb1b7] transition duration-300 flex items-center justify-center mx-auto max-w-xs" // Added max-w-xs and mx-auto
          >
            <FaArrowLeft className="mr-2" /> {/* Back icon */}
            Back
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold text-[#330c2f] mb-6">
          Create Account
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerAccount();
          }}
        >
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-[#330c2f]"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border rounded-lg border-[#7b287d] focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-[#330c2f]"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border rounded-lg border-[#7b287d] focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-[#330c2f]"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 border rounded-lg border-[#7b287d] focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-[#330c2f]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg border-[#7b287d] focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-semibold text-[#330c2f]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg border-[#7b287d] focus:outline-none focus:ring-2 focus:ring-[#7b287d] transition duration-300"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full bg-[#7b287d] text-white font-semibold py-2 rounded-lg hover:bg-[#330c2f] transition duration-300 shadow-md"
            type="submit"
          >
            Create Account
          </button>
          {message && (
            <div
              className={`mt-4 text-center ${
                isCreated ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#7b287d] underline hover:text-[#330c2f]"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
