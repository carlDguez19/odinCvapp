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

    const handleChange = (e) => {
        const {id, value} = e.target;
        const upArr = [... expEntries];
        upArr[index][id] = value;
        setExpEntries(upArr);
    }

    function addEntry(){
        setExpEntries(prev => [...prev, {company: "", position: "", dateStart: "", dateEnd: "", tasks: ""}]);
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
                    <input type="text" id="company" onChange={handleChange}/>
                    <label htmlFor="position">Position: </label>
                    <input type="text" id="position" onChange={handleChange}/>
                    <label htmlFor="dateStart">Starting date: </label>
                    <input type="date" id="dateStart" onChange={handleChange}/>
                    <label htmlFor="dateEnd">Ending date: </label>
                    <input type="date" id="dateEnd" onChange={handleChange}/>
                    <label htmlFor="tasks">Main tasks: </label>
                    <input type="text" id="tasks" onChange={handleChange}/>
                </div>    
            ))}
            <Button type="button" text="Add Experience" onClick={addEntry} fontSize="18px"/>
            <Button type="submit" text="Submit" onClick={educationSubmit} fontSize="18px"/>
        </form>
    )

}