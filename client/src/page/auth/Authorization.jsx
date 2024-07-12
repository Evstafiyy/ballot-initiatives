import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestAxios, { setAccessToken } from '../../services/axios';
import "./Authorization.css"

function Authorization({ setUser, user }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const onHadleSubmit = async (e) => {
        e.preventDefault();


        const { data } = await requestAxios.post('/auth/authorization', {
            email,
            password,
        });
        console.log(data)
        if (data.message === 'success') {
            setUser(data.user);
            setAccessToken(data.accessToken);
            navigate('/');
        }
    };

    return (
        <div>
            <h1></h1>
            <form className='auth' onSubmit={onHadleSubmit}>
                <label htmlFor='email'>
                    <input className='inp1'
                        type='email'
                        placeholder='Введите Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor='password'>
                    <input className='inp2'
                        type='password'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
               <div className='butt'><button  className ='button' type='submit'>Войти</button></div> 
            </form>
        </div>
    );
}

export default Authorization;
