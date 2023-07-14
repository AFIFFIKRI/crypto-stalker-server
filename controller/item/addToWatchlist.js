import query from "../../db/index.js";

const addToWatchlist = async (req, res) => {
  const body = req.body;

  try {
    const dbRes = await query(
      "UPDATE users SET watchlist = array_append(watchlist, $1) WHERE id = $2",
      [body.watchlist, body.id]
    );
    res.status(200).json({ message: "Item added to watchlist" });
  } catch (error) {
    console.error("Error adding item to watchlist:", error);
    res.status(500).json({ message: "Error adding item to watchlist" });
  }
};

export default addToWatchlist;
