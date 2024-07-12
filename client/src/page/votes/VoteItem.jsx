import React from 'react'
import './VoteItem.css'

function VoteItem({ initiativeId, votes, setVotes, initiatives, initiative, setInitiatives }) {

	const totalVotes = (id) => votes.filter((vote) => vote.initiativeId === id).length
	const totalUpVotes = (id) => votes.filter((vote) => vote.initiativeId === id).filter((vote) => vote.vote === true).length
	return (
		<div className='vote-card'>
			<div className='desc'>
				<div>
				{initiative.title}
				</div>
				<div>
				{initiative.description}
				</div>
			</div>
			<div className='numbers'>
			<div>
				<div>Всего голосов</div>
				<div>{totalVotes(initiative.id)}</div>
			</div>
			<div>
				<div>{`Голосов за (%)`}</div>
				<div>{`${(totalUpVotes(initiative.id) / totalVotes(initiative.id) * 100).toFixed(2)}%`}</div>
			</div>
			</div>
		</div>
	)
}

export default VoteItem