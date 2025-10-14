import { useState } from 'react'
import {GeneralInfo} from './GeneralInfo.jsx'
import '../assets/App.css'

export function App() {
  const [cvData, setData] = useState({
    general: null,
    education: null,
    experience: null
  });

  function updateSectionHandler(section, data){
    setData(prev => ({...prev, [section]: data}));
  }

  return(
    <div className="AppCvFilled">
      <GeneralInfo onSubmit = {(data) => updateSectionHandler("general", data)}/>
    </div>
  )
}