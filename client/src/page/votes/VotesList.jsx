import React, { useEffect, useState } from 'react'
import InitiativeItem from '../initiatives/InitiativeItem'
import axios from 'axios'
import VoteItem from './VoteItem'

function VotesList({votes, setVotes, initiatives, setInitiatives}) {


	return (
		<>
			<div>VotesList</div>
			{initiatives.map((initiative) => (
				<div key={initiative.id}>
					<VoteItem initiativeId = {initiative.id} votes={votes} setVotes={setVotes} initiative={initiative} initiatives={initiatives} setInitiatives={setInitiatives} />
				</div>
			))}
		</>
	)
}

export default VotesList;
