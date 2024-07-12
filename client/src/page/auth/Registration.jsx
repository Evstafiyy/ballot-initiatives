import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import "./Registration.css"

function Registration({ setUser, user }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (password.trim() === cpassword.trim()) {
                const { data } = await requestAxios.post('/auth/registration', {
                    fullName,
                    email,
                    password,
                });
                if (data.message === 'success') {
                    setUser(data.user);

                    setAccessToken(data.accessToken);
                    navigate('/');
                }
                return;
            }
            setError('Пароли не совпадают');
            return;
        } catch ({ message }) {
            setError(message);
        }
    };

    return (
        <div>
            <h1></h1>
            <form className='auth' onSubmit={onHandleSubmit}>
                <label htmlFor='fullName'>
                    <input className='input1'
                        type='text'
                        placeholder='Введите Фио'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </label>
                <label htmlFor='email'>
                    <input className='input2'
                        type='email'
                        placeholder='Введите Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor='password'>
                    <input className='input3'
                        type='password'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label htmlFor='password'>
                    <input className='input4'
                        type='password'
                        placeholder='Повторите пароль'
                        value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)}
                    />
                </label>
                <span>{error && <p>{error}</p>}</span>
               <div className='butt'><button  type='submit'>Зарегистрироваться</button></div> 
            </form>
        </div>
    );
}

export default Registration;
