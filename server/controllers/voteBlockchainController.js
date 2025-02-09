require("dotenv").config();
const { ethers } = require("ethers");
const contractABI = require("../artifacts/contracts/Voting.sol/Voting.json").abi;

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

exports.voteForCandidate = async (req, res) => {
  try {
    const { candidate_id } = req.body; 

    if (candidate_id === undefined || isNaN(candidate_id)) {
      return res.status(400).json({ error: "Invalid or missing candidate ID" });
    }

    const tx = await contract.vote(candidate_id);
    await tx.wait();

    res.json({ message: "Vote cast successfully!", transactionHash: tx.hash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Voting failed", details: error.message });
  }
};
 
