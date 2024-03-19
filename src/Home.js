import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

  const navigation = useNavigate();

  const [logout, setLogout] = useState(true);

  const logoutPage = () => {
    setLogout(localStorage.setItem('login', false));
  }

  useEffect(() => {
      console.log(123);
    if(!logout) {
      navigation('/');
    }
  })

  return (
    <>
        <h2>Home Page </h2>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/user/sanjay'>Sanjay</Link>
        <button onClick={logoutPage}>Logout</button>
    </>
  )
}
