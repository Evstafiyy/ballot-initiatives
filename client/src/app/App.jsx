import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import AuthForm from "../components/Auth/AuthForm";
import axios from "axios";
import { setAccessToken } from "../../services/axiosInstance"

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		axios.get("/api/tokens/refresh").then(data => {
			setUser(data.data.user)
			setAccessToken(data.data.accessToken)
		})

	}, [])
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>{user?.email}</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/login" element={<AuthForm setUser={setUser} />}></Route>
			</Routes>
		</>
	);
}

export default App
