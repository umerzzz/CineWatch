import WatchList from "../models/WatchList.model.js";

export const displayWatchList = async (req, res) => {
  const userId = req.user._id;
  try {
    const items = await WatchList.find({ user: userId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const { title, image, description, genre } = req.body;
  const userId = req.user._id;
  try {
    const newItem = new WatchList({
      title,
      image,
      description,
      genre,
      user: userId,
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await WatchList.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the item" });
  }
};

export const editItem = async (req, res) => {
  const { id } = req.params;
  const { title, image, description, genre } = req.body;
  const userId = req.user._id;
  try {
    const updatedItem = {
      title,
      image,
      description,
      genre,
      user: userId,
    };

    const item = await WatchList.findByIdAndUpdate(id, updatedItem, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
