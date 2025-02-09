const express = require("express");
const router = express.Router();
const { voteForCandidate } = require("../controllers/voteBlockchainController");

router.post("/vote-blockchain", voteForCandidate);

module.exports = router;
