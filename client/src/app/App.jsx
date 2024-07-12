
import { useEffect, useState } from 'react'
import Main from '../page/main/Main'
import Authorization from '../page/auth/Authorization';
import Registration from '../page/auth/Registration';
import requestAxios, { setAccessToken } from '../services/axios';
import { Route, Routes } from 'react-router-dom'
import Navbar from '../page/navbar/Navbar'
import './App.css'
import Initiatives from '../page/initiatives/Initiatives';


import './App.css'
import VotesList from '../page/votes/VotesList';
import axios from 'axios';



function App() {
	const [user, setUser] = useState()

	const AxiosChekUser = async () => {
		const { data } = await requestAxios.get('/tokens/refresh');
		setUser(data.user);
		setAccessToken(data.accessToken);
	};

	useEffect(() => {
		AxiosChekUser();
	}, [])

	const [initiatives, setInitiatives] = useState([])

	const getAllInitiatives = async () => {
		const initiativesFromServer = await axios.get('/api/initiatives')
		setInitiatives(initiativesFromServer.data.initiatives)
	}



	const [votes, setVotes] = useState([])

	const getAllVotes = async () => {
		const votesFromServer = await axios.get('/api/votes')
		setVotes(votesFromServer.data.votes)
	}


	useEffect(() => {
		getAllVotes();
		getAllInitiatives();
	}, [])

	
	console.log(111111111111, initiatives);
	console.log(222222222222, votes);

	return (
		<>
			<Navbar user={user} setUser={setUser} />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/initiatives' element={<Initiatives user={user} setUser={setUser} />} />
				<Route path='/votes' element={<VotesList user={user} setUser={setUser} initiatives={initiatives} setInitiatives={setInitiatives} votes={votes} setVotes={setVotes}/>} />
				<Route
					path='/registration'
					element={<Registration setUser={setUser} user={user} />}
				/>
				<Route
					path='/authorization'
					element={<Authorization setUser={setUser} user={user} />}
				/>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</>
	)

}

export default App
