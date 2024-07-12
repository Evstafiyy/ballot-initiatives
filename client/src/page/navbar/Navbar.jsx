
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
		<nav className='navbar'>
			<NavLink className={'nav-link'} to='/'>Главная</NavLink>
			<NavLink className={'nav-link'} to='/initiatives'>Инициативы</NavLink>
			<NavLink className={'nav-link'} to='/votes'>Голоса</NavLink>
			{user ? (
				<>
					<NavLink  className={'nav-link'} onClick={onHandleLogout}>Выход</NavLink>
				</>
			) : (<>
				<NavLink className={'nav-link'} to='/registration' >Регистрация</NavLink>
				<NavLink  className={'nav-link'} to='/authorization'>Вход</NavLink>
			</>)}
			<div>{user?.fullName}</div>
		</nav>
	);

}

export default Navbar;