const router = require("express").Router();
const { Votes } = require("../../db/models");
const verifyAccessToken = require("../../middleware/verifyAccessToken");

router.get("/", async (req, res) => {
  try {
    const votes = await Votes.findAll({ where: req.query });
    res.status(200).json({ message: "success", votes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:voteId", async (req, res) => {
  try {
    const { voteId } = req.params;
    const vote = await Votes.findOne({ where: { id: voteId } });
    if (vote) {
      res.status(200).json({ message: "success", vote });
    } else {
      res.status(404).json({ message: "Vote not found" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { userId, initiativeId, vote } = req.body;

    const newVote = await Votes.create({
      userId,
      initiativeId,
      vote,
    });

    if (newVote) {
      res.status(201).json({ message: "success", vote: newVote });
    } else {
      res.status(400).json({ message: "Failed to create vote" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:voteId", verifyAccessToken, async (req, res) => {
  try {
    const { voteId } = req.params;
    const { userId, initiativeId, vote } = req.body;

    const result = await Votes.update(
      { userId, initiativeId, vote },
      { where: { id: voteId } }
    );

    if (result[0] > 0) {
      const updatedVote = await Votes.findOne({ where: { id: voteId } });
      res.status(200).json({ message: "success", vote: updatedVote });
    } else {
      res.status(400).json({ message: "Failed to update vote" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:voteId", verifyAccessToken, async (req, res) => {
  try {
    const { voteId } = req.params;

    const result = await Votes.destroy({ where: { id: voteId } });

    if (result > 0) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ message: "Failed to delete vote" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
