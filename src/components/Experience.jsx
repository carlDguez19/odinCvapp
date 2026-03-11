import { Button } from "./Button";
import { useState } from "react";

export function Experience({onSubmit}){
    //Local state for all experience entries
    //Starts with one blank entry so th form always renders at least on block of inputs
    const [expEntries, setExpEntries] = useState([{
        company: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        tasks: "",
    }]);

    //handles updates to any failed in any entry
    //index: which experience block is being edited
    //id: which field inside that block
    function handleChange(index, e){
        const {id, value} = e.target;

        //copy array to avoid mutating state directly
        const upArr = [... expEntries];

        //update the specific field in the specific entry
        upArr[index][id] = value;

        //replace the entire array with the updated version
        setExpEntries(upArr);
    }

    //adds a new blank experience entry
    function addEntry(){
        setExpEntries(prev => [...prev, {company: "", position: "", dateStart: "", dateEnd: "", tasks: ""}]);
    }

    //removes an entry by index
    function remEntry(index){
        const upArr = [...expEntries];
        upArr.splice(index, 1);
        setExpEntries(upArr);
    }

    //sends the full list of experience  entries upward to the parent
    function educationSubmit(e){
        e.preventDefault();
        onSubmit(expEntries);
    }

    return (
        //wrapper for the entire experience section
        <form className="experience-info" action="POST">
            <h2>Experience</h2>

            {/* render one block per experience entry */}
            {expEntries.map((entry, index) => (
                <div key={index} className="experience-block">
                    <div className="labelInputDiv">
                        <label htmlFor="company">Company: </label>
                        <input type="text" id="company" value= {entry.company} onChange={(e) => handleChange(index, e)}/>
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="position">Position: </label>
                        <input type="text" id="position" value={entry.position} onChange={(e) => handleChange(index, e)}/>
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="dateStart">Starting date: </label>
                        <input type="date" id="dateStart" value={entry.dateStart} onChange={(e) => handleChange(index, e)}/>
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="dateEnd">Ending date: </label>
                        <input type="date" id="dateEnd" value={entry.dateEnd} onChange={(e) => handleChange(index, e)}/>
                    </div>
                    <div className="labelInputDiv">
                        <label htmlFor="tasks">Main tasks: </label>
                        <textarea rows="5" cols="30" id="tasks" value={entry.tasks} onChange={(e) => handleChange(index, e)}/>
                    </div>

                    {/* remove button for this entry */}
                    <Button type="button" text="Remove" onClick={() => remEntry(index)} fontSize="14px"/>
                </div>    
            ))}

            {/* add new experience entry */}
            <Button className="expInfoAdd" type="button" text="Add Experience" onClick={addEntry} fontSize="18px"/>

            {/* submit entire experience section */}
            <Button className="expInfoSub" type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )

}