
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import requestAxios, { setAccessToken } from '../../services/axios';


function Navbar({ user, setUser }) {

    const onHandleLogout = async () => {
        const { data } = await requestAxios.get('/auth/logout');
        if (data.message === 'success') {
            setAccessToken(undefined);
            setUser(undefined);
        }
    }

    return (
        <nav className='aaa'>

            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/votes'>Голоса</NavLink>
            {user ? (
                <>
                    <NavLink onClick={onHandleLogout}>Выход</NavLink>

                </>
            ) : (<>
                <NavLink to='/registration' >Регистрация</NavLink>
                <NavLink to='/authorization'>Вход</NavLink>
            </>)}


            <div>Привет: {user?.fullName}!</div>
        </nav>
    );
}

export default Navbar;