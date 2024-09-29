import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaFileAlt,
  FaFilm,
  FaImage,
  FaTag,
  FaTrash,
} from "react-icons/fa";

const DisplayWatchList = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [watchList, setWatchList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/display",
          { withCredentials: true }
        );
        setWatchList(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch watchlist. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchWatchList();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/api/v1/delete/${id}`,
          { withCredentials: true }
        );

        if (response.status === 200) {
          alert("Item deleted successfully!");
          setWatchList((prevWatchList) =>
            prevWatchList.filter((item) => item._id !== id)
          );
        }
      } catch (error) {
        console.error(error);
        alert("Failed to delete item. Please try again.");
      }
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setTitle(item.title);
    setImage(item.image);
    setDescription(item.description);
    setGenre(item.genre);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedItem = {
        title,
        image,
        description,
        genre,
      };
      const response = await axios.put(
        `http://localhost:4000/api/v1/update/${editId}`,
        updatedItem,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Item updated successfully!");
        setWatchList((prevWatchList) =>
          prevWatchList.map((item) =>
            item._id === editId ? { ...item, ...updatedItem } : item
          )
        );
        resetForm();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update item. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setImage("");
    setDescription("");
    setGenre("");
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold">{error}</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        My Watchlist
      </h1>

      <div className="text-center mb-6">
        <Link
          to="/dashboard"
          className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#cfb1b7] transition duration-300"
        >
          Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watchList.length > 0 ? (
          watchList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Genre:</strong> {item.genre}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex items-center text-red-600 hover:text-red-800"
                >
                  <FaTrash className="mr-2" />
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(item)}
                  className="flex items-center text-green-600 hover:text-green-800"
                >
                  <FaEdit className="mr-2" />
                  Edit
                </button>
              </div>
              {editId === item._id && (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                    <label className="block mb-1 text-gray-700">
                      Image URL
                    </label>
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
                    <label className="block mb-1 text-gray-700">
                      Description
                    </label>
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
                    {loading ? "Updating..." : "Update Item"}
                  </button>
                </form>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-300">
            Your watchlist is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayWatchList;
