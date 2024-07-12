import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InitiativeItem from './InitiativeItem'

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
					<InitiativeItem initiative = {initiative} setInitiatives = {setInitiatives}/>
				</div>
			))}
		</>
	)
}

export default Initiatives