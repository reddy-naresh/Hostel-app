import React, { useState } from 'react'
import App from './App';
import './Login.css';

function Login() {

    const [loggedIn, setloggedIn]= useState(false)
    const [userName, setuserName]= useState(null);
 
    return (
        <div className="login">
            {loggedIn
                ? <App name={userName}/>
                : <>
                    <form className="login__form">
                        <label>
                            Name:
                            <input type="text" name="name" onChange={({target : {value}})=>{
                                setuserName(value);
                                console.log(userName);
                            }} />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="name" />
                        </label>
                        
                        <button onClick={(event)=>{
                            event.preventDefault();
                            setloggedIn(true);
                        }}>Login</button>
                    </form>
                </>}
        </div>
    )
}

export default Login
