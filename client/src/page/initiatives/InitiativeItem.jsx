import React from 'react'
import './InitiativeItem.css'
import Button from '../../ui/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'


function InitiativeItem({ user, initiative, setInitiatives }) {
	//Состояние для изменения отображения формы изменения элемента
	const [isOpen, setIsopen] = useState(false)

	//Функция 'голосовать 'за''
	const upvoteFunc = async (id) => {
		const inits = await axios.get('/api/initiatives')
		// console.log(111111, inits.data.initiatives);
		const vote = await axios.get('/api/votes')
		const upvote = await axios.put(`/api/votes/:${id}`, {vote:true})
	}

	//Функция 'голосовать 'за'
	// const downvoteFunc = async (id) => {
	// 	e.preventDefault()
	// 	const { data } = await axios.put(`/api/votes/${id}`)
	// 	if (data.message === 'success') {
	// 		setInitiatives((prev) => !prev)
	// 	}
	// }


	return (
		<>
			<div className='item-card'>
				<div key={initiative.id}>
					Название: {initiative.title}
					<div>Lorem ipllat ipsa beatae soluta, id illum eveniet magnam amet iste nobis officia enim eum tempore! Ipsum laboriosam eum nemo ducimus vitae doloribus, eveniet tempore aliquid, totam saepe veniam!</div>
				</div>
				<Button buttonName={'Изменить'}
					buttonClass={'change-button'}
					onClickFunc={() => setIsopen((prev) => !prev)} />
				<Button buttonName={'Удалить'}
					buttonClass={'change-button'}
					onClickFunc={() => { }} />
				<Button buttonName={'Голосовать'}
					buttonClass={'change-button'}
					onClickFunc={() => setIsopen((prev) => !prev)} />
				{isOpen && (
					<>
						<div>
							<Button buttonName={'За'}
								buttonClass={'upvote-button'}
								onClickFunc={() => upvoteFunc()} />
							<Button buttonName={'Против'}
								buttonClass={'downvote-button'}
								onClickFunc={() => setIsopen((prev) => !prev)} />
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default InitiativeItem