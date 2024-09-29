import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogoutNav = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loading status

  const handleLogout = async () => {
    // Confirm logout action
    if (confirm("Are you sure you want to logout?")) {
      setLoading(true); // Set loading to true
      try {
        // Send logout request to the server
        const response = await axios.post(
          "http://localhost:4000/api/v1/logout",
          {},
          {
            withCredentials: true, // Send cookies with the request
          }
        );

        if (response.status === 200) {
          alert("User Logged Out"); // Notify the user
          navigate("/"); // Redirect to the homepage
        } else {
          alert("Logout failed. Please try again."); // Handle unexpected response
        }
      } catch (error) {
        console.error("Logout failed:", error); // Log any errors
        alert(
          "Logout failed. Please check your internet connection and try again."
        ); // Notify the user of an error
      } finally {
        setLoading(false); // Reset loading state
      }
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading} // Disable button while loading
      className={`fixed top-4 right-4 bg-[#7b287d] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:bg-[#cfb1b7] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#330c2f] focus:ring-opacity-50 flex items-center ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? (
        <span>Logging out...</span> // Show loading text while logging out
      ) : (
        <>
          <FaSignOutAlt className="mr-2" />
          Logout
        </>
      )}
    </button>
  );
};

export default LogoutNav;
