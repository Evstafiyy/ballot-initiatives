import React, { useState } from 'react';
import './InitiativeItem.css';
import requestAxios from '../../services/axios';
import FormUpdateInitiative from './FormUpdateInitiative';
import Button from '../../ui/Button';

function InitiativeItem({ initiative, setInitiatives, user }) {
	const [isUpdate, setIsUpdate] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const onHandleDelete = async () => {
		try {
			const { data } = await requestAxios.delete(`/initiatives/${initiative.id}`);
			if (data.message === 'success') {
				setInitiatives((prev) => prev.filter((delInitiative) => delInitiative.id !== initiative.id));
			}
		} catch (error) {
			console.error('Ошибка при удалении:', error);
		}
	};

	const voteUp = async (e, id) => {
		e.preventDefault();
		try {
			const { data } = await requestAxios.put(`/api/votes/${id}`);
			if (data.message === 'success') {
				setInitiatives((prev) => prev.map((i) => (i.id === id ? { ...i, vote: !i.vote } : i)));
			}
		} catch (error) {
			console.error('Ошибка при голосовании:', error);
		}
	};

	return (
		<div className='item-card' key={initiative.id}>
			{isUpdate ? (
				<FormUpdateInitiative initiative={initiative} setInitiatives={setInitiatives} setIsUpdate={setIsUpdate} />
			) : (
				<>
					<div>
						<div>Название: {initiative.title}</div>
						<div>Описание: {initiative.description}</div>
					</div>
					{user.id === initiative.userId && (
						<>

							<button onClick={() => setIsUpdate(true)} className='change-button' > Изменить</button>
							<button onClick={onHandleDelete} className='change-button' > Удалить</button>
							<button onClick={() => setIsOpen((prev) => !prev)} className='change-button' > Голосовать</button>

						</>
					)}
					<>
						{isOpen && (
							<>
								<Button buttonName={'За'} buttonClass={'upvote-buttosn'} onClick={(e) => voteUp(e, initiative.id)} />
								<Button buttonName={'Против'} buttonClass={'downvote-button'} onClick={(e) => voteUp(e, initiative.id)} />
							</>
						)}
					</>

				</>
			)}
		</div>
	);
}

export default InitiativeItem;
