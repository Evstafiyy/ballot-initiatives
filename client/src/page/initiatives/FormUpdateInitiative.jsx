import React, { useState } from 'react';
import requestAxios from '../../services/axios';

function FormUpdateInitiative({ initiative, setInitiatives, setIsUpdate }) {
    const [title, setTitle] = useState(initiative.title);
    const [description, setDescription] = useState(initiative.description);


    const onHandleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await requestAxios.put(`/initiatives/${initiative.id}`, {
            title,
            description,
        });
    
        if (data.message === 'success') {

            setInitiatives((prev) =>(
                prev.map((i) => (i.id === data.initiative.id ? data.initiative : i)))
        
            );
            setIsUpdate(false);
        }
    };

    return (
        <div>
            <h1>Форма изменения </h1>
            <form onSubmit={onHandleSubmit}>
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


                <button type="submit">Обновить</button>
            </form>
            <button onClick={() => setIsUpdate(false)}>Отмена</button>
        </div>
    );
}



export default FormUpdateInitiative;