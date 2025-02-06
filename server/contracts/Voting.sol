// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint public candidatesCount;

    function addCandidate(string memory _name) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint _candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted!");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate!");

        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;
    }

    function getCandidate(uint _id) public view returns (string memory, uint) {
        return (candidates[_id].name, candidates[_id].voteCount);
    }
}
