import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] text-white text-center">
      <div className="bg-[#330c2f] rounded-lg shadow-lg p-8 max-w-md w-full">
        <img
          src="https://images.unsplash.com/photo-1561713383-78b4befb5f86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbnRhZ2UlMjBwdXJwbGV8ZW58MHx8MHx8fDA%3D"
          alt="Watchlist Tracker"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Watchlist Tracker!
        </h1>
        <p className="mb-6">Manage your favorite shows and movies easily.</p>
        <button
          onClick={() => navigate("/how-to")}
          className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded hover:bg-[#330c2f] transition duration-300 mb-4 flex items-center justify-center w-full"
        >
          <FontAwesomeIcon icon={faListAlt} className="mr-2" />
          How to Use?
        </button>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded hover:bg-[#330c2f] transition duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded hover:bg-[#330c2f] transition duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
