import React from 'react'

function VoteItem({initiativeId, votes, setVotes, initiatives, initiative, setInitiatives}) {

const totalVotes = (id) => votes.filter((vote)=> vote.initiativeId === id).length
const totalUpVotes = (id) => votes.filter((vote)=> vote.initiativeId === id).filter((vote)=> vote.vote === true).length
const percentage = totalUpVotes/totalVotes

console.log(11111111111, votes.filter((vote)=> vote.initiativeId === initiative.id).length);
		return (
		<div className='vote-card'>
			<div>
				{initiative.title}
				{initiative.description}
			</div>
			<div>
			<div>Всего голосов</div>
			<div>{totalVotes(initiative.id)}</div>
			</div>
			<div>
			<div>{`Голосов за (%)`}</div>
			<div>{`${(totalUpVotes(initiative.id)/totalVotes(initiative.id)*100).toFixed(2)}%`}</div>
			</div>
		</div>
	)
}

export default VoteItem