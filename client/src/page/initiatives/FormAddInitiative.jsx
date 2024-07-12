import React, { useState } from 'react';
import requestAxios from '../../services/axios';

function FormAddInitiative({ initiative, setInitiatives, user }) {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await requestAxios.post('/initiatives', {
            title,
            description,
        });
        if (data.message === 'success') {
            setInitiatives((prev) => [...prev, data.initiative]);
            setIsAddNew(false);
        }
    };

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <h1>Форма добавления нового фильма</h1>
                <input
                    type="text"
                    name="name"
                    value={title}
                    placeholder="Название"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Описание"
                    onChange={(e) => setDescription(e.target.value)}
                />



                <button type="submit">Создать</button>
                <button type="button" onClick={() => setIsAddNew(false)}>
                    Отмена
                </button>
            </form>

        </>
    );
}

export default FormAddInitiative;
