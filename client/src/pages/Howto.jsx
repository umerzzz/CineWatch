import {
  FaPlusCircle,
  FaEye,
  FaTrash,
  FaArrowLeft,
  FaEdit,
} from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";

const HowTo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] p-8 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        How to Use the Watchlist
      </h1>
      <div className="text-center mb-6">
        <Link
          to="/"
          className="bg-[#7b287d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#cfb1b7] transition duration-300 flex items-center justify-center mx-auto max-w-xs"
        >
          <FaArrowLeft className="mr-2" /> {/* Back icon */}
          Back
        </Link>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Section for Adding Items */}
        <div className="flex items-center">
          <FaPlusCircle className="text-[#7b287d] text-3xl mr-4 hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mb-4 text-[#330c2f]">
            Adding Items to Your Watchlist
          </h2>
        </div>
        <p className="text-gray-800 mb-4">
          To add items to your watchlist, navigate to the{" "}
          <strong>Add Item</strong> page from the dashboard. Fill in the
          required fields such as <strong>Title</strong>,{" "}
          <strong>Image URL</strong>, <strong>Description</strong>, and{" "}
          <strong>Genre</strong>. Click on the <strong>Add to Watchlist</strong>{" "}
          button to save the item.
        </p>
        <hr className="border-gray-300 my-4" />

        {/* Section for Viewing Watchlist */}
        <div className="flex items-center">
          <FaEye className="text-[#7b287d] text-3xl mr-4 hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mb-4 text-[#330c2f]">
            Viewing Your Watchlist
          </h2>
        </div>
        <p className="text-gray-800 mb-4">
          You can view your added items by clicking on the{" "}
          <strong>View Added Items</strong> link in the dashboard. This will
          display all items currently in your watchlist.
        </p>
        <hr className="border-gray-300 my-4" />

        {/* Section for Deleting Items */}
        <div className="flex items-center">
          <FaTrash className="text-[#7b287d] text-3xl mr-4 hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mb-4 text-[#330c2f]">
            Deleting Items from Your Watchlist
          </h2>
        </div>
        <p className="text-gray-800 mb-4">
          To remove an item from your watchlist, go to the{" "}
          <strong>View Added Items</strong> page. Each item will have a{" "}
          <strong>Delete</strong> button next to it. Click this button to remove
          the item from your list.
        </p>
        <hr className="border-gray-300 my-4" />

        {/* Section for Editing Items */}
        <div className="flex items-center">
          <FaEdit className="text-[#7b287d] text-3xl mr-4 hover:scale-105 transition-transform duration-300" />
          <h2 className="text-2xl font-semibold mb-4 text-[#330c2f]">
            Editing Items in Your Watchlist
          </h2>
        </div>
        <p className="text-gray-800 mb-4">
          To edit an item in your watchlist, go to the{" "}
          <strong>View Added Items</strong> page. Each item will have an{" "}
          <strong>Edit</strong> button next to it. Click this button to modify
          the item's details and save your changes.
        </p>
      </div>
    </div>
  );
};

export default HowTo;
