import React from 'react'
import boys from './boys.png';
import girls from './girls.png';
import './Sex.css';

function Sex(props) {

    const {sexSelect, name} = props;

    return (
        <div className='sex'>
            <h1>Choose your Hostel</h1>
            <div className="sex__option-container" >
                <div className="sex__option girls" onClick={()=>{
                        localStorage.setItem(`${name}sex`, 'G');
                        sexSelect("G")
                    }}>
                    <img src={girls} alt='boys' />
                    <h2>Girls Hostel</h2>
                </div>

                <div className="sex__option boys" onClick={()=>{
                        localStorage.setItem(`${name}sex`, 'B');
                        sexSelect("B")
                    }}>
                    <img src={boys} alt='boys'/>
                    <h2>Boys Hostel</h2>
                </div>
            </div>
        </div>
    )
}

export default Sex
