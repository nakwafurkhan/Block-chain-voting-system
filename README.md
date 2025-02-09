# Blockchain-Based AI-Powered Voting System

The **Blockchain-Based AI-Powered Voting System** is a secure, transparent, and decentralized e-voting platform. It integrates **AI** to enhance search, classification, extraction, and generation use cases while leveraging **blockchain technology** for secure vote storage. This ensures all votes are immutable, verifiable, and tamper-proof.

client- https://securevote-silk.vercel.app/   on vercel

server- https://securevote.onrender.com   on render

use id=admin@gmail.com
use pw=admin   to login

![Voting System Screenshot](https://media-hosting.imagekit.io//8817bdec60e54a29/screenshot_1738693022423.png?Expires=1833301026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yQuUmolRZW2F84LDT5wzOFFEMdlToOirQJJlUTOpMvv8P8TgnEUVPQcXB4sUXOZSGe2StXGe3WMzpBikDX-rbsIUeVdLWMe3vrLmq23q5-R37jlUcdj3azwz3fyYvF95YkdLQt-FVwVOxxtSXgioIo5IwxcVZfkaAr-OayyncLwbXrydcCIqlXe9ZQAKJTYo0C59dgJ3pCVg7u77hnOblswzdVWjkpMyTzg1-V9uUt8w2lRr3dWP6fKpXLr2Ol6pOz0tGQaSCF~6QlGBDiEz8bngdwSwywGITFlWCUtgkNJxnf1JkmRdys7k6IUlJ7eCorj6RBIh1PADqgPWY4mVWg__)

## 🚀 Features

- **Blockchain Security**: All votes are recorded on a blockchain, ensuring transparency, immutability, and auditability.
- **AI Integration**: Uses Search, Classification, and Extraction to improve voter experience.
- **Voter Registration**: Secure voter onboarding via MongoDB and AI-driven verification.
- **Real-time Vote Counting**: Live vote tallying with AI-generated election summaries.
- **Decentralized Voting**: Ensures tamper-proof elections using smart contracts.

---

## 🏗️ What Has Been Built Till Now?

### ✅ Step 1: Voter Registration & Authentication
- Users register with **Aadhaar/Voter ID, email, and wallet address**.
- Backend **checks if the voter exists in the database**.
- **Auto-approve if valid, reject if not found**.

📌 **Tech Used:** MongoDB, Express.js, JWT Authentication

---

### ✅ Step 2: Voter Approval System (Admin Verification)
- Admins can **view pending voters and approve/reject them**.
- Currently, this step is **automated based on voter database validation**.
- **Voter status is stored in MongoDB**.

📌 **Tech Used:** Node.js, MongoDB

---

### ✅ Step 3: Voting Interface & Secure Vote Casting
- Voters **log in, see a list of candidates, and cast their vote**.
- The system ensures:
  - ✅ **Only approved voters can vote**.
  - ✅ **One vote per voter** (prevents duplicate voting).
  - ✅ Votes are **stored in MongoDB** (for now, before blockchain integration).

📌 **Tech Used:** React.js, Axios, Express.js

---

### ✅ Step 4: Live Voting Results (Prototype Complete)
- Votes are **counted in real-time**.
- The **results page displays a live bar chart** using **Recharts**.
- This completes our **full-stack prototype**, making it **fully functional without blockchain for now**.

📌 **Tech Used:** MongoDB Aggregation, Recharts

---

### ✅ Step 5: Blockchain Integration (Ongoing)
## 🛠 Overview of What We Did Till Now

1️⃣ **Set Up Hardhat** → Installed Hardhat to write and deploy smart contracts.  
2️⃣ **Wrote a Smart Contract (`Voting.sol`)** → Created functions to add candidates, vote, and get results.  
3️⃣ **Compiled the Contract** → Checked for errors and generated the ABI (interface).  
4️⃣ **Deployed on Local Blockchain** → Used Hardhat Network to deploy the contract.  
5️⃣ **Interacted with the Contract** →  
   ✅ **Added a candidate (`Alice`)**  
   ✅ **Fetched candidate details from blockchain**  

---

## 🧠 Key Concepts You Have Used

- **Smart Contract** → Like a backend stored on the blockchain.  
- **Hardhat** → A tool for writing, testing, and deploying contracts.  
- **Blockchain Storage** → Instead of a database, we store votes on-chain.  
- **Transactions** → When you add a candidate or vote, a transaction is sent to the blockchain.  


---

## 🧠 AI Use Cases Implemented (Next Phase)

This project implements at least **three AI use cases**:
1. **Search** → AI-powered voter & candidate search.
2. **Classification** → Categorizing elections & voter types.
3. **Extraction** → Auto-filling voter details from Aadhaar/Voter ID.
4. **Generation (Upcoming)** → AI-generated election summaries & reports.

**Promptrepo** may be used to structure unstructured voter data from emails, chats, and Google Sheets.

---



## ⚖️ License

This project is licensed under the **MIT License**.(on process)
