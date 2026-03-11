import { Button } from "./Button.jsx";
import { useState } from "react";

export function Education({onSubmit}){
    //Local state for all education entries
    //Starts with a single empty entry so the form always renders at least one block
    const[eduEntries, setEntries] = useState([{
        school: "",
        title: "",
        dateStart: "",
        dateEnd: "",
    }]);

    //Handles updates to any field in any entry
    //index: which entry is being edited
    //id: which field inside that entry
    function handleChange(index, e){
        const {id, value} = e.target;

        //Create a shallow copy of the entries array to avoid mutating state directly
        const upArr = [... eduEntries];

        //Update the specific field in the specific entry
        upArr[index][id] = value;

        //replace the entire array with the updated version
        setEntries(upArr);
    }

    //adds a new blank education entry
    //Limited to 5 entries to prevent excessive form growth
    function addEntry(){
        setEntries(prev => [... prev, {school: "", title: "", dateStart: "", dateEnd: ""}]);
    }

    //removes a specific entry by index
    //Uses splice on a copied array to maintain immutability
    function remEntry(index){
        const upArr = [... eduEntries];
        upArr.splice(index, 1);
        setEntries(upArr);
    }

    //send the full list of education entries upward to the parent component
    function educationSubmit(e){
        e.preventDefault();
        onSubmit(eduEntries);
    }

    return (
        //wrapper for the entire education section
        <form className = "education-info">
            <h2>Education</h2>
            
            {/* render one block per education entry */}
            {eduEntries.map((entry, index) => (
                <div key={index} className="education-block">
                    <div className="labelInputDiv">
                        <label htmlFor="school">School: </label>
                        <input type="text" id="school" value={entry.school} onChange={(e) => handleChange(index, e)} />
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="title">Title of Study: </label>
                        <input type="text" id="title" value={entry.title} onChange={(e) => handleChange(index, e)} />
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="dateStart">Starting date: </label>
                        <input type="date" id="dateStart" value={entry.dateStart} onChange={(e) => handleChange(index, e)}/>
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="dateEnd">Graduation date: </label>
                        <input type="date" id="dateEnd" value={entry.dateEnd} onChange={(e) => handleChange(index, e)}/>
                    </div>
                    {eduEntries.length > 0 && 
                        <Button type="button" text="Remove" onClick={() => remEntry(index)} fontSize="14px"/>
                    }
                </div>
            ))}
            
            {/* add new entry button(max 5 entries) */}
            {eduEntries.length < 5 && 
                <Button className="eduInfoAdd" type="button" text="Add Education" onClick={addEntry} fontSize="18px"/>
            }

            {/* submit entire education section */}
            <Button className="eduInfoSub" type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )
}