import React, { useState } from "react";
import axios from "axios";

const VoteForm = ({ vote, onSave }) => {
    const [formData, setFormData] = useState({
        userId: vote?.userId || "",
        initiativeId: vote?.initiativeId || "",
        vote: vote?.vote || false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiCall = vote
            ? axios.put(`/api/votes/${vote.id}`, formData)
            : axios.post("/api/votes", formData);

        apiCall
            .then(response => {
                onSave(response.data.vote);
            })
            .catch(error => {
                console.error("There was an error saving the vote!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User ID</label>
                <input
                    type="number"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Initiative ID</label>
                <input
                    type="number"
                    name="initiativeId"
                    value={formData.initiativeId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>
                    Vote
                    <input
                        type="checkbox"
                        name="vote"
                        checked={formData.vote}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button type="submit">Save Vote</button>
        </form>
    );
};

export default VoteForm;
