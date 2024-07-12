import React from 'react'
import './InitiativeItem.css'
import Button from '../../ui/Button'
import { useState, useEffect } from 'react'

function InitiativeItem({ initiative, setInitiatives }) {
	//Состояние для изменения отображения формы изменения элемента
	const [isOpen, setIsopen] = useState(false)

	//Состояние формы изменения элемента
	const [form, setForm] = useState(initiative)

	// Состояние формы изменения голосов
	const [vote, setVote] = useState(false)


	//Функции кнопки



//Функция 'голосовать 'за''
const voteUp = async (id) => {
	e.preventDefault()
	const { data } = await axios.put(`/api/votes/${id}`)
	if (data.message === 'success') {
		setInitiativess((prev) => !prev)
	}
}

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
					onClickFunc={()=>  {} } />
			<Button buttonName={'Голосовать'}
				buttonClass={'change-button'}
				onClickFunc={() => setIsopen((prev) => !prev)} />
		{isOpen && (
			<>
			<div>
			<Button buttonName={'За'}
				buttonClass={'upvote-button'}
				onClickFunc={() => setIsopen((prev) => !prev)} />
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