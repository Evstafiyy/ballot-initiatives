
import { useEffect, useState } from 'react'
import Main from '../page/main/Main'
import Authorization from '../page/auth/Authorization';
import Registration from '../page/auth/Registration';
import requestAxios, { setAccessToken } from '../services/axios';
import { Route, Routes } from 'react-router-dom'
import Navbar from '../page/navbar/Navbar'
import './App.css'
import Initiatives from '../page/initiatives/Initiatives';



function App() {
  const [user, setUser] = useState()

  const AxiosChekUser = async () => {
    const { data } = await requestAxios.get('/tokens/refresh');

    setUser(data.user);
    setAccessToken(data.accessToken);

  };
  useEffect(() => {


    AxiosChekUser();
  }, [])


  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/initiatives' element={<Initiatives user={user} setUser = {setUser} />} />
        <Route
          path='/registration'
          element={<Registration setUser={setUser} user={user} />}
        />
        <Route
          path='/authorization'
          element={<Authorization setUser={setUser} user={user} />}
        />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>

    </>
  )

}

export default App
