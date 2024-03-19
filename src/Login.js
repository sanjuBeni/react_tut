import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login () {
    const navigation = useNavigate();
    const [login, setlogin] = useState(false)

    const loginPage = () =>{
        localStorage.setItem('login', true);
        setlogin(true);
    }

    useEffect(() => {
        if(login) {
            navigation('/home');
        }
    })

    return (
        <>
            <button onClick={loginPage}>Login</button>
        </>
    )
}

export default Login;