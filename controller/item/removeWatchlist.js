import query from "../../db/index.js";

const removeFromWatchlist = async (req, res) => {
  const body = req.body;

  try {
    const dbRes = await query(
      "UPDATE users SET watchlist = array_remove(watchlist, $1) WHERE id = $2",
      [body.watchlist, body.id]
    );
    res.status(200).json({ message: "Item removed from watchlist" });
  } catch (error) {
    console.error("Error removing item from watchlist:", error);
    res.status(500).json({ message: "Error removing item from watchlist" });
  }
};

export default removeFromWatchlist;
