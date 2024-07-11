import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InitiativeItem from './InitiativeItem'

function Initiatives() {
	const [initiatives, setInitiatives] = useState([])

	const getAllInitiatives = async() => {
		const initiatives = await axios.get('/api/initiatives')
		setInitiatives(initiatives.data.initiatives)
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