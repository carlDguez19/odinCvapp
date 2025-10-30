import { Button } from "./Button.jsx";
import { useState } from "react";

export function Education({onSubmit}){//parameters will also include onEdit, onDelete, onAdd
    const[eduEntries, setEntries] = useState([{
        school: "",
        title: "",
        dateStart: "",
        dateEnd: "",
    }]);

    function handleChange(index, e){
        const {id, value} = e.target;
        const upArr = [... eduEntries];
        upArr[index][id] = value;
        setEntries(upArr);
    }

    function addEntry(){
        setEntries(prev => [... prev, {school: "", title: "", dateStart: "", dateEnd: ""}]);
    }

    function remEntry(index){
        const upArr = [... eduEntries];
        upArr.splice(index, 1);
        setEntries(upArr);
    }

    function educationSubmit(e){
        e.preventDefault();
        onSubmit(eduEntries);
    }

    return (
        <form className = "education-info">
            <h2>Education</h2>
            {eduEntries.map((entry, index) => (
                <div key={index} className="education-entry">
                    <label htmlFor="school">School: </label>
                    <input type="text" id="school" value={entry.school} onChange={(e) => handleChange(index, e)} />
                    <label htmlFor="title">Title of Study: </label>
                    <input type="text" id="title" value={entry.title} onChange={(e) => handleChange(index, e)} />
                    <label htmlFor="dateStart">Starting date: </label>
                    <input type="date" id="dateStart" value={entry.dateStart} onChange={(e) => handleChange(index, e)}/>
                    <label htmlFor="dateEnd">Graduation date: </label>
                    {<input type="date" id="dateEnd" value={entry.dateEnd} onChange={(e) => handleChange(index, e)}/> /*handleChange(index) */}
                    {eduEntries.length > 1 && 
                        <Button type="button" text="Remove" onClick={() => remEntry(index)} fontSize="14px"/>
                    }
                </div>
            ))}
            {eduEntries.length < 6 && 
                <Button className="eduInfoAdd" type="button" text="Add Education" onClick={addEntry} fontSize="18px"/>
            }
            <Button className="eduInfoSub" type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )
}