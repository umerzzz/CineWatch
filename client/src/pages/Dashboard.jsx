import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoutNav from "../components/LogoutNav";

const Dashboard = () => {
  return (
    <>
      <LogoutNav />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] text-white p-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-4xl">
          {/* Card for Displaying Watch List */}
          <Link
            to="/displayWatchList" // Change to your desired route
            className="bg-[#330c2f] rounded-lg shadow-lg p-8 flex flex-col items-center justify-between h-full transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#cfb1b7] relative"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaEye className="text-6xl text-[#cfbff7]" />
              <h2 className="text-2xl font-bold text-center">
                Display Your Watch List
              </h2>
            </div>
            <span className="text-sm text-gray-300 text-center">
              View your saved items
            </span>
            <button className="mt-4 bg-[#7b287d] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#cfb1b7] transition duration-300 shadow-md">
              View
            </button>
          </Link>

          {/* Card for Adding to Watch List */}
          <Link
            to="/add-watchlist" // Change to your desired route
            className="bg-[#330c2f] rounded-lg shadow-lg p-8 flex flex-col items-center justify-between h-full transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#cfb1b7] relative"
          >
            <div className="flex items-center space-x-4 mb-4">
              <FaPlus className="text-6xl text-[#cfbff7]" />
              <h2 className="text-2xl font-bold text-center">
                Add Something to Your Watch List
              </h2>
            </div>
            <span className="text-sm text-gray-300 text-center">
              Add new items easily
            </span>
            <button className="mt-4 bg-[#7b287d] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#cfb1b7] transition duration-300 shadow-md">
              Create
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
