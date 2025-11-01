import { useState } from 'react'
import {GeneralInfo} from './GeneralInfo.jsx'
import {Education} from './Education.jsx'
import {Experience} from './Experience.jsx'
import {Preview} from './Preview.jsx'
import { Button } from './Button.jsx'

export function App() {
  const [cvData, setData] = useState({
    general: null,
    education: [],
    experience: []
  });

  function updateSectionHandler(section, data){
    setData(prev => ({...prev, [section]: data}));
  }

  return(
    <div className="AppCvFilled">
      <div className="inputs">
        <GeneralInfo onSubmit = {(data) => updateSectionHandler("general", data)}/>
        <Education onSubmit = {(data) => updateSectionHandler("education", data)}/>
        <Experience onSubmit={(data) => updateSectionHandler("experience", data)}/>
      </div>
      <Preview data = {cvData}/>
    </div>
  )
}