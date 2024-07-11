import React, { useEffect, useState } from "react";
import axios from "axios";

const VotesList = () => {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        axios.get("/api/votes")
            .then(response => {
                setVotes(response.data.votes);
            })
            .catch(error => {
                console.error("There was an error fetching the votes!", error);
            });
    }, []);

    return (
        <div>
            <h1>Votes List</h1>
            <ul>
                {votes.map(vote => (
                    <li key={vote.id}>
                        User {vote.userId} voted {vote.vote ? "Yes" : "No"} on Initiative {vote.initiativeId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VotesList;
