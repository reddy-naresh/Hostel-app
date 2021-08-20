import React from 'react'
// import { useHistory } from 'react-router-dom';
import './Welcomeback.css'

function Welcomeback({name}) {

    const modalClass = localStorage.getItem(`${name}modalClass`);


    return (
        <div className="welcomeback">
            <div id="welcomemodal" className={modalClass}>
                <h1>Welcome Back</h1>
                <h2>You have already booked a room</h2>
                <div id="modalpara">
                    <h2>Your room details are as follows:</h2>
                    <h3>Hostel No. <span>{localStorage.getItem(`${name}hostelChoice`)}</span> </h3>
                    <h3>Floor No.<span>{localStorage.getItem(`${name}floor`)}</span> </h3>
                    <h3>Room No. <span>{localStorage.getItem(`${name}roomNo`)}</span>  </h3>
                </div>

                
            </div>

            <div className="new-accomodation" onClick={()=>{
                    localStorage.removeItem(`${name}modalClass`);
                    localStorage.removeItem(`${name}sex`);
                    localStorage.removeItem(`${name}floor`);
                    localStorage.removeItem(`${name}roomNo`);
                    localStorage.removeItem(`${name}hostelChoice`);
                    window.location.reload(false);
                }}>Delete Booking and Logout</div>
        </div>
        
    )
}

export default Welcomeback
