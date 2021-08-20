import React, { useState } from 'react'
import Floor from './Floor';
import './HostelChoice.css'

export default function HostelChoice(props) {
    const {gender,name} = props;
    const array = [1,2,3,4,5,6]
    const [hostel, sethostel] = useState(localStorage.getItem(`${name}hostelChoice`))

    return (
        
        <>
            {hostel
                ? <Floor name={name}/>
                : <div className="hostelChoice">
            
                    <h1>Choose a hostel</h1>
                    <div className="hostelChoice__option-container" >
                        {array.map((element)=>{
                            return (
                                <div key={element} className="hostelChoice__option" onClick={()=>{
                                        localStorage.setItem(`${name}hostelChoice`, `${gender}${element}`)
                                        sethostel(localStorage.getItem(`${name}hostelChoice`))
                                       
                                    }
                                }>
                                    {gender}{element}
                                </div>
                            )
                        })}
                        
                   </div>
            </div>
            }
        </>
        
    )
}
