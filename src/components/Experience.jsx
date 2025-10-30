import { Button } from "./Button";
import { useState } from "react";

export function Experience({onSubmit}){//parameters will also include onEdit, onDelete, onAdd
    const [expEntries, setExpEntries] = useState([{
        company: "",
        position: "",
        dateStart: "",
        dateEnd: "",
        tasks: "",
    }]);

    function handleChange(index, e){
        const {id, value} = e.target;
        const upArr = [... expEntries];
        upArr[index][id] = value;
        setExpEntries(upArr);
    }

    function addEntry(){
        setExpEntries(prev => [...prev, {company: "", position: "", dateStart: "", dateEnd: "", tasks: ""}]);
    }

    function remEntry(index){
        const upArr = [...expEntries];
        upArr.splice(index, 1);
        setExpEntries(upArr);
    }
    function educationSubmit(e){
        e.preventDefault();
        onSubmit(expEntries);
    }

    return (
        <form className="experience-info" action="POST">
            <h2>Experience</h2>
            {expEntries.map((entry, index) => (
                <div key={index} className="experience-block">
                    <label htmlFor="company">Company: </label>
                    <input type="text" id="company" value= {entry.company} onChange={(e) => handleChange(index, e)}/>
                    <label htmlFor="position">Position: </label>
                    <input type="text" id="position" value={entry.position} onChange={(e) => handleChange(index, e)}/>
                    <label htmlFor="dateStart">Starting date: </label>
                    <input type="date" id="dateStart" value={entry.dateStart} onChange={(e) => handleChange(index, e)}/>
                    <label htmlFor="dateEnd">Ending date: </label>
                    <input type="date" id="dateEnd" value={entry.dateEnd} onChange={(e) => handleChange(index, e)}/>
                    <label htmlFor="tasks">Main tasks: </label>
                    <input type="text" id="tasks" value={entry.tasks} onChange={(e) => handleChange(index, e)}/>
                    <Button type="button" text="Remove" onClick={() => remEntry(index)} fontSize="14px"/>
                </div>    
            ))}
            <Button className="expInfoAdd" type="button" text="Add Experience" onClick={addEntry} fontSize="18px"/>
            <Button className="expInfoSub" type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )

}