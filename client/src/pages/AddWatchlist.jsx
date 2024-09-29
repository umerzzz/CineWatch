import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaImage, FaTag, FaFileAlt, FaFilm } from "react-icons/fa"; // Importing necessary icons

const AddWatchlist = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newItem = {
        title,
        image,
        description,
        genre,
      };
      const response = await axios.post(
        "http://localhost:4000/api/v1/create",
        newItem,
        {
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        alert("Item Created Successfully");
        // Reset form fields
        setTitle("");
        setImage("");
        setDescription("");
        setGenre("");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to create item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6 flex justify-center space-x-4">
          <Link
            to="/dashboard"
            className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#cfb1b7] shadow-md transform hover:scale-105"
          >
            Back to Dashboard
          </Link>
          <Link
            to="/displayWatchList"
            className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#cfb1b7] shadow-md transform hover:scale-105"
          >
            View Added Items
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center text-[#330c2f]">
          Add Item to Watchlist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Title</label>
            <div className="flex items-center border border-gray-300 rounded">
              <FaTag className="text-gray-500 mx-2" />
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#7b287d] rounded"
                required
                aria-label="Title"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Image URL</label>
            <div className="flex items-center border border-gray-300 rounded">
              <FaImage className="text-gray-500 mx-2" />
              <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter image URL"
                className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#7b287d] rounded"
                required
                aria-label="Image URL"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Description</label>
            <div className="flex items-center border border-gray-300 rounded">
              <FaFileAlt className="text-gray-500 mx-2" />
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#7b287d] rounded"
                rows="4"
                required
                aria-label="Description"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Genre</label>
            <div className="flex items-center border border-gray-300 rounded">
              <FaFilm className="text-gray-500 mx-2" />
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Enter genre"
                className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#7b287d] rounded"
                required
                aria-label="Genre"
              />
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#7b287d] text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-[#cfb1b7] shadow-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Adding..." : "Add to Watchlist"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWatchlist;
