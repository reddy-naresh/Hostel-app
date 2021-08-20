import { useState } from 'react';
import './App.css';
import HostelChoice from './HostelChoice';
import Sex from './Sex';




function App({name}) {

  

  const init = localStorage.getItem(`${name}sex`);
  const [sex, setsex] = useState(init);

  function sexSelect(option){
    setsex(option);
  }

  return (
    <div className="app">
        { sex
            ? <HostelChoice gender={sex} name={name} /> 
            : <Sex name={name} sexSelect={sexSelect}/>
        }
    </div>
  );
}

export default App;
