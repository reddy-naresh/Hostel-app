import React, { useState } from 'react'
import './Floor.css'

function Floor({name}) {
    const [options, setoptions] = useState();

    const rooms = [1,2,3,4,10,null, null,5,9,8,7,6];

    
    const [modalClass, setmodalClass] = useState( localStorage.getItem(`${name}modalClass`) ? localStorage.getItem(`${name}modalClass`) : 'hidden');
    

    return (
        <div className="floor">
            <h1>Choose a floor</h1>
            <select value={options} onChange={({target: {value}})=>{
                setoptions(value);
                localStorage.setItem(`${name}floor`,`${value}`)

            }}>

                <option key='1' value="1">1st Floor</option>
                <option key='2' value="2">2nd Floor</option>
                <option key='3' value="3">3rd Floor</option>
                <option key='4' value="4">4th Floor</option>
                <option key='5' value="5">5th Floor</option>
            </select>

            <div className="room-container">
                { rooms.map((room,index)=>{
                    return (
                        <div id={`room${index}`} key={index} className="room" onClick={()=>{
                            document.getElementById('roomButton').classList= "visible";
                            localStorage.setItem(`${name}roomNo`,`${room}`)
                        }}>{room}</div>
                    )
                })}
            </div>

            <button id="roomButton" className="" onClick={()=>{
                            setmodalClass('visibleModal');
                            localStorage.setItem(`${name}modalClass`, 'visibleModal');
                        }}>Book Room</button>

            <div id="modal" className={modalClass}>
                <h1>Success</h1>
                <h2>Your room has been booked successfully.</h2>
                <div id="modalpara">
                    <h2>Your room details are as follows:</h2>
                    <h3>Hostel No. <span>{localStorage.getItem(`${name}hostelChoice`)}</span> </h3>
                    <h3>Floor No.<span>{localStorage.getItem(`${name}floor`)}</span> </h3>
                    <h3>Room No. <span>{localStorage.getItem(`${name}roomNo`)}</span>  </h3>
                </div>

                <div className="closeButton" onClick={()=>{
                    localStorage.removeItem(`${name}modalClass`);
                }}>X</div>
            </div>
        </div>
    )
}

export default Floor

