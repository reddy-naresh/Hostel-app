import React, { useState } from 'react'
import App from './App';
import './Login.css';
import Welcomeback from './Welcomeback';

function Login() {

    const [loggedIn, setloggedIn]= useState(false)
    const [userName, setuserName]= useState(null);
    const [userpassword, setuserpassword]= useState(null);
    
    let alreadybooked = localStorage.getItem(`${userName+userpassword}modalClass`);
    console.log('alreadybooked ', alreadybooked)

    return (
        <div className="login">
            {loggedIn
                ? (alreadybooked? <Welcomeback name={userName+userpassword}/>: <App name={userName+userpassword}/>)
                : <>
                    
                    <form className="login__form">
                        <h2>Hostel Allocation</h2>
                        <h3>Please sign in</h3>
                        <label className="login-label">
                            Name:
                            <input type="text" name="name" onChange={({target : {value}})=>{
                                setuserName(value);
                                console.log(userName);
                            }} />
                        </label>
                        <label className="login-label">
                            Password:
                            <input type="password" name="name" onChange={({target : {value}})=>{
                                setuserpassword(value);
                                console.log(userpassword);
                            }}/>
                        </label>
                        
                        <button id="signin-button" onClick={(event)=>{
                            event.preventDefault();
                            setloggedIn(true);
                        }}>Login</button>
                    </form>
                </>}
        </div>
    )
}

export default Login
