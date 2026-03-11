import { useState } from 'react'
import {GeneralInfo} from './GeneralInfo.jsx'
import {Education} from './Education.jsx'
import {Experience} from './Experience.jsx'
import {Preview} from './Preview.jsx'
import { Button } from './Button.jsx'

export function App() {
  //Global CV state: each section stores its own data structure
  //general: single object
  //education: array of entries
  //experience: array of entries
  const [cvData, setData] = useState({
    general: null,
    education: [],
    experience: []
  });

  //Update handler for all sections.
  //Receives a section name('general', 'education', 'experience')
  // and replaces only that part of the state while preserving the rest
  function updateSectionHandler(section, data){
    setData(prev => ({...prev, [section]: data}));
  }

  return(
    //Main layout wrapper: form inputs on the left, preview on the right.
    <div className="AppCvFilled">
      {/* input column: each component manages its own form and submits data upward */}
      <div className="inputs">
        <GeneralInfo onSubmit = {(data) => updateSectionHandler("general", data)}/>
        <Education onSubmit = {(data) => updateSectionHandler("education", data)}/>
        <Experience onSubmit={(data) => updateSectionHandler("experience", data)}/>
      </div>
      {/* preview column: receives the entire cv state and renders a formatted cv */}
      <div className="previewSec">
        <Preview data = {cvData}/>
      </div>
    </div>
  )
}