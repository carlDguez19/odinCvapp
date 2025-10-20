import { Button } from "./Button.jsx";
import { useState } from "react";

export function Education({onSubmit}){//parameters will also include onEdit, onDelete, onAdd
    const[eduEntries, setEntries] = useState([{
        school: "",
        title: "",
        dateStart: "",
        dateEnd: "",
    }]);

    const handleChange = (e) => {
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
                    <input type="text" id="school" onChange={handleChange} />
                    <label htmlFor="title">Title of Study: </label>
                    <input type="text" id="title" onChange={handleChange} />
                    <label htmlFor="dateStart">Starting date: </label>
                    <input type="date" id="dateStart" onChange={handleChange}/>
                    <label htmlFor="dateEnd">Graduation date: </label>
                    <input type="date" id="dateEnd" onChange={handleChange}/>
                    {eduEntries.length > 1 && 
                        <Button type="button" text="Remove" onClick={() => remEntry(index)} fontSize="14px"/>
                    }
                </div>
            ))}
            {eduEntries.length < 6 && 
                <Button type="button" text="Add Education" onClick={addEntry} fontSize="18px"/>
            }
            <Button type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )
}