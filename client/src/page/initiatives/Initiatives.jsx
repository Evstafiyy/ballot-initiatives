import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Initiatives() {
	const [initiatives, setInitiatives] = useState([])

	const getAllInitiatives = async() => {
		const initiativesFromServer = await axios.get('/api/initiatives')
		setInitiatives(initiativesFromServer.data.initiatives)
	}
	
	useEffect(()=>{
		getAllInitiatives()
	}, [])

	return (
		<>
			{initiatives.map((initiative) => (
				<div key = {initiative.id}>
					Название: {initiative.title}
				</div>
			))}
		</>
	)
}

export default Initiatives